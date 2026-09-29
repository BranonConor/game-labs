const stations = document.getElementById("stations");
const roster = document.getElementById("roster");
const coffee = document.getElementById("coffee-workers");
const count = document.getElementById("count");
const summary = document.getElementById("summary");
const connection = document.getElementById("connection");
const positions = [
  [21, 20], [49, 13], [76, 20], [28, 46],
  [65, 45], [14, 70], [47, 69], [79, 69],
];
const palette = [
  ["#84b9aa", "#394b66"], ["#b8a7d8", "#493e63"], ["#efba94", "#574e6a"],
  ["#98c9ce", "#465b71"], ["#e6c384", "#68607b"], ["#c7abd1", "#526477"],
  ["#a9ca8b", "#46526f"], ["#dca8a3", "#5a5378"],
];

function avatar(index) {
  const [coat, hair] = palette[index % palette.length];
  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.innerHTML = `<svg viewBox="0 0 24 32" role="img" aria-label="Pixel office worker" shape-rendering="crispEdges">
    <path fill="#2a3044" d="M6 2h12v2h3v12h-2v3h2v10h-5v2h-3v-2h-2v2H8v-2H3V19h2v-3H3V5h3z"/>
    <path fill="${hair}" d="M6 4h12v2h2v6h-2v-2H6v2H4V6h2z"/>
    <path fill="#f0c4a5" d="M6 11h12v7H6z"/><path fill="#ffd8b3" d="M8 12h9v3H8z"/>
    <path fill="#343247" d="M8 15h2v2H8zm7 0h2v2h-2z"/>
    <path fill="${coat}" d="M5 19h14v9H5z"/><path fill="#e4d4bb" d="M11 19h3v5h-3z"/>
    <path fill="${coat}" d="M3 21h2v6H3zm16 0h2v6h-2z"/>
    <path fill="#444259" d="M6 28h5v2H6zm8 0h5v2h-5z"/>
  </svg>`;
  return avatar;
}

function labelFor(session, current) {
  return session.sessionId === current ? "THIS SESSION" : `SESSION ${session.sessionId.slice(0, 8).toUpperCase()}`;
}

function element(tag, className, text) {
  const node = document.createElement(tag);
  node.className = className;
  node.textContent = text;
  return node;
}

function render({ currentSessionId, sessions }) {
  const active = sessions.filter((session) => session.status !== "idle" && session.status !== "offline").length;
  summary.textContent = `${sessions.length} local ${sessions.length === 1 ? "session" : "sessions"} · ${active} at work`;
  count.textContent = String(sessions.length);
  connection.textContent = sessions.length ?
    "Live status from sessions with this project extension loaded." :
    "No participating sessions yet. This office is waiting for its first worker.";
  stations.replaceChildren();
  coffee.replaceChildren();
  roster.replaceChildren();

  for (const [index, session] of sessions.entries()) {
    const name = labelFor(session, currentSessionId);
    if (index < positions.length) {
      const station = element("div", `station ${session.status}`, "");
      station.style.left = `${positions[index][0]}%`;
      station.style.top = `${positions[index][1]}%`;
      const screen = element("div", "screen", "");
      const stand = element("div", "desk", "");
      const nameplate = element("div", "nameplate", name);
      station.append(screen, stand, nameplate);
      if (session.status !== "idle" && session.status !== "offline") station.append(avatar(index));
      for (const [workerIndex, worker] of session.subagents.entries()) {
        const helper = element("div", `helper ${worker.status}`, String(workerIndex + 1));
        helper.title = `Subagent: ${worker.activity}`;
        station.append(helper);
      }
      stations.append(station);
    }
    if (session.status === "idle" && index < 5) {
      const breakWorker = element("div", "break-worker", "");
      breakWorker.append(avatar(index), element("span", "", name));
      coffee.append(breakWorker);
    }
    const item = element("div", `roster-item ${session.status}`, "");
    item.append(element("span", "status-dot", ""), element("strong", "", name),
      element("span", "activity", session.activity));
    if (session.subagents.length) {
      item.append(element("span", "workers",
        `${session.subagents.length} subagent${session.subagents.length === 1 ? "" : "s"}`));
    }
    roster.append(item);
  }
}

const feed = new EventSource("/events");
feed.onmessage = (event) => {
  try {
    render(JSON.parse(event.data));
    document.body.classList.remove("disconnected");
  } catch (error) {
    connection.textContent = `Office update failed: ${error.message}`;
    document.body.classList.add("disconnected");
  }
};
feed.addEventListener("error", (event) => {
  document.body.classList.add("disconnected");
  connection.textContent = event.data ?
    `Office feed error: ${JSON.parse(event.data).message}` :
    "Connection interrupted. Reconnecting to the office…";
});
