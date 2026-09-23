import { startAtmosphere } from "./atmosphere.js";

(() => {
  "use strict";

  const SIZE = 8;
  const DURATION = 4 * 60 * 1000;
  const VALUES = { A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10 };
  const SEED_WORDS = [
    "GARDEN", "MARKET", "WINTER", "SUMMER", "SHADOW", "FLOWER", "SILVER", "SPIRIT",
    "NATURE", "SCHOOL", "RABBIT", "PEPPER", "POCKET", "TRAVEL", "BRING", "STARE",
    "CRANE", "LIGHT", "SCORE", "CLOUD", "MOUSE", "WATER", "STONE", "SWEET",
    "GHOST", "GRAPE", "SMILE", "PLANT", "FRUIT", "GREEN", "BREAD", "QUICK", "ZEBRA"
  ];
  let dictionary = null;
  const day = new Date().toISOString().slice(0, 10);
  const requestedSeed = new URLSearchParams(location.search).get("seed");
  const practiceSeed = requestedSeed && /^[\w-]{1,64}$/.test(requestedSeed) ? requestedSeed : null;
  const boardId = practiceSeed ? `${day}:${practiceSeed}` : day;
  const storageKey = `scramble-v4:${boardId}`;
  const $ = (id) => document.getElementById(id);
  const boardElement = $("board");
  const feedback = $("feedback");

  function randomForDay(date) {
    let seed = 2166136261;
    for (const char of date) seed = Math.imul(seed ^ char.charCodeAt(0), 16777619);
    return () => {
      seed ^= seed << 13;
      seed ^= seed >>> 17;
      seed ^= seed << 5;
      return (seed >>> 0) / 4294967296;
    };
  }

  const random = randomForDay(boardId);
  function shuffle(items) {
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }

  function adjacent(from, to) {
    const rowDistance = Math.abs(Math.floor(from / SIZE) - Math.floor(to / SIZE));
    const colDistance = Math.abs(from % SIZE - to % SIZE);
    return rowDistance + colDistance === 1;
  }

  function hiddenWordPath(length, occupied) {
    function extend(path) {
      if (path.length === length) return [...path];
      const last = path.at(-1);
      const options = shuffle(Array.from({ length: SIZE * SIZE }, (_, index) => index)
        .filter((index) => !occupied.has(index) && !path.includes(index) && adjacent(last, index)));
      for (const option of options) {
        path.push(option);
        const found = extend(path);
        if (found) return found;
        path.pop();
      }
      return null;
    }
    for (const index of shuffle(Array.from({ length: SIZE * SIZE }, (_, position) => position))) {
      if (occupied.has(index)) continue;
      const found = extend([index]);
      if (found) return found;
    }
    return null;
  }

  const choices = [...SEED_WORDS];
  shuffle(choices);
  const fixed = Array(SIZE * SIZE).fill(null);
  const occupied = new Set();
  for (const word of choices.slice(0, 7)) {
    const route = hiddenWordPath(word.length, occupied);
    if (!route) continue;
    route.forEach((index) => occupied.add(index));
    const positions = shuffle([...word].map((_, index) => index));
    for (const position of positions.slice(0, word.length >= 7 ? 3 : 2)) {
      fixed[route[position]] = word[position];
    }
  }
  const initialFilled = fixed.filter(Boolean).length;
  const freshState = () => ({ startedAt: null, endedAt: null, finished: false, played: {}, words: [], score: 0 });
  let state = freshState();
  let path = [];
  let draft = [];
  let pointerActive = false;

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved && (saved.startedAt === null || Number.isFinite(saved.startedAt))
      && typeof saved.finished === "boolean" && saved.played && typeof saved.played === "object"
      && Array.isArray(saved.words) && Number.isFinite(saved.score)) state = saved;
  } catch (error) {
    console.warn("Could not restore today's run:", error);
    feedback.textContent = "Saved run unavailable. Starting a new run.";
  }

  function save() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (error) {
      console.warn("Could not save today's run:", error);
      message("Browser storage is unavailable; keep this tab open to preserve your run.", "error");
    }
  }

  function letterAt(index) {
    return fixed[index] || state.played[index] || null;
  }

  function message(text, tone = "") {
    feedback.textContent = text;
    feedback.className = `feedback ${tone}`;
  }

  async function loadDictionary() {
    const startButton = $("start-button");
    startButton.disabled = true;
    startButton.firstChild.textContent = "LOADING WORDS... ";
    message("Loading the English word list...");
    try {
      const response = await fetch(`${import.meta.env.BASE_URL}lexicon.txt`);
      if (!response.ok) throw new Error(`Dictionary request failed: HTTP ${response.status}`);
      const text = await response.text();
      const loaded = new Set(text.trim().toUpperCase().split(/\s+/));
      if (loaded.size < 100000) throw new Error("Dictionary download was incomplete.");
      dictionary = loaded;
      startButton.firstChild.textContent = "START THE CLOCK ";
      startButton.disabled = false;
      renderProgress();
      if (!state.finished) message(`${loaded.size.toLocaleString()} words ready. Select a path to play.`, "good");
    } catch (error) {
      console.error("Could not load Scramble's dictionary:", error);
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
    return { word, letterPoints, bonus: newCount * 2, points: letterPoints + newCount * 2 };
  }

  function renderBoard() {
    const focusedIndex = boardElement.contains(document.activeElement) ? Number(document.activeElement.dataset.index) : -1;
    const next = nextEmptyPosition();
    const latestRoute = state.words.at(-1)?.path || [];
    const olderRoutes = state.words.slice(0, -1).filter((entry) => Array.isArray(entry.path));
    boardElement.setAttribute("aria-hidden", state.startedAt ? "false" : "true");
    const tiles = fixed.map((seed, index) => {
      const played = state.played[index];
      const pathPosition = path.indexOf(index);
      const isSelected = pathPosition !== -1;
      const tracedLatest = latestRoute.includes(index);
      const tracedEarlier = !tracedLatest && olderRoutes.some((entry) => entry.path.includes(index));
      let draftLetter = null;
      if (isSelected && !seed && !played) {
        const draftIndex = path.slice(0, pathPosition).filter((item) => !letterAt(item)).length;
        draftLetter = draft[draftIndex] || null;
      }
      const letter = seed || played || draftLetter;
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = `tile${seed ? " fixed" : played ? " played" : draftLetter ? " draft" : ""}${tracedLatest ? " traced-latest" : tracedEarlier ? " traced" : ""}${isSelected ? " selected" : ""}${pathPosition === next ? " next-empty" : ""}`;
      tile.dataset.index = index;
      tile.style.setProperty("--glint-offset", `${-0.41 * (index % 11)}s`);
      tile.disabled = !state.startedAt || state.finished || !dictionary;
      tile.setAttribute("aria-label", state.startedAt
        ? `Row ${Math.floor(index / SIZE) + 1}, column ${index % SIZE + 1}: ${letter || "empty"}${seed ? ", starting letter" : played ? ", locked letter" : draftLetter ? ", unsubmitted letter" : ""}${tracedLatest || tracedEarlier ? ", part of a submitted word" : ""}${isSelected ? ", selected" : ""}`
        : "Hidden tile. Start the clock to reveal the board.");
      tile.setAttribute("aria-pressed", isSelected ? "true" : "false");
      const face = document.createElement("span");
      face.textContent = letter || "";
      tile.append(face);
      if (letter) {
        const value = document.createElement("span");
        value.className = "value";
        value.textContent = VALUES[letter];
        tile.append(value);
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
    const routes = state.words.filter((entry) => Array.isArray(entry.path) && entry.path.length > 1);
    if (routes.length) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.classList.add("trail-lines");
      svg.setAttribute("viewBox", `0 0 ${boardElement.clientWidth} ${boardElement.clientHeight}`);
      svg.setAttribute("aria-hidden", "true");
      routes.forEach((entry, index) => {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        if (index === routes.length - 1) line.classList.add("latest");
        line.setAttribute("points", entry.path.map((tileIndex) => {
          const tile = tiles[tileIndex];
          return `${tile.offsetLeft + tile.offsetWidth / 2},${tile.offsetTop + tile.offsetHeight / 2}`;
        }).join(" "));
        svg.append(line);
      });
      boardElement.append(svg);
    }
    if (focusedIndex >= 0 && state.startedAt && !state.finished) boardElement.children[focusedIndex].focus();
  }

  function renderDraft() {
    const preview = $("draft-preview");
    preview.replaceChildren();
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
    $("path-length").textContent = path.length ? `${path.length} TILES` : "NO PATH";
    const result = path.length ? verdict() : null;
    $("submit").disabled = !result?.word || state.finished;
    $("clear").disabled = !path.length || state.finished;
    $("points-preview").textContent = result?.word
      ? `+${result.points} PTS  =  ${result.letterPoints} LETTERS + ${result.bonus} NEW-TILE BONUS`
      : "New letters score their tile values + 2 each.";
    if (result?.word) message(`${result.word} fits. Press Enter to lock it in.`, "good");
    else if (result) message(result.reason, result.error ? "error" : "");
    else if (!state.finished && state.startedAt) message("Drag or tap neighboring tiles, then type the missing letters.");
  }

  function renderProgress() {
    const filled = initialFilled + Object.keys(state.played).length;
    $("score").textContent = String(state.score).padStart(4, "0");
    $("filled-count").textContent = `${filled} / 64 TILES FILLED`;
    $("words-count").textContent = `${state.words.length} WORDS`;
    $("board-status").textContent = state.finished ? "RUN COMPLETE" : state.startedAt ? "BUILDING..." : "AWAITING START";
    $("board-status").classList.toggle("live", Boolean(state.startedAt && !state.finished));
    $("live-label").textContent = state.finished ? "FINISHED" : state.startedAt ? "LIVE ●" : "READY";
    $("live-label").classList.toggle("live", Boolean(state.startedAt && !state.finished));
    document.body.classList.toggle("run-active", Boolean(state.startedAt && !state.finished));
    $("start-overlay").hidden = Boolean(state.startedAt);
    boardElement.classList.toggle("covered", !state.startedAt);
    const list = $("word-list");
    list.replaceChildren();
    if (!state.words.length) {
      const empty = document.createElement("li");
      empty.className = "empty-note";
      empty.textContent = "Nothing inked in yet. The board is yours.";
      list.append(empty);
    }
    for (const entry of state.words) {
      const item = document.createElement("li");
      const word = document.createElement("span");
      const earned = document.createElement("span");
      earned.className = "earned";
      word.textContent = entry.word;
      earned.textContent = `+${entry.points}`;
      item.append(word, earned);
      list.prepend(item);
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
    $("meter-fill").style.width = `${ms / DURATION * 100}%`;
    if (state.startedAt && !state.finished && ms <= 0) finish("time");
  }

  function clearPath() {
    path = [];
    draft = [];
    renderBoard();
    renderDraft();
  }

  function extendPath(index, interpolate = false) {
    const last = path.at(-1);
    if (index === last) return;
    if (draft.length) {
      if (!interpolate) message("Press Esc to clear your draft before changing the path.", "error");
      return;
    }
    if (index === path.at(-2)) {
      path.pop();
    } else {
      const segment = interpolate ? straightSegment(last, index) : adjacent(last, index) ? [last, index] : null;
      const additions = segment?.slice(1);
      if (!additions || path.length + additions.length > 16 || additions.some((tile) => path.includes(tile))) {
        if (!interpolate) message("Use neighboring tiles without revisiting one, or press Esc to start over.", "error");
        return;
      }
      path.push(...additions);
    }
    renderBoard();
    renderDraft();
  }

  function beginSelection(index) {
    if (!state.startedAt || state.finished) return;
    if (path.length) {
      extendPath(index);
    } else {
      path = [index];
      renderBoard();
      renderDraft();
    }
  }

  function submitWord() {
    if (!state.startedAt || state.finished) return;
    if (remaining() <= 0) { finish("time"); return; }
    const result = verdict();
    if (!result.word) {
      message(result.reason, result.error ? "error" : "");
      return;
    }
    let typed = 0;
    for (const index of path) {
      if (!letterAt(index)) state.played[index] = draft[typed++];
    }
    state.words.push({ word: result.word, points: result.points, path: [...path] });
    state.score += result.points;
    const label = `${result.word} locked in for ${result.points} points.`;
    path = [];
    draft = [];
    save();
    renderProgress();
    message(label, "good");
    if (initialFilled + Object.keys(state.played).length === SIZE * SIZE) finish("full");
  }

  function showResults() {
    $("final-score").textContent = state.score;
    $("final-summary").textContent = `${state.words.length} words · ${initialFilled + Object.keys(state.played).length} of 64 tiles filled. ${state.endedReason === "full" ? "You filled the board!" : "Time ran out."} This solo prototype has no global leaderboard yet.`;
    if (!$("end-dialog").open) $("end-dialog").showModal();
  }

  function finish(reason) {
    if (state.finished) return;
    state.endedAt = Date.now();
    state.endedReason = reason;
    state.finished = true;
    path = [];
    draft = [];
    save();
    renderProgress();
    tick();
    showResults();
  }

  boardElement.addEventListener("pointerdown", (event) => {
    const tile = event.target.closest(".tile");
    if (!tile || !state.startedAt || state.finished) return;
    event.preventDefault();
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
  document.addEventListener("keydown", (event) => {
    if (!state.startedAt || state.finished || document.querySelector("dialog[open]")) return;
    if (event.key === "Escape") {
      if (path.length) { event.preventDefault(); clearPath(); message("Path and unsubmitted letters cleared."); }
    } else if (event.key === "Enter" && path.length && (!event.target.matches("button") || event.target.id === "submit")) {
      event.preventDefault();
      submitWord();
    } else if (event.key === "Backspace" && path.length && draft.length) {
      event.preventDefault();
      draft.pop();
      renderBoard();
      renderDraft();
    } else if (/^[a-z]$/i.test(event.key) && path.length) {
      event.preventDefault();
      if (nextEmptyPosition() >= 0) {
        draft.push(event.key.toUpperCase());
        renderBoard();
        renderDraft();
      } else message("The path is full. Press Enter to submit or Backspace to revise.");
    }
  });
  $("submit").addEventListener("click", submitWord);
  $("clear").addEventListener("click", () => { clearPath(); message("Path and unsubmitted letters cleared."); });
  $("start-button").addEventListener("click", () => {
    if (!dictionary) { void loadDictionary(); return; }
    if (state.startedAt) return;
    state.startedAt = Date.now();
      save();
      renderProgress();
      tick();
    });
  $("rules").addEventListener("click", () => $("rules-dialog").showModal());
  $("reseed").addEventListener("click", () => {
    const params = new URLSearchParams(location.search);
    params.delete("v");
    params.set("seed", crypto.randomUUID());
    location.search = params.toString();
  });
  document.querySelectorAll("[data-close]").forEach((button) => {
    button.addEventListener("click", () => button.closest("dialog").close());
  });
  $("restart").addEventListener("click", () => {
    if (!confirm("Restart today's prototype board and erase this run?")) return;
    state = freshState();
    path = [];
    draft = [];
    save();
    $("end-dialog").close();
    renderProgress();
    tick();
  });
  $("share").addEventListener("click", async () => {
    const text = `SCRAMBLE · ${day}${practiceSeed ? " · practice board" : ""}\n${state.score} points · ${state.words.length} words · ${initialFilled + Object.keys(state.played).length}/64 tiles\n${Array.from({ length: SIZE }, (_, row) => Array.from({ length: SIZE }, (_, col) => state.played[row * SIZE + col] ? "■" : fixed[row * SIZE + col] ? "▫" : "·").join("")).join("\n")}\nSolo prototype · no public leaderboard`;
    try {
      await navigator.clipboard.writeText(text);
      $("share-status").textContent = "Result copied!";
    } catch (error) {
      console.warn("Could not copy result:", error);
      $("share-status").textContent = "Clipboard unavailable in this browser context.";
    }
  });

  $("date-label").textContent = new Intl.DateTimeFormat("en", { timeZone: "UTC", month: "short", day: "numeric", year: "numeric" }).format(new Date(`${day}T12:00:00Z`));
  $("board-kind").textContent = practiceSeed ? "DEV PRACTICE" : "DAILY GRID";
  $("board-footer").textContent = practiceSeed ? "RESEEDED PRACTICE BOARD · LOCAL SOLO PROTOTYPE · NO LEADERBOARD YET" : "SHARED DAILY BOARD · LOCAL SOLO PROTOTYPE · NO LEADERBOARD YET";
  $("restart").textContent = practiceSeed ? "Restart this practice board" : "Restart today's prototype board";
  $("issue-number").textContent = String(Math.floor(Date.parse(`${day}T00:00:00Z`) / 86400000) - 20500).padStart(3, "0");
  renderProgress();
  tick();
  void loadDictionary();
  void startAtmosphere($("atmosphere"));
  if (state.finished || (state.startedAt && remaining() <= 0)) {
    if (state.finished) showResults();
    else finish("time");
  }
  window.setInterval(tick, 250);
})();
