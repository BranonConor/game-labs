export type Status = "idle" | "thinking" | "tool" | "blocked" | "offline";
export type Worker = { id?: string; status: Status; activity: string };
export type Signal = { kind: "message" | "tool" | "helper" | "error"; label: string; at: number };
export type Session = {
  sessionId: string;
  title?: string;
  status: Status;
  activity: string;
  tools: string[];
  subagents: Worker[];
  messages?: number;
  events?: Signal[];
  updatedAt: number;
  seenAt: number;
};
export type Room = { currentSessionId: string; sessions: Session[] };
export type Actor = {
  key: string;
  name: string;
  sessionTitle: string;
  status: Status;
  activity: string;
  helper: boolean;
};

const givenNames = [
  "Ada", "Aiko", "Alma", "Amari", "Anika", "Arden", "Ari", "Basil",
  "Bea", "Cleo", "Dara", "Demi", "Eli", "Emery", "Esme", "Finn",
  "Inez", "Ira", "Jules", "Kaia", "Kit", "Lena", "Lio", "Luca",
  "Mara", "Mica", "Milo", "Mira", "Nell", "Nico", "Noor", "Oli",
  "Orla", "Pax", "Remy", "Rhea", "Rio", "Sage", "Soli", "Tavi",
];
const familyNames = [
  "Alder", "Arbor", "Ash", "Bell", "Birch", "Bloom", "Brooks", "Cedar",
  "Cloud", "Dale", "Dawn", "Dove", "Dusk", "Elm", "Fern", "Finch",
  "Frost", "Grove", "Hart", "Haven", "Hollow", "Ivy", "Lake", "Lark",
  "Linden", "Marsh", "Meadow", "Moss", "Oak", "Orchard", "Pearl", "Pine",
  "Reed", "Ridge", "River", "Rowan", "Shore", "Silver", "Stone", "Vale",
];

function hash(key: string): number {
  let value = 2166136261;
  for (let i = 0; i < key.length; i++) {
    value = Math.imul(value ^ key.charCodeAt(i), 16777619);
  }
  value = Math.imul(value ^ (value >>> 16), 0x7feb352d);
  value = Math.imul(value ^ (value >>> 15), 0x846ca68b);
  value ^= value >>> 16;
  return value >>> 0;
}

export function agentName(key: string): string {
  return `${givenNames[hash(`given:${key}`) % givenNames.length]} ${familyNames[hash(`family:${key}`) % familyNames.length]}`;
}

export function sessionName(session: Session, currentId: string): string {
  return session.title || (session.sessionId === currentId ?
    `Your session · ${session.sessionId.slice(0, 8)}` : `Session ${session.sessionId.slice(0, 8)}`);
}

export function roomActors(room: Room): Actor[] {
  const sorted = [...room.sessions].sort((a, b) =>
    Number(b.sessionId === room.currentSessionId) - Number(a.sessionId === room.currentSessionId) ||
    a.sessionId.localeCompare(b.sessionId));
  const actors: Omit<Actor, "name">[] = [
    ...sorted.map((session) => ({
      key: session.sessionId, sessionTitle: sessionName(session, room.currentSessionId),
      status: session.status, activity: session.activity, helper: false,
    })),
    ...sorted.flatMap((session) => session.subagents.map((worker, index) => ({
      key: `${session.sessionId}:helper:${worker.id ?? index}`,
      sessionTitle: sessionName(session, room.currentSessionId),
      status: worker.status, activity: worker.activity, helper: true,
    }))),
  ];
  const seen = new Set<string>();
  return actors.map((actor) => {
    const base = agentName(actor.key);
    let name = base;
    for (let suffix = 2; seen.has(name); suffix++) name = `${base} ${suffix}`;
    seen.add(name);
    return { ...actor, name };
  });
}
