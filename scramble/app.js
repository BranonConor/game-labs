import { startAtmosphere } from "./atmosphere.js";
import { createGoogleAuth, googleAuthError } from "./auth.js";
import { DURATION_MS, FULL_BOARD_BONUS, generateBoard, SIZE, VALUES } from "./ranked-board.js";
import { validRunState } from "./run-state.js";
import { SCORE_TIERS, tierForScore, tierRange } from "./score-tiers.js";
import { formatShareResult } from "./share-result.js";
import { tutorialExamples } from "./tutorial-example.js";

export function mountGame(authConfigured) {
  "use strict";

  const DURATION = DURATION_MS;
  const FINALE_DURATION = 2100;
  const ROUTE_COLORS = [
    { light: "#ffac6d", deep: "#a45148" },
    { light: "#f77eb5", deep: "#943f83" },
    { light: "#79e8ba", deep: "#327d76" },
    { light: "#af98ff", deep: "#6550a2" },
    { light: "#7bcdec", deep: "#387aa8" },
    { light: "#ffe477", deep: "#a77d40" }
  ];
  let dictionary = null;
  let lexiconText = null;
  let moveWorker = null;
  let moveWorkerReady = false;
  let moveCheckId = 0;
  let inspectedRoute = null;
  let shareStatusTimer = null;
  let shareExitTimer = null;
  const day = new Date().toISOString().slice(0, 10);
  const requestedSeed = new URLSearchParams(location.search).get("seed");
  const practiceSeed = requestedSeed && /^[\w-]{1,64}$/.test(requestedSeed) ? requestedSeed : null;
  const boardId = practiceSeed ? `${day}:${practiceSeed}` : day;
  const guestStorageKey = `scramble-v6:${boardId}`;
  let storageKey = guestStorageKey;
  const $ = (id) => document.getElementById(id);
  const eggAsset = (tier) => `/eggs/${tier.id}.svg`;
  const boardElement = $("board");
  const boardWrap = boardElement.parentElement;
  const menuDialog = $("menu-dialog");
  const rulesDialog = $("rules-dialog");
  const tutorialDialog = $("tutorial-dialog");
  const feedback = $("feedback");
  const wordEntry = $("word-entry");
  const mobileKeyboard = $("mobile-keyboard");
  const menuPages = {
    settings: "Game preferences will live here. For now, motion follows your device settings.",
  };

  function adjacent(from, to) {
    const rowDistance = Math.abs(Math.floor(from / SIZE) - Math.floor(to / SIZE));
    const colDistance = Math.abs(from % SIZE - to % SIZE);
    return rowDistance + colDistance === 1;
  }
  const { fixed, initialFilled, effectTiles } = generateBoard(boardId);
  const examples = tutorialExamples(fixed, effectTiles);
  const example = examples[0];
  const freshState = () => ({ startedAt: null, endedAt: null, finished: false, played: {}, words: [], spentEffects: [], score: 0, fullBoardBonusAwarded: false });
  let state = freshState();
  let activeUserId = null;
  let rankedMode = "unranked";
  let rankedAttemptExists = false;
  let rankedSequence = 0;
  let rankedPending = false;
  let syncReady = !authConfigured;
  let syncGeneration = 0;
  let saveSequence = 0;
  let saveQueue = Promise.resolve();
  let path = [];
  let draft = [];
  let pointerActive = false;

  function readLocal(key) {
    try {
      const saved = JSON.parse(localStorage.getItem(key));
      const run = saved?.state || saved;
      if (run) {
        const normalized = { ...run, fullBoardBonusAwarded: Boolean(run.fullBoardBonusAwarded) };
        if (validRunState(normalized)) return { state: normalized, pending: Boolean(saved?.pending) };
        throw new Error("Saved run has an invalid format.");
      }
    } catch (error) {
      console.warn("Could not restore today's run:", error);
      feedback.textContent = "Saved run unavailable. Starting a new run.";
    }
    return { state: freshState(), pending: false };
  }
  state = readLocal(guestStorageKey).state;

  function syncError(error) {
    console.error("Could not sync Scramb run:", error);
    $("profile-note").textContent = "Cloud sync is unavailable right now. Your run will retry on the next save.";
    for (const id of ["sync-status", "profile-sync-status"]) {
      $(id).textContent = "CLOUD SYNC FAILED / RETRY ON NEXT SAVE";
      $(id).hidden = false;
    }
  }

  function clearSyncError() {
    $("profile-note").textContent = "Your daily run and finished results sync with your account.";
    for (const id of ["sync-status", "profile-sync-status"]) {
      $(id).hidden = true;
      $(id).textContent = "";
    }
  }

  async function requestRun(method, snapshot) {
    const response = await fetch(`/api/runs/${encodeURIComponent(boardId)}`, {
      method,
      cache: "no-store",
      ...(snapshot ? { headers: { "Content-Type": "application/json" }, body: JSON.stringify({ state: snapshot }) } : {}),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || `Run request failed: HTTP ${response.status}`);
    return result;
  }
  async function requestRanked(action, input = {}) {
    const response = await fetch("/api/ranked", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, boardId: day, ...input }),
    });
    const result = await response.json();
    if (!response.ok) {
      const error = new Error(result.error || `Ranked request failed: HTTP ${response.status}`);
      error.code = result.code;
      throw error;
    }
    return result;
  }
  async function readRankedAttempt() {
    const response = await fetch(`/api/ranked?boardId=${day}`, { cache: "no-store" });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || `Ranked run request failed: HTTP ${response.status}`);
    return result.attempt;
  }

  function save() {
    const snapshot = structuredClone(state);
    const userId = activeUserId;
    const key = storageKey;
    const sequence = ++saveSequence;
    try {
      localStorage.setItem(key, JSON.stringify(userId && rankedMode !== "replay"
        ? { state: snapshot, pending: true } : snapshot));
    } catch (error) {
      console.warn("Could not save today's run:", error);
      message("Browser storage is unavailable; keep this tab open to preserve your run.", "error");
    }
    if (userId && syncReady && rankedMode !== "replay") {
      saveQueue = saveQueue.then(async () => {
        if (userId !== activeUserId) return;
        await requestRun("PUT", snapshot);
        if (sequence === saveSequence) {
          localStorage.setItem(key, JSON.stringify({ state: snapshot, pending: false }));
          clearSyncError();
        }
      }).catch((error) => {
        syncError(error);
      });
    }
  }

  function applyLoadedRun(nextState) {
    state = nextState;
    path = [];
    draft = [];
    moveWorker?.terminate();
    moveWorker = null;
    moveWorkerReady = false;
    $("results-content").hidden = true;
    $("compose-content").hidden = false;
    $("draft-heading").textContent = "CURRENT WORD";
    renderProgress();
    tick();
    if (state.finished) showResults();
    else if (lexiconText) startMoveWorker(lexiconText);
    if (!state.startedAt && dictionary) $("start-button").disabled = false;
  }
  function applyRankedRun(run) {
    rankedMode = run.finished ? "unranked" : "active";
    rankedAttemptExists = true;
    rankedSequence = run.sequence;
    applyLoadedRun({
      startedAt: Date.parse(run.startedAt),
      endedAt: run.endedAt ? Date.parse(run.endedAt) : null,
      endedReason: run.endedReason,
      finished: run.finished,
      played: run.played,
      words: run.moves.map(({ word, points, path, color }) => ({ word, points, path, color })),
      spentEffects: run.spentEffects,
      score: run.score,
      fullBoardBonusAwarded: run.fullBoardBonusAwarded,
    });
  }

  async function syncForUser(user) {
    const generation = ++syncGeneration;
    rankedPending = false;
    syncReady = false;
    $("start-button").disabled = true;
    if (!user) {
      activeUserId = null;
      rankedMode = "unranked";
      rankedAttemptExists = false;
      rankedSequence = 0;
      storageKey = guestStorageKey;
      syncReady = true;
      clearSyncError();
      applyLoadedRun(readLocal(guestStorageKey).state);
      return;
    }
    if (!user.id) {
      syncReady = true;
      syncError(new Error("Google session is missing a user ID."));
      return;
    }
    const key = `${guestStorageKey}:user:${user.id}`;
    const cached = readLocal(key);
    try {
      const remote = await requestRun("GET");
      if (generation !== syncGeneration) return;
      if (remote.state && !validRunState(remote.state)) throw new Error("Saved run has an invalid format.");
      const ranked = practiceSeed ? null : await readRankedAttempt();
      if (generation !== syncGeneration) return;
      activeUserId = user.id;
      storageKey = key;
      const nextState = cached.pending
        ? cached.state
        : remote.state || (cached.state.startedAt ? cached.state : readLocal(guestStorageKey).state);
      syncReady = true;
      clearSyncError();
      rankedMode = practiceSeed || nextState.startedAt ? "unranked" : "ready";
      rankedAttemptExists = Boolean(ranked);
      rankedSequence = 0;
      const replayKey = `${guestStorageKey}:replay:user:${user.id}`;
      const replay = ranked ? readLocal(replayKey).state : null;
      if (ranked && replay?.startedAt) {
        rankedMode = "replay";
        storageKey = replayKey;
        applyLoadedRun(replay);
      } else if (ranked) applyRankedRun(ranked);
      else applyLoadedRun(nextState);
      if (!replay?.startedAt && (ranked || cached.pending || (!remote.state && nextState.startedAt))) save();
      else {
        try {
          localStorage.setItem(key, JSON.stringify({ state: nextState, pending: false }));
        } catch (error) {
          console.warn("Could not cache your saved run:", error);
        }
      }
    } catch (error) {
      if (generation !== syncGeneration) return;
      activeUserId = user.id;
      storageKey = key;
      rankedMode = "unranked";
      rankedAttemptExists = false;
      syncReady = true;
      applyLoadedRun(cached.state.startedAt ? cached.state : readLocal(guestStorageKey).state);
      syncError(error);
      message("Ranked play is unavailable. Your local run can still be played.", "error");
    }
  }

  if (state.finished && state.endedReason === "full" && !state.fullBoardBonusAwarded) {
    state.score += FULL_BOARD_BONUS;
    state.fullBoardBonusAwarded = true;
    save();
  }

  function letterAt(index) {
    return fixed[index] || state.played[index] || null;
  }

  function claimedTiles() {
    return new Set(state.words.flatMap((entry) => entry.path));
  }

  function message(text, tone = "") {
    feedback.textContent = text;
    feedback.className = `feedback ${tone}`;
  }

  function checkRemainingMoves() {
    if (!syncReady || !moveWorkerReady || !state.startedAt || state.finished) return;
    moveWorker.postMessage({
      type: "check",
      id: ++moveCheckId,
      board: fixed.map((letter, index) => letter || state.played[index] || null),
      usedWords: state.words.map((entry) => entry.word),
      claimedTiles: [...claimedTiles()],
    });
  }

  function startMoveWorker(words) {
    try {
      const worker = new Worker(new URL("./move-worker.js", import.meta.url), { type: "module" });
      moveWorker = worker;
      worker.onmessage = ({ data }) => {
        if (worker !== moveWorker) return;
        if (data.type === "ready") {
          moveWorkerReady = true;
          checkRemainingMoves();
        } else if (data.type === "result" && data.id === moveCheckId && syncReady && !state.finished && !data.hasMove) {
          finish("stuck");
        }
      };
      worker.onerror = (error) => {
        console.error("Could not check for remaining Scramb moves:", error);
        worker.terminate();
        moveWorker = null;
        moveWorkerReady = false;
        if (!state.finished) message("Could not check remaining moves; the timer will still end this run.", "error");
      };
      worker.postMessage({ type: "init", words });
    } catch (error) {
      console.error("Could not start Scramb's move checker:", error);
      if (!state.finished) message("Could not check remaining moves; the timer will still end this run.", "error");
    }
  }

  async function loadDictionary() {
    const startButton = $("start-button");
    startButton.disabled = true;
    startButton.firstChild.textContent = "LOADING WORDS... ";
    try {
      const response = await fetch("/lexicon.txt");
      if (!response.ok) throw new Error(`Dictionary request failed: HTTP ${response.status}`);
      const text = await response.text();
      const loaded = new Set(text.trim().toUpperCase().split(/\s+/));
      if (loaded.size < 100000) throw new Error("Dictionary download was incomplete.");
      dictionary = loaded;
      lexiconText = text;
      startButton.firstChild.textContent = "START THE CLOCK ";
      startButton.disabled = !syncReady;
      renderProgress();
      if (syncReady && !state.finished) startMoveWorker(text);
      if (feedback.textContent === "Dictionary unavailable. Check your connection and retry loading.") message("");
    } catch (error) {
      console.error("Could not load Scramb's dictionary:", error);
      startButton.firstChild.textContent = "RETRY WORD LIST ";
      startButton.disabled = false;
      message("Dictionary unavailable. Check your connection and retry loading.", "error");
    }
  }

  function remaining() {
    return Math.max(0, DURATION - ((state.endedAt || Date.now()) - state.startedAt));
  }

  function straightSegment(from, to) {
    const fromRow = Math.floor(from / SIZE);
    const toRow = Math.floor(to / SIZE);
    const fromCol = from % SIZE;
    const toCol = to % SIZE;
    const rowDistance = toRow - fromRow;
    const colDistance = toCol - fromCol;
    if (rowDistance && colDistance) return null;
    const steps = Math.max(Math.abs(rowDistance), Math.abs(colDistance));
    return Array.from({ length: steps + 1 }, (_, step) =>
      (fromRow + step * Math.sign(rowDistance)) * SIZE + fromCol + step * Math.sign(colDistance));
  }

  function nextEmptyPosition() {
    let typed = 0;
    for (let i = 0; i < path.length; i++) {
      if (letterAt(path[i])) continue;
      if (typed === draft.length) return i;
      typed++;
    }
    return -1;
  }

  function currentWord() {
    let typed = 0;
    return path.map((index) => letterAt(index) || draft[typed++] || "").join("");
  }

  function verdict() {
    if (!dictionary) return { reason: "The word list is still loading." };
    const claimed = claimedTiles();
    if (path.some((index) => claimed.has(index))) return { reason: "Tiles in submitted words cannot be used again." };
    if (path.length < 4) return { reason: "Choose at least 4 neighboring tiles for a word." };
    const existing = path.filter((index) => letterAt(index)).length;
    const newCount = path.length - existing;
    if (!existing) return { reason: "A word must connect to at least one existing letter." };
    if (!newCount) return { reason: "Include at least one empty tile to claim." };
    if (draft.length < newCount) return { reason: `${newCount - draft.length} ${newCount - draft.length === 1 ? "letter" : "letters"} still to type. Existing tiles are skipped.` };
    const word = currentWord();
    if (!dictionary.has(word)) return { reason: `${word} isn't in this game's word list. Backspace to revise.`, error: true };
    if (state.words.some((entry) => entry.word === word)) return { reason: "You've already submitted this word. Try another.", error: true };
    const letterPoints = draft.reduce((sum, letter) => sum + VALUES[letter], 0);
    const triggered = path.filter((index) => effectTiles.has(index) && !state.spentEffects.includes(index));
    const boost = triggered.filter((index) => effectTiles.get(index) === "boost").length * 5;
    const multiplier = triggered.some((index) => effectTiles.get(index) === "double") ? 2 : 1;
    return { word, letterPoints, bonus: newCount * 2, boost, multiplier, triggered, points: (letterPoints + newCount * 2 + boost) * multiplier };
  }

  function renderBoard() {
    const focusedIndex = boardElement.contains(document.activeElement) ? Number(document.activeElement.dataset.index) : -1;
    const next = nextEmptyPosition();
    const claimed = claimedTiles();
    boardElement.setAttribute("aria-hidden", state.startedAt ? "false" : "true");
    const tiles = fixed.map((seed, index) => {
      const played = state.played[index];
      const pathPosition = path.indexOf(index);
      const isSelected = pathPosition !== -1;
      const lastRoute = [...state.words].reverse().find((entry) => entry.path.includes(index));
      const tracedLatest = lastRoute && lastRoute === state.words.at(-1);
      const effect = effectTiles.get(index);
      const spent = effect && state.spentEffects.includes(index);
      let draftLetter = null;
      if (isSelected && !seed && !played) {
        const draftIndex = path.slice(0, pathPosition).filter((item) => !letterAt(item)).length;
        draftLetter = draft[draftIndex] || null;
      }
      const letter = seed || played || draftLetter;
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = `tile${seed ? " fixed" : played ? " played" : draftLetter ? " draft" : ""}${effect ? ` effect-${effect}` : ""}${spent ? " effect-spent" : ""}${lastRoute ? " traced" : ""}${tracedLatest ? " traced-latest" : ""}${isSelected ? " selected" : ""}${pathPosition === next ? " next-empty" : ""}`;
      tile.dataset.index = index;
      tile.style.setProperty("--glint-offset", `${-0.41 * (index % 11)}s`);
      tile.style.setProperty("--finale-delay", `${(Math.abs(Math.floor(index / SIZE) - 3.5) + Math.abs(index % SIZE - 3.5)) * 45}ms`);
      if (lastRoute) {
        const color = ROUTE_COLORS[lastRoute.color];
        tile.dataset.routeColor = lastRoute.color;
        tile.style.setProperty("--route-color", color.light);
        tile.style.setProperty("--route-deep", color.deep);
      }
      tile.disabled = !syncReady || rankedPending || !state.startedAt || (!state.finished && !dictionary);
      tile.setAttribute("aria-label", state.finished
        ? `Row ${Math.floor(index / SIZE) + 1}, column ${index % SIZE + 1}: ${letter || "empty"}${lastRoute ? `, part of ${lastRoute.word}, ${lastRoute.points} points` : ""}`
        : state.startedAt
        ? `Row ${Math.floor(index / SIZE) + 1}, column ${index % SIZE + 1}: ${letter || "empty"}${seed ? ", starting letter" : played ? ", locked letter" : draftLetter ? ", unsubmitted letter" : ""}${effect ? `, ${effect === "double" ? "double score" : "five bonus points"} effect ${spent ? "spent" : "ready"}` : ""}${claimed.has(index) ? ", claimed by a submitted word, unavailable" : ""}${isSelected ? ", selected" : ""}`
        : "Hidden tile. Start the clock to reveal the board.");
      tile.setAttribute("aria-pressed", isSelected ? "true" : "false");
      tile.setAttribute("aria-disabled", !state.finished && claimed.has(index) ? "true" : "false");
      const face = document.createElement("span");
      face.textContent = letter || "";
      tile.append(face);
      if (letter) {
        const badge = document.createElement("span");
        badge.className = effect ? "effect-badge" : "value";
        badge.textContent = effect
          ? `${effect === "double" ? "×2 WORD" : "+5 POINTS"}${spent ? " · USED" : ""}`
          : VALUES[letter];
        if (effect) badge.setAttribute("aria-hidden", "true");
        tile.append(badge);
      }
      if (isSelected) {
        const order = document.createElement("span");
        order.className = "path-order";
        order.textContent = pathPosition + 1;
        tile.append(order);
      }
      return tile;
    });
    boardElement.replaceChildren(...tiles);
    const routes = state.words.map((entry, index) => ({ ...entry, index })).filter((entry) => Array.isArray(entry.path) && entry.path.length > 1);
    if (routes.length) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.classList.add("trail-lines");
      svg.setAttribute("viewBox", `0 0 ${boardElement.clientWidth} ${boardElement.clientHeight}`);
      svg.setAttribute("aria-hidden", "true");
      routes.forEach((entry) => {
        const points = entry.path.map((tileIndex) => {
          const tile = tiles[tileIndex];
          return `${tile.offsetLeft + tile.offsetWidth / 2},${tile.offsetTop + tile.offsetHeight / 2}`;
        }).join(" ");
        const colors = ROUTE_COLORS[entry.color];
        for (const [kind, color] of [["outer", colors.deep], ["inner", colors.light]]) {
          const line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
          line.classList.add(kind);
          line.dataset.wordIndex = entry.index;
          line.setAttribute("stroke", color);
          line.setAttribute("points", points);
          svg.append(line);
        }
      });
      boardElement.append(svg);
    }
    if (focusedIndex >= 0 && state.startedAt) boardElement.children[focusedIndex].focus();
    if (inspectedRoute !== null) {
      const index = inspectedRoute;
      inspectedRoute = null;
      inspectScramble(index);
    }
  }

  function inspectScramble(index) {
    if (inspectedRoute === index) return;
    inspectedRoute = index;
    const selected = index === null ? null : state.words[index];
    const color = selected ? ROUTE_COLORS[selected.color] : null;
    boardElement.classList.toggle("inspecting", Boolean(selected));
    $("word-list").classList.toggle("inspecting", Boolean(selected));
    for (const tile of boardElement.querySelectorAll(".tile")) {
      const inPath = Boolean(selected?.path.includes(Number(tile.dataset.index)));
      tile.classList.toggle("route-focus", inPath);
      const original = tile.dataset.routeColor;
      const palette = inPath ? color : original === undefined ? null : ROUTE_COLORS[Number(original)];
      if (palette) {
        tile.style.setProperty("--route-color", palette.light);
        tile.style.setProperty("--route-deep", palette.deep);
      }
    }
    for (const line of boardElement.querySelectorAll(".trail-lines polyline")) {
      line.classList.toggle("route-focus", Number(line.dataset.wordIndex) === index);
    }
    for (const item of $("word-list").querySelectorAll("[data-word-index]")) {
      item.classList.toggle("route-focus", Number(item.dataset.wordIndex) === index);
    }
  }

  function renderDraft() {
    const preview = $("draft-preview");
    const flyout = $("selection-preview");
    preview.replaceChildren();
    wordEntry.disabled = !syncReady || rankedPending || path.length < 4 || state.finished || !dictionary;
    wordEntry.value = draft.join("");
    if (!path.length) {
      const placeholder = document.createElement("span");
      placeholder.className = "preview-placeholder";
      placeholder.textContent = state.finished ? "RUN COMPLETE" : "SELECT A PATH ON THE GRID";
      preview.append(placeholder);
    } else {
      let typed = 0;
      const next = nextEmptyPosition();
      path.forEach((index, position) => {
        const existing = letterAt(index);
        const inserted = existing ? null : draft[typed++] || null;
        const slot = document.createElement("span");
        slot.className = `draft-letter${existing ? "" : inserted ? " new" : " missing"}${next === position ? " active" : ""}`;
        slot.textContent = existing || inserted || "·";
        preview.append(slot);
      });
    }
    flyout.hidden = !path.length || state.finished;
    if (!flyout.hidden) {
      flyout.style.setProperty("--slot-count", Math.min(path.length, 8));
      $("selection-letters").replaceChildren(...[...preview.children].map((slot) => slot.cloneNode(true)));
      positionSelectionPreview();
    }
    if ($("results-content").hidden) $("path-length").textContent = path.length ? `${path.length} TILES` : "NO PATH";
    const result = path.length ? verdict() : null;
    $("submit").disabled = !syncReady || rankedPending || !result?.word || state.finished;
    $("mobile-submit").disabled = $("submit").disabled;
    $("clear").disabled = !syncReady || rankedPending || !path.length || state.finished;
    $("mobile-clear").disabled = $("clear").disabled;
    const blanks = path.filter((index) => !letterAt(index)).length;
    $("mobile-word-announcement").textContent = path.length
      ? `Selected word: ${[...preview.children].map((slot) => slot.textContent === "·" ? "blank" : slot.textContent).join(" ")}`
      : "";
    for (const key of mobileKeyboard.querySelectorAll("[data-key]")) {
      key.disabled = key.dataset.key === "Backspace"
        ? !draft.length || state.finished
        : wordEntry.disabled || draft.length >= blanks;
    }
    const readyEffects = path.filter((index) => effectTiles.has(index) && !state.spentEffects.includes(index));
    $("points-preview").textContent = result?.word
      ? `+${result.points} PTS = (${result.letterPoints} LETTERS + ${result.bonus} NEW${result.boost ? ` + ${result.boost} BOOST` : ""})${result.multiplier > 1 ? " ×2" : ""}`
      : readyEffects.length ? `${readyEffects.map((index) => effectTiles.get(index) === "double" ? "×2" : "+5").join(" + ")} READY ON THIS PATH` : "";
    if (result?.word) message(`${result.word} fits. Press Enter to lock it in.`, "good");
    else if (result) message(result.reason, result.error ? "error" : "");
  }

  function positionSelectionPreview() {
    const flyout = $("selection-preview");
    if (flyout.hidden || !flyout.offsetWidth) return;
    const tile = boardElement.children[path.at(-1)];
    const frame = boardWrap.getBoundingClientRect();
    const anchor = tile.getBoundingClientRect();
    flyout.style.left = `${Math.max(8, Math.min(anchor.left - frame.left + anchor.width / 2 - flyout.offsetWidth / 2, boardWrap.clientWidth - flyout.offsetWidth - 8))}px`;
    const above = anchor.top - frame.top - flyout.offsetHeight - 10;
    flyout.style.top = `${above >= 8 ? above : anchor.bottom - frame.top + 10}px`;
  }

  window.addEventListener("resize", positionSelectionPreview);

  function renderProgress() {
    inspectedRoute = null;
    $("board-kind").textContent = practiceSeed ? "DEV PRACTICE"
      : rankedMode === "replay" ? "UNRANKED PRACTICE"
        : activeUserId && rankedMode === "unranked" && !rankedAttemptExists ? "UNRANKED GRID" : "DAILY GRID";
    boardElement.classList.remove("inspecting");
    const filled = initialFilled + Object.keys(state.played).length;
    $("score").textContent = String(state.score).padStart(4, "0");
    $("profile-score").textContent = state.score.toLocaleString();
    $("profile-words").textContent = String(state.words.length);
    $("filled-count").textContent = `${filled}/64 FILLED`;
    const skipToEnd = $("skip-to-end");
    if (skipToEnd) skipToEnd.disabled = !accountUser?.isAdmin || !syncReady || state.finished;
    document.body.classList.toggle("run-active", Boolean(state.startedAt && !state.finished));
    document.body.classList.toggle("run-finished", state.finished);
    $("start-overlay").hidden = Boolean(state.startedAt);
    boardElement.classList.toggle("covered", !state.startedAt);
    boardElement.classList.toggle("run-finished", state.finished);
    const list = $("word-list");
    list.classList.remove("inspecting");
    list.replaceChildren();
    if (!state.words.length) {
      const empty = document.createElement("li");
      empty.className = "empty-note";
      empty.textContent = "No words yet";
      list.append(empty);
    }
    const rankedWords = state.words.map((entry, index) => ({ entry, index }))
      .sort((a, b) => b.entry.points - a.entry.points || a.index - b.index);
    for (const { entry, index } of rankedWords) {
      const item = document.createElement("li");
      item.dataset.wordIndex = index;
      item.tabIndex = 0;
      item.setAttribute("aria-label", `${entry.word}, ${entry.points} points. Focus this scramble on the board.`);
      item.addEventListener("mouseenter", () => inspectScramble(index));
      item.addEventListener("mouseleave", () => inspectScramble(null));
      item.addEventListener("focus", () => inspectScramble(index));
      item.addEventListener("blur", () => inspectScramble(null));
      const word = document.createElement("span");
      word.className = "noted-word";
      const chip = document.createElement("span");
      chip.className = "word-chip";
      chip.style.backgroundColor = ROUTE_COLORS[entry.color].light;
      const earned = document.createElement("span");
      earned.className = "earned";
      word.append(chip, document.createTextNode(entry.word));
      earned.textContent = `+${entry.points}`;
      item.append(word, earned);
      list.append(item);
    }
    $("notes-count").textContent = `${state.words.length} FOUND`;
    renderBoard();
    renderDraft();
  }

  function tick() {
    const ms = state.startedAt ? remaining() : DURATION;
    const seconds = Math.ceil(ms / 1000);
    $("timer").textContent = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
    $("timer").classList.toggle("urgent", ms < 30000 && Boolean(state.startedAt && !state.finished));
    if (syncReady && !rankedPending && state.startedAt && !state.finished && ms <= 0) finish("time");
  }

  function clearPath() {
    if (rankedPending) return;
    path = [];
    draft = [];
    renderBoard();
    renderDraft();
  }

  function extendPath(index, interpolate = false) {
    if (rankedPending) return;
    const last = path.at(-1);
    if (index === last) return;
    const claimed = claimedTiles();
    if (claimed.has(index)) {
      if (!interpolate) message("Tiles in submitted words cannot be used again.", "error");
      return;
    }
    if (draft.length) {
      if (!interpolate) message("Press Esc to clear your draft before changing the path.", "error");
      return;
    }
    if (index === path.at(-2)) {
      path.pop();
    } else {
      const segment = interpolate ? straightSegment(last, index) : adjacent(last, index) ? [last, index] : null;
      const additions = segment?.slice(1);
      if (!additions || path.length + additions.length > 16 || additions.some((tile) => path.includes(tile) || claimed.has(tile))) {
        if (!interpolate) message("Use neighboring unclaimed tiles without revisiting one, or press Esc to start over.", "error");
        return;
      }
      path.push(...additions);
    }
    renderBoard();
    renderDraft();
  }

  function beginSelection(index) {
    if (!syncReady || rankedPending || !state.startedAt || state.finished) return;
    if (claimedTiles().has(index)) {
      message("Tiles in submitted words cannot be used again.", "error");
      return;
    }
    if (path.length) {
      extendPath(index);
    } else {
      path = [index];
      renderBoard();
      renderDraft();
    }
  }

  async function submitWord() {
    if (!syncReady || rankedPending || !state.startedAt || state.finished) return;
    if (remaining() <= 0) { finish("time"); return; }
    const result = verdict();
    if (!result.word) {
      message(result.reason, result.error ? "error" : "");
      return;
    }
    let rankedResult = null;
    if (rankedMode === "active") {
      const generation = syncGeneration;
      rankedPending = true;
      renderBoard();
      renderDraft();
      try {
        rankedResult = await requestRanked("word", {
          sequence: rankedSequence,
          path: [...path],
          letters: draft.join(""),
        });
        if (generation !== syncGeneration) return;
        rankedSequence = rankedResult.sequence;
        if (rankedResult.move.word !== result.word || rankedResult.move.points !== result.points) {
          throw new Error("The server scored this word differently. Reload to sync your run.");
        }
      } catch (error) {
        if (generation !== syncGeneration) return;
        console.error("Could not verify ranked word:", error);
        rankedPending = false;
        if (["STALE_SEQUENCE", "FINISHED"].includes(error.code)) {
          try {
            const latest = await readRankedAttempt();
            if (generation !== syncGeneration) return;
            if (latest) {
              applyRankedRun(latest);
              save();
              message("This run changed on another device. Your verified progress is up to date.");
              return;
            }
          } catch (reloadError) {
            console.error("Could not refresh ranked run:", reloadError);
          }
        }
        renderBoard();
        renderDraft();
        if (error.code === "EXPIRED") finish("time");
        message(error.code === "EXPIRED"
          ? "Time ran out before the word reached the server."
          : `${error.message} Retry or reload to sync your ranked run.`, "error");
        return;
      }
      rankedPending = false;
      renderBoard();
      renderDraft();
    }
    let typed = 0;
    for (const index of path) {
      if (!letterAt(index)) state.played[index] = draft[typed++];
    }
    const lastColor = state.words.at(-1)?.color;
    let color = rankedResult ? rankedResult.move.color : crypto.getRandomValues(new Uint32Array(1))[0] % ROUTE_COLORS.length;
    if (color === lastColor) color = (color + 1) % ROUTE_COLORS.length;
    state.spentEffects.push(...result.triggered);
    state.words.push({ word: result.word, points: result.points, path: [...path], color });
    state.score = rankedResult ? rankedResult.score : state.score + result.points;
    const label = `${result.word} locked in for ${result.points} points.`;
    path = [];
    draft = [];
    save();
    renderProgress();
    message(label, "good");
    if (initialFilled + Object.keys(state.played).length === SIZE * SIZE) finish("full");
    else {
      checkRemainingMoves();
      if (remaining() <= 0) finish("time");
    }
  }

  function showResults() {
    const tier = tierForScore(state.score);
    $("final-score").textContent = state.score;
    $("tier-egg").src = eggAsset(tier);
    $("tier-name").textContent = tier.name.toUpperCase();
    $("tier-range").textContent = `${tierRange(tier)} PTS`;
    $("tier-result").style.setProperty("--tier-color", tier.color);
    const outcome = state.endedReason === "full" ? `You filled the board! +${FULL_BOARD_BONUS} full-board bonus.` : state.endedReason === "stuck" ? "No valid scoring words remain." : state.endedReason === "finish" ? "Run complete." : "Time ran out.";
    $("final-summary").textContent = `${state.words.length} words · ${initialFilled + Object.keys(state.played).length} of 64 tiles filled. ${outcome}`;
    $("draft-heading").textContent = "THE FINAL PLATE";
    $("path-length").textContent = "RUN COMPLETE";
    $("compose-content").hidden = true;
    $("results-content").hidden = false;
  }

  function playFinale(reason) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      showResults();
      return;
    }
    $("finale-title").textContent = reason === "full" ? "BOARD COMPLETE" : reason === "stuck" ? "NO MOVES LEFT" : "TIME'S UP";
    $("finale-detail").textContent = reason === "full" ? `+${FULL_BOARD_BONUS} FULL BOARD BONUS` : "RUN COMPLETE";
    $("finale").hidden = false;
    boardWrap.classList.add("finale-active");
    boardWrap.classList.toggle("finale-full", reason === "full");
    boardElement.classList.add("finale");
    window.setTimeout(() => {
      $("finale").hidden = true;
      boardWrap.classList.remove("finale-active", "finale-full");
      boardElement.classList.remove("finale");
      showResults();
    }, FINALE_DURATION);
  }

  function finish(reason) {
    if (!syncReady || state.finished) return;
    if (menuDialog.open) menuDialog.close();
    if (rulesDialog.open) rulesDialog.close();
    if (tutorialDialog.open) tutorialDialog.close();
    state.endedAt = Date.now();
    state.endedReason = reason;
    state.finished = true;
    if (reason === "full" && rankedMode !== "active") {
      state.score += FULL_BOARD_BONUS;
      state.fullBoardBonusAwarded = true;
    }
    if (reason === "full") state.fullBoardBonusAwarded = true;
    if (rankedMode === "active" && reason === "stuck") {
      void requestRanked("finish").catch((error) => {
        console.error("Could not finish ranked run:", error);
        message("Your ranked result could not be finalized. Reopen Scores to check it.", "error");
      });
    }
    rankedMode = "unranked";
    moveWorker?.terminate();
    moveWorker = null;
    moveWorkerReady = false;
    path = [];
    draft = [];
    save();
    renderProgress();
    tick();
    playFinale(reason);
  }

  boardElement.addEventListener("pointerdown", (event) => {
    const tile = event.target.closest(".tile");
    if (!tile || rankedPending || !state.startedAt || state.finished) return;
    event.preventDefault();
    if (claimedTiles().has(Number(tile.dataset.index))) {
      message("Tiles in submitted words cannot be used again.", "error");
      return;
    }
    boardElement.setPointerCapture(event.pointerId);
    pointerActive = true;
    beginSelection(Number(tile.dataset.index));
  });
  boardElement.addEventListener("pointermove", (event) => {
    if (!pointerActive) return;
    const tile = document.elementFromPoint(event.clientX, event.clientY)?.closest(".tile");
    if (!tile || !boardElement.contains(tile)) return;
    extendPath(Number(tile.dataset.index), true);
  });
  window.addEventListener("pointerup", () => { pointerActive = false; });
  window.addEventListener("pointercancel", () => { pointerActive = false; });
  boardElement.addEventListener("click", (event) => {
    if (event.detail !== 0) return;
    const tile = event.target.closest(".tile");
    if (tile) beginSelection(Number(tile.dataset.index));
  });
  function inspectBoardTile(tile) {
    if (!state.finished || !tile || !boardElement.contains(tile)) return;
    const routeIndex = state.words.findIndex((entry) => entry.path.includes(Number(tile.dataset.index)));
    inspectScramble(routeIndex === -1 ? null : routeIndex);
  }
  boardElement.addEventListener("pointerover", (event) => {
    const tile = event.target.closest(".tile");
    if (tile && !tile.contains(event.relatedTarget)) inspectBoardTile(tile);
  });
  boardElement.addEventListener("pointerleave", () => {
    if (state.finished) inspectScramble(null);
  });
  boardElement.addEventListener("focusin", (event) => {
    inspectBoardTile(event.target.closest(".tile"));
  });
  boardElement.addEventListener("focusout", (event) => {
    if (state.finished && !boardElement.contains(event.relatedTarget)) inspectScramble(null);
  });
  boardElement.addEventListener("keydown", (event) => {
    if (!event.target.matches(".tile")) return;
    if (event.key === "Enter" && path.length) {
      event.preventDefault();
      event.stopPropagation();
      submitWord();
      return;
    }
    const index = Number(event.target.dataset.index);
    const step = { ArrowUp: -SIZE, ArrowDown: SIZE, ArrowLeft: -1, ArrowRight: 1 }[event.key];
    if (step === undefined) return;
    event.preventDefault();
    const next = index + step;
    if (next < 0 || next >= SIZE * SIZE || (step === -1 && index % SIZE === 0) || (step === 1 && index % SIZE === SIZE - 1)) return;
    boardElement.children[next].focus();
  });
  wordEntry.addEventListener("input", () => {
    if (rankedPending) return;
    const blanks = path.filter((index) => !letterAt(index)).length;
    draft = [...wordEntry.value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, blanks)];
    renderBoard();
    renderDraft();
  });
  mobileKeyboard.addEventListener("click", (event) => {
    const key = event.target.closest("[data-key]");
    if (!key || key.disabled || rankedPending || state.finished) return;
    if (key.dataset.key === "Backspace") draft.pop();
    else draft.push(key.dataset.key);
    renderBoard();
    renderDraft();
  });
  document.addEventListener("keydown", (event) => {
    if (!state.startedAt || rankedPending || state.finished || event.ctrlKey || event.metaKey || event.altKey || event.isComposing || document.querySelector("dialog[open]")) return;
    if (event.key === "Escape") {
      if (path.length) { event.preventDefault(); clearPath(); message("Path and unsubmitted letters cleared."); }
    } else if (event.key === "Enter" && path.length && (!event.target.matches("button") || event.target.id === "submit")) {
      event.preventDefault();
      submitWord();
    } else if (event.key === "Backspace" && path.length && draft.length && event.target !== wordEntry) {
      event.preventDefault();
      draft.pop();
      renderBoard();
      renderDraft();
    } else if (/^[a-z]$/i.test(event.key) && path.length && event.target !== wordEntry) {
      event.preventDefault();
      if (path.length < 4) {
        message("Choose at least four tiles before typing.");
      } else if (nextEmptyPosition() >= 0) {
        draft.push(event.key.toUpperCase());
        renderBoard();
        renderDraft();
      } else message("The path is full. Press Enter to submit or Backspace to revise.");
    }
  });
  for (const id of ["submit", "mobile-submit"]) $(id).addEventListener("click", submitWord);
  for (const id of ["clear", "mobile-clear", "selection-clear"]) $(id).addEventListener("click", () => {
    if (rankedPending) return;
    clearPath();
    message("Path and unsubmitted letters cleared.");
  });
  $("start-button").addEventListener("click", async () => {
    if (!dictionary) { void loadDictionary(); return; }
    if (!syncReady) return;
    if (state.startedAt) return;
    if (day !== new Date().toISOString().slice(0, 10)) {
      message("A new daily grid is ready. Refresh to start today's run.", "error");
      return;
    }
    if (rankedMode === "ready") {
      const button = $("start-button");
      button.disabled = true;
      const generation = syncGeneration;
      try {
        const run = await requestRanked("start");
        if (generation !== syncGeneration) return;
        applyRankedRun(run);
      } catch (error) {
        if (generation !== syncGeneration) return;
        console.error("Could not start ranked run:", error);
        message("Could not start a ranked run. Try again before the day ends.", "error");
        button.disabled = false;
        return;
      }
    } else {
      state.startedAt = Date.now();
    }
    save();
    renderProgress();
    tick();
    checkRemainingMoves();
  });
  let rulesCloseTimer = null;
  function closeRules() {
    if (!rulesDialog.open || rulesDialog.classList.contains("closing")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      rulesDialog.close();
      return;
    }
    rulesDialog.classList.add("closing");
    rulesCloseTimer = window.setTimeout(() => {
      if (rulesDialog.open) rulesDialog.close();
    }, 220);
  }
  function alignRulesContent() {
    const content = rulesDialog.querySelector(".modal-content");
    content.style.setProperty("--scrollbar-width", `${content.offsetWidth - content.clientWidth}px`);
  }
  const demoBoard = $("tutorial-demo");
  const stamp = demoBoard.querySelector(".tutorial-stamp");
  for (let index = 0; index < SIZE * SIZE; index++) {
    const tile = document.createElement("span");
    const effect = effectTiles.get(index);
    tile.className = `tile${fixed[index] ? " fixed" : ""}${effect ? ` effect-${effect}` : ""}`;
    const letter = document.createElement("span");
    letter.className = "demo-letter";
    letter.textContent = fixed[index] || "";
    tile.append(letter);
    if (fixed[index]) {
      const value = document.createElement("span");
      value.className = "value";
      value.textContent = VALUES[fixed[index]];
      tile.append(value);
    }
    const position = example.path.indexOf(index);
    if (position !== -1) {
      tile.classList.add("demo-route");
      if (position) {
        tile.classList.add("demo-fill");
        tile.style.setProperty("--letter-delay", `${(position - 1) * .26}s`);
      }
      tile.style.setProperty("--trace-delay", `${position * .27}s`);
      const order = document.createElement("span");
      order.className = "path-order";
      order.textContent = position + 1;
      tile.append(order);
    }
    demoBoard.insertBefore(tile, stamp);
  }
  $("tutorial-demo-word").textContent = example.word;
  $("tutorial-demo-points").textContent = `+${example.points} PTS`;
  const tutorialSteps = [
    ["PICK A PATH", "Start with a letter already on the grid. Drag or tap through neighboring tiles—no diagonals."],
    ["FILL THE GAPS", `${example.word[0]} is already on the board. Type only the missing letters: ${[...example.letters].join(", ")}.`],
    ["SUBMIT WORD", `Submit ${example.word} to claim those tiles. The new letters earn ${example.points} points${example.path.some((tile) => effectTiles.has(tile)) ? ", including the bonus tile" : ""}.`],
    ["KEEP GOING", "Find more words on unused tiles. Keep going until time runs out, the board fills, or no moves remain. Fill the board for 50 bonus points."],
  ];
  let tutorialStep = 0;
  let tutorialTimer = null;
  let tutorialMoveTimers = [];
  function clearTutorialMoveTimers() {
    tutorialMoveTimers.forEach((timer) => window.clearTimeout(timer));
    tutorialMoveTimers = [];
  }
  function showTutorialMove(move) {
    move.path.forEach((tileIndex, position) => {
      const tile = demoBoard.children[tileIndex];
      tile.classList.add("demo-route", "demo-added");
      tile.style.setProperty("--trace-delay", `${position * .18}s`);
      if (position) {
        tile.classList.add("demo-fill", "played");
        tile.style.setProperty("--letter-delay", `${position * .18}s`);
        tile.firstElementChild.textContent = move.word[position];
      }
    });
    const showPoints = () => {
      if (!tutorialDialog.open || tutorialStep !== tutorialSteps.length - 1) return;
      $("tutorial-demo-word").textContent = move.word;
      $("tutorial-demo-points").textContent = `+${move.points} PTS`;
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) showPoints();
    else tutorialMoveTimers.push(window.setTimeout(showPoints, 750));
  }
  function showTutorialStep(index, autoplay = false) {
    window.clearTimeout(tutorialTimer);
    tutorialTimer = null;
    clearTutorialMoveTimers();
    tutorialStep = index;
    tutorialDialog.dataset.step = String(index + 1);
    $("tutorial-progress").textContent = `STEP ${index + 1} / ${tutorialSteps.length}`;
    $("tutorial-step-title").textContent = tutorialSteps[index][0];
    $("tutorial-step-copy").textContent = tutorialSteps[index][1];
    $("tutorial-prev").disabled = index === 0;
    $("tutorial-next").firstChild.textContent = index === tutorialSteps.length - 1 ? "GOT IT " : "NEXT STEP ";
    $("tutorial-next").lastElementChild.textContent = index === tutorialSteps.length - 1 ? "✓" : "↗";
    for (const move of examples.slice(1)) {
      for (const tileIndex of move.path) {
        const tile = demoBoard.children[tileIndex];
        tile.classList.remove("demo-route", "demo-added", "demo-fill", "played");
        tile.firstElementChild.textContent = fixed[tileIndex] || "";
      }
    }
    $("tutorial-demo-word").textContent = example.word;
    $("tutorial-demo-points").textContent = `+${example.points} PTS`;
    example.path.forEach((tileIndex, position) => {
      const tile = demoBoard.children[tileIndex];
      tile.firstElementChild.textContent = position && index > 0 ? example.word[position] : fixed[tileIndex] || "";
      tile.classList.toggle("draft", position > 0 && index === 1);
      tile.classList.toggle("played", position > 0 && index >= 2);
    });
    if (index === tutorialSteps.length - 1) {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        examples.slice(1).forEach(showTutorialMove);
      } else {
        examples.slice(1).forEach((move, moveIndex) => {
          tutorialMoveTimers.push(window.setTimeout(() => showTutorialMove(move), 850 + moveIndex * 2200));
        });
      }
    }
    if (autoplay && index < tutorialSteps.length - 1) {
      tutorialTimer = window.setTimeout(() => {
        if (tutorialDialog.open) showTutorialStep(index + 1, true);
      }, 6500);
    }
  }
  function showTutorial() {
    $("tutorial-clock").hidden = !state.startedAt || state.finished;
    tutorialDialog.showModal();
    showTutorialStep(0, !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }
  $("rules").addEventListener("click", showTutorial);
  $("tutorial-start").addEventListener("click", showTutorial);
  $("tutorial-close").addEventListener("click", () => tutorialDialog.close());
  $("tutorial-prev").addEventListener("click", () => showTutorialStep(tutorialStep - 1));
  $("tutorial-next").addEventListener("click", () => {
    if (tutorialStep === tutorialSteps.length - 1) tutorialDialog.close();
    else showTutorialStep(tutorialStep + 1);
  });
  $("tutorial-rules").addEventListener("click", () => {
    tutorialDialog.close();
    rulesDialog.showModal();
    alignRulesContent();
  });
  tutorialDialog.addEventListener("click", (event) => {
    const bounds = tutorialDialog.getBoundingClientRect();
    if (event.target === tutorialDialog && (event.clientX < bounds.left || event.clientX > bounds.right
      || event.clientY < bounds.top || event.clientY > bounds.bottom)) tutorialDialog.close();
  });
  tutorialDialog.addEventListener("close", () => {
    window.clearTimeout(tutorialTimer);
    tutorialTimer = null;
    clearTutorialMoveTimers();
  });
  window.addEventListener("resize", () => {
    if (rulesDialog.open) alignRulesContent();
  });
  rulesDialog.addEventListener("click", (event) => {
    const bounds = rulesDialog.getBoundingClientRect();
    if (event.target === rulesDialog && (event.clientX < bounds.left || event.clientX > bounds.right
      || event.clientY < bounds.top || event.clientY > bounds.bottom)) closeRules();
  });
  rulesDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeRules();
  });
  rulesDialog.addEventListener("close", () => {
    window.clearTimeout(rulesCloseTimer);
    rulesCloseTimer = null;
    rulesDialog.classList.remove("closing");
  });
  function closeMenu() {
    if (!menuDialog.open || menuDialog.classList.contains("closing")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      menuDialog.close();
      return;
    }
    menuDialog.classList.add("closing");
    window.setTimeout(() => { if (menuDialog.open) menuDialog.close(); }, 220);
  }
  const accountNav = $("account-nav");
  const profileSignOutButton = $("profile-logout");
  const accountStatus = $("account-status");
  const profileStatus = $("profile-status");
  const menuContent = $("menu-content");
  const menuPage = $("menu-page");
  const profileImage = $("profile-avatar-image");
  const navImage = $("account-nav-image");
  let googleAuth = null;
  let accountUser = null;
  let historyGeneration = 0;
  let scoresGeneration = 0;
  let scoresCursor = null;
  let scoresLoading = false;
  let accountError = null;
  function scoreDate(board) {
    return new Intl.DateTimeFormat("en", { timeZone: "UTC", month: "short", day: "numeric", year: "numeric" })
      .format(new Date(`${board}T12:00:00Z`));
  }
  function displayPercentile(value) {
    return Math.min(99, Math.round(value / 5) * 5);
  }
  function renderScoreRow(run) {
    const item = document.createElement("li");
    const date = document.createElement("span");
    date.textContent = scoreDate(run.boardId);
    const points = document.createElement("span");
    points.textContent = `${run.score.toLocaleString()} PTS`;
    const placing = document.createElement("span");
    placing.textContent = run.total
      ? `${run.tied ? "TIED " : ""}#${run.rank} / ${run.total}${run.percentile == null ? "" : ` · ~${displayPercentile(run.percentile)}TH`}`
      : "NO COMPARISON";
    item.append(date, points, placing);
    return item;
  }
  function showEmptyScores(title, description) {
    const empty = document.createElement("li");
    empty.className = "scores-empty";
    const copy = document.createElement("span");
    const heading = document.createElement("strong");
    heading.textContent = title;
    const detail = document.createElement("small");
    detail.textContent = description;
    copy.append(heading, detail);
    empty.append(copy);
    $("scores-history-list").replaceChildren(empty);
  }
  $("scores-play").addEventListener("click", closeMenu);
  async function loadScores(append = false, refresh = false) {
    if (!accountUser || scoresLoading) return;
    scoresLoading = true;
    const generation = scoresGeneration;
    const status = $("scores-status");
    status.hidden = true;
    let networkFailure = false;
    let failureMessage = "Scores are unavailable right now.";
    if (!append && !refresh) {
      $("scores-today-empty").hidden = false;
      $("scores-today-result").hidden = true;
      $("scores-empty-title").textContent = "CHECKING THE GRID";
      $("scores-empty-copy").hidden = false;
      $("scores-empty-copy").textContent = "Loading today's comparison...";
      $("scores-play").hidden = true;
      showEmptyScores("CHECKING YOUR RECORD", "Loading completed daily grids...");
      $("scores-history-headings").hidden = true;
      $("scores-more").hidden = true;
      scoresCursor = null;
    }
    try {
      const params = new URLSearchParams({ boardId: day });
      if (append && scoresCursor) params.set("cursor", scoresCursor);
      let response;
      try {
        response = await fetch(`/api/ranked?${params}`, { cache: "no-store" });
      } catch (error) {
        networkFailure = true;
        throw error;
      }
      const result = await response.json();
      if (!response.ok) {
        failureMessage = result.error || `Scores request failed: HTTP ${response.status}`;
        throw new Error(failureMessage);
      }
      if (generation !== scoresGeneration || !accountUser) return;
      const today = result.today;
      $("scores-date").textContent = scoreDate(day).toUpperCase() + " UTC";
      $("scores-phase").textContent = today.final ? "FINAL" : "LIVE";
      $("scores-today-empty").hidden = today.score != null;
      $("scores-today-result").hidden = today.score == null;
      $("scores-score").textContent = today.score == null ? "—" : today.score.toLocaleString();
      $("scores-rank").textContent = today.rank == null
        ? today.score == null ? "No ranked result yet" : "Run in progress · rank after completion"
        : `${today.tied ? "Tied " : ""}#${today.rank} of ${today.total} today`;
      $("scores-percentile").textContent = today.percentile == null ? "" : `AROUND THE ${displayPercentile(today.percentile)}TH PERCENTILE`;
      const note = today.note || (today.score == null
        ? state.startedAt && rankedMode === "unranked" && !practiceSeed
          ? "This run isn't server-verified, so it stays in Profile rather than today's ranking."
          : "Start today's grid to join the ranking."
        : today.rank == null ? "Your score becomes comparable when the run ends."
          : today.percentile == null ? `Percentiles start at 30 completed players; ${today.total} so far.`
            : today.final ? "This comparison is final." : "Live comparison: your place may move as more people finish.");
      $("scores-note").textContent = note;
      $("scores-empty-title").textContent = "THE GRID IS WAITING";
      $("scores-empty-copy").textContent = note;
      const offerPlay = today.score == null && !today.note
        && !(state.startedAt && rankedMode === "unranked" && !practiceSeed);
      $("scores-empty-copy").hidden = offerPlay;
      $("scores-play").hidden = !offerPlay;
      const chart = $("scores-distribution");
      chart.replaceChildren();
      if (today.total > 0 && today.distribution?.length) {
        const max = Math.max(...today.distribution.map((bucket) => bucket.count));
        for (const bucket of today.distribution) {
          const bar = document.createElement("span");
          bar.style.height = `${bucket.count ? Math.max(4, bucket.count / max * 100) : 0}%`;
          bar.classList.toggle("mine", today.score != null
            && Math.min(Math.floor(today.score / 50), 9) * 50 === bucket.score);
          chart.append(bar);
        }
        chart.setAttribute("aria-label", `Score distribution for ${today.total} players today`);
        $("scores-chart").hidden = false;
      } else $("scores-chart").hidden = true;
      if (!refresh) {
        const list = $("scores-history-list");
        if (!append) list.replaceChildren();
        for (const run of result.history) list.append(renderScoreRow(run));
        if (!list.children.length) {
          showEmptyScores("NO RANKED DAYS YET", "Finished daily scores and placements will appear here.");
        }
        $("scores-history-headings").hidden = !list.querySelector("li:not(.scores-empty)");
        scoresCursor = result.nextCursor;
        $("scores-more").hidden = !scoresCursor;
      }
    } catch (error) {
      if (generation !== scoresGeneration) return;
      console.error("Could not load scores:", error);
      status.textContent = networkFailure
        ? "Could not load scores. Close and reopen Scores to retry."
        : failureMessage;
      status.hidden = false;
      if (!append && !refresh) {
        $("scores-today-empty").hidden = false;
        $("scores-today-result").hidden = true;
        $("scores-empty-title").textContent = "SCORES UNAVAILABLE";
        $("scores-empty-copy").hidden = false;
        $("scores-empty-copy").textContent = "Today's comparison could not be loaded.";
        $("scores-play").hidden = true;
        showEmptyScores("RECORD UNAVAILABLE", "Your completed grids could not be loaded.");
      }
    } finally {
      if (generation === scoresGeneration) scoresLoading = false;
    }
  }
  $("scores-more").addEventListener("click", () => { void loadScores(true); });
  window.setInterval(() => {
    if (menuDialog.open && menuDialog.dataset.page === "scores" && accountUser
      && $("scores-phase").textContent !== "FINAL") void loadScores(false, true);
  }, 30000);
  async function loadHistory() {
    const generation = ++historyGeneration;
    const list = $("profile-history-list");
    list.replaceChildren(document.createElement("li"));
    list.firstChild.textContent = "Loading results...";
    try {
      await saveQueue;
      const response = await fetch("/api/runs", { cache: "no-store" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || `History request failed: HTTP ${response.status}`);
      if (generation !== historyGeneration || !accountUser) return;
      list.replaceChildren();
      if (!result.runs.length) {
        const empty = document.createElement("li");
        empty.textContent = "No finished runs yet.";
        list.append(empty);
      }
      for (const run of result.runs) {
        const item = document.createElement("li");
        const date = document.createElement("span");
        date.textContent = new Intl.DateTimeFormat("en", { timeZone: "UTC", month: "short", day: "numeric" })
          .format(new Date(`${run.board_id}T12:00:00Z`));
        const score = document.createElement("span");
        score.textContent = `${run.score} PTS / ${run.words} WORDS`;
        item.append(date, score);
        list.append(item);
      }
    } catch (error) {
      if (generation !== historyGeneration) return;
      console.error("Could not load recent results:", error);
      list.replaceChildren(document.createElement("li"));
      list.firstChild.textContent = "Could not load recent results.";
    }
  }
  for (const [image, fallback] of [[profileImage, $("profile-avatar-fallback")], [navImage, $("account-nav-fallback")]]) {
    image.addEventListener("error", () => {
      image.hidden = true;
      fallback.hidden = false;
    });
  }
  function updateAccount(user) {
    accountUser = user;
    const isAdmin = user?.isAdmin === true;
    const reseed = $("reseed");
    const skipToEnd = $("skip-to-end");
    if (reseed) reseed.hidden = !isAdmin;
    if (skipToEnd) {
      skipToEnd.hidden = !isAdmin;
      skipToEnd.disabled = !isAdmin || !syncReady || state.finished;
    }
    scoresGeneration++;
    scoresLoading = false;
    if (!user) {
      historyGeneration++;
      $("scores-score").textContent = "—";
      $("scores-rank").textContent = "No ranked result yet";
      $("scores-percentile").textContent = "";
      $("scores-date").textContent = scoreDate(day).toUpperCase() + " UTC";
      $("scores-phase").textContent = "LIVE";
      $("scores-today-empty").hidden = false;
      $("scores-today-result").hidden = true;
      $("scores-empty-title").textContent = "THE GRID IS WAITING";
      $("scores-empty-copy").hidden = false;
      $("scores-empty-copy").textContent = "Sign in before starting a daily grid to join the ranking.";
      $("scores-play").hidden = true;
      $("scores-status").hidden = true;
      $("scores-chart").hidden = true;
      $("scores-history-headings").hidden = true;
      showEmptyScores("NO RANKED DAYS YET", "Sign in and finish a daily grid to start your score history.");
      $("scores-more").hidden = true;
    } else if (!menuPage.hidden && !$("scores-content").hidden) {
      void loadScores();
    }
    void syncForUser(user);
    if (user) accountError = null;
    accountNav.disabled = !googleAuth;
    accountNav.setAttribute("aria-label", user ? `Profile: ${user.name || user.email || "Google player"}` : "Sign in with Google");
    $("account-nav-title").textContent = user ? "PROFILE" : "SIGN IN";
    $("account-nav-detail").textContent = user ? (user.name || user.email || "GOOGLE ACCOUNT") : "WITH GOOGLE";
    $("account-nav-arrow").hidden = Boolean(user);
    $("account-nav-avatar").hidden = !user;
    profileSignOutButton.hidden = !user;
    accountStatus.hidden = !accountError;
    accountStatus.textContent = accountError || "";
    $("profile-provider").textContent = user ? "GOOGLE ACCOUNT" : "GUEST PLAYER";
    $("profile-name").textContent = user?.name || (user ? "Google player" : "Guest player");
    $("profile-email").textContent = user?.email || (user ? "Email not available" : "Sign in to add your account");
    for (const [image, fallback] of [[profileImage, $("profile-avatar-fallback")], [navImage, $("account-nav-fallback")]]) {
      image.hidden = !user?.image;
      if (user?.image) image.src = user.image;
      else image.removeAttribute("src");
      fallback.hidden = Boolean(user?.image);
      fallback.textContent = user?.name?.trim().charAt(0).toUpperCase() || (user ? "G" : "?");
    }
    profileStatus.hidden = !accountError;
    profileStatus.textContent = accountError || "";
    if (!user && !menuPage.hidden && !$("profile-content").hidden) {
      menuPage.hidden = true;
      $("menu-home").hidden = false;
      menuContent.scrollTop = 0;
      accountNav.focus();
    }
  }
  function showAuthError(error, action = "sign-in") {
    accountError = googleAuthError(error, action);
    accountStatus.hidden = false;
    accountStatus.textContent = accountError;
    profileStatus.hidden = false;
    profileStatus.textContent = accountError;
    accountNav.disabled = !googleAuth;
  }
  try {
    googleAuth = createGoogleAuth(updateAccount, showAuthError, authConfigured);
    if (!googleAuth) {
      accountNav.disabled = true;
      $("account-nav-title").textContent = "SIGN IN UNAVAILABLE";
      $("account-nav-detail").textContent = "SERVER CONFIGURATION ERROR";
      accountStatus.hidden = false;
      accountStatus.textContent = "GOOGLE SIGN-IN ERROR: SERVER CONFIGURATION IS MISSING";
    }
    const authError = new URLSearchParams(location.search).get("error");
    if (authError) {
      showAuthError(new Error(`OAuth error: ${authError}`));
      menuDialog.showModal();
    }
  } catch (error) {
    showAuthError(error);
  }
  async function signInAccount() {
    if (!googleAuth) return;
    accountError = null;
    accountStatus.hidden = true;
    accountNav.disabled = true;
    $("account-nav-detail").textContent = "OPENING GOOGLE...";
    try {
      await googleAuth.signIn();
    } catch (error) {
      showAuthError(error);
    } finally {
      $("account-nav-detail").textContent = accountUser?.name || accountUser?.email || (accountUser ? "GOOGLE ACCOUNT" : "WITH GOOGLE");
      accountNav.disabled = false;
    }
  }
  async function signOutAccount() {
    if (!googleAuth || profileSignOutButton.disabled) return;
    accountError = null;
    profileSignOutButton.disabled = true;
    profileStatus.hidden = false;
    profileStatus.textContent = "SIGNING OUT...";
    try {
      await saveQueue;
      await googleAuth.signOut();
    } catch (error) {
      showAuthError(error, "sign-out");
    } finally {
      profileSignOutButton.disabled = false;
    }
  }
  profileSignOutButton.addEventListener("click", signOutAccount);
  $("menu-toggle").addEventListener("click", () => {
    $("menu-footnote").hidden = !state.startedAt || state.finished;
    menuContent.scrollTop = 0;
    menuDialog.showModal();
  });
  $("menu-close").addEventListener("click", closeMenu);
  menuDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeMenu();
  });
  menuDialog.addEventListener("click", (event) => {
    if (event.target === menuDialog) closeMenu();
  });
  menuDialog.addEventListener("close", () => {
    menuDialog.classList.remove("closing");
    menuDialog.removeAttribute("data-page");
    scoresGeneration++;
    scoresLoading = false;
    $("menu-home").hidden = false;
    menuPage.hidden = true;
    if (!document.querySelector("dialog[open]")) $("menu-toggle").focus();
  });
  document.querySelectorAll("[data-menu-page]").forEach((button) => {
    button.addEventListener("click", () => {
      const page = button.dataset.menuPage;
      if (page === "profile" && !accountUser) {
        signInAccount();
        return;
      }
      const isProfile = page === "profile";
      const isScores = page === "scores";
      $("menu-page-generic").hidden = isProfile || isScores;
      $("profile-content").hidden = !isProfile;
      $("scores-content").hidden = !isScores;
      menuDialog.dataset.page = isScores ? "scores" : page;
      menuPage.setAttribute("aria-labelledby", isProfile ? "profile-title" : isScores ? "scores-title" : "menu-page-title");
      if (isProfile) {
        $("profile-score").textContent = state.score.toLocaleString();
        $("profile-words").textContent = String(state.words.length);
        void loadHistory();
      } else if (isScores) {
        scoresGeneration++;
        scoresLoading = false;
        if (accountUser) void loadScores();
      } else {
        $("menu-page-title").textContent = page.toUpperCase();
        $("menu-page-description").textContent = menuPages[page];
      }
      $("menu-home").hidden = true;
      menuPage.hidden = false;
      menuContent.scrollTop = 0;
      $("menu-back").focus();
    });
  });
  $("menu-back").addEventListener("click", () => {
    const selected = menuDialog.dataset.page;
    scoresGeneration++;
    scoresLoading = false;
    menuDialog.removeAttribute("data-page");
    menuPage.hidden = true;
    $("menu-home").hidden = false;
    menuContent.scrollTop = 0;
    menuDialog.querySelector(`[data-menu-page="${selected}"]`).focus();
  });
  $("reseed")?.addEventListener("click", () => {
    if (!accountUser?.isAdmin) return;
    const params = new URLSearchParams(location.search);
    params.delete("v");
    params.set("seed", crypto.randomUUID());
    location.search = params.toString();
  });
  $("skip-to-end")?.addEventListener("click", () => {
    if (!accountUser?.isAdmin || !syncReady || state.finished) return;
    state.startedAt = Date.now() - DURATION;
    finish("time");
  });
  rulesDialog.querySelectorAll("[data-close]").forEach((button) => button.addEventListener("click", closeRules));
  function showShareStatus(text, error = false) {
    window.clearTimeout(shareStatusTimer);
    window.clearTimeout(shareExitTimer);
    const status = $("share-status");
    status.textContent = text;
    status.classList.remove("leaving");
    status.classList.add("entering");
    status.classList.toggle("error", error);
    shareStatusTimer = window.setTimeout(() => {
      status.classList.replace("entering", "leaving");
      shareExitTimer = window.setTimeout(() => {
        status.textContent = "";
        status.classList.remove("leaving", "error");
      }, 240);
    }, 3000);
  }
  $("share").addEventListener("click", async () => {
    const text = formatShareResult({
      day,
      practice: Boolean(practiceSeed) || rankedMode === "replay",
      score: state.score,
      words: state.words,
      tilesFilled: initialFilled + Object.keys(state.played).length,
    });
    try {
      await navigator.clipboard.writeText(text);
      showShareStatus("Result copied!");
    } catch (error) {
      console.warn("Could not copy result:", error);
      showShareStatus("Clipboard unavailable in this browser context.", true);
    }
  });

  const dateLabel = new Intl.DateTimeFormat("en", { timeZone: "UTC", month: "short", day: "numeric", year: "numeric" }).format(new Date(`${day}T12:00:00Z`));
  const issueNumber = String(Math.floor(Date.parse(`${day}T00:00:00Z`) / 86400000) - 20500).padStart(3, "0");
  $("date-label").textContent = `${dateLabel} / #${issueNumber}`;
  for (const tier of SCORE_TIERS) {
    const item = document.createElement("li");
    const image = document.createElement("img");
    image.src = eggAsset(tier);
    image.alt = "";
    const label = document.createElement("span");
    label.textContent = tier.name;
    const range = document.createElement("small");
    range.textContent = tierRange(tier);
    label.append(range);
    item.append(image, label);
    $("tier-guide").append(item);
  }
  renderProgress();
  void loadDictionary();
  void startAtmosphere($("atmosphere"));
  if (state.finished) {
    tick();
    showResults();
  } else if (state.startedAt && initialFilled + Object.keys(state.played).length === SIZE * SIZE) {
    finish("full");
  } else {
    tick();
  }
  window.setInterval(tick, 250);
  window.addEventListener("resize", () => { if (state.words.length) renderBoard(); });
}
