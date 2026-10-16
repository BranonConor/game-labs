// Shared by the live side menu and the local Score Kitchen preview.
export function ScoresTodayCard({ today = null }) {
  return (
    <section className="scores-card" aria-labelledby="scores-today-title">
      <div className="scores-card-top">
        <span id="scores-today-title" className="overline">TODAY'S GRID</span>
        <span id="scores-phase" className="scores-phase">LIVE</span>
      </div>
      <div id="scores-today-empty" className="scores-today-empty" hidden={Boolean(today)}>
        <img src="/egg.svg" alt="" />
        <div>
          <strong id="scores-empty-title">THE GRID IS WAITING</strong>
          <p id="scores-empty-copy">Sign in and finish today's grid to join the ranking.</p>
          <button id="scores-play" className="text-link scores-play" type="button" hidden>PLAY TODAY'S GRID ↗</button>
        </div>
      </div>
      <div id="scores-today-result" hidden={!today}>
        <div className="scores-result-grid">
          <div className="scores-feature">
            <span>YOUR SCORE</span><strong id="scores-score">{today?.score ?? "—"}</strong><small>POINTS</small>
          </div>
          <div className="scores-placement">
            <span>YOUR PLACE</span>
            <strong id="scores-rank">{today ? `${Math.round(today.percentile)}%` : "Run in progress"}</strong>
            <small>AHEAD OF OTHERS</small>
            <span id="scores-percentile" hidden />
          </div>
        </div>
        <p id="scores-note" className="scores-note" hidden />
      </div>
      <div id="scores-chart" className="scores-chart" hidden={!today}>
        <span className="overline">TODAY'S SCORE SPREAD</span>
        <div id="scores-distribution" className="scores-distribution" role="img" aria-label="Today's score distribution" />
      </div>
    </section>
  );
}

export function LeaderboardTable({ kind = "daily", entries = [] }) {
  const allTime = kind === "allTime";
  return (
    <div className="leaderboard-scroll">
      <table className={allTime ? "all-time-table" : undefined} aria-label={allTime ? "All-time points leaderboard" : "Today's leaderboard"}>
        <thead><tr>
          <th scope="col">RANK</th><th scope="col">PLAYER</th><th scope="col">POINTS</th>
          {allTime && <><th scope="col">PLAYED</th><th scope="col">AVG</th></>}
        </tr></thead>
        <tbody id={allTime ? "all-time-leaders-list" : "daily-leaders-list"}>
          {entries.map((entry, index) => <tr key={`${entry.rank}:${index}`} className={entry.mine ? "mine" : undefined}>
            <td>#{entry.rank}</td><td>{entry.name}{entry.mine ? " · YOU" : ""}</td><td>{entry.points.toLocaleString()}</td>
            {allTime && <><td>{entry.played}</td><td>{entry.average.toFixed(1)}</td></>}
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}
