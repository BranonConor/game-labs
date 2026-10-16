'use client';
import { useEffect, useState } from 'react';
import { scoreModel, modelPercentile } from '../../../score-model';
import { renderScoreChart } from '../../../score-chart';
import { ScoresTodayCard, LeaderboardTable } from '../../scores-ui';

export default function Preview() {
  const [total,setTotal]=useState(12);
  const [score,setScore]=useState(215);

  const distribution=Array.from({length:10},(_,i)=>({score:i*50,count:0}));
  // Deterministic, visibly labeled sample data. No API writes or account session.
  const weights=[.02,.08,.18,.27,.23,.13,.06,.02,.01,0];
  for(let i=0;i<total;i++) {
    const q=(i+.5)/total;let cumulative=0;
    const index=weights.findIndex(w=>(cumulative+=w)>=q);
    distribution[index<0?9:index].count++;
  }
  const model=scoreModel('2026-10-16',total,distribution);
  const percentile=modelPercentile(score,model);
  const today={model,distribution,total,score,percentile,comparisonSource:model.source};
  useEffect(()=>renderScoreChart(document.getElementById('scores-distribution'),today),[total,score]);
  const entries=[['A.L.',310],['J.K.',270],['B.E.',score],['M.S.',180],['T.N.',145]]
    .sort((a,b)=>b[1]-a[1]).map(([name,points],i)=>({name,points,rank:i+1,mine:name==='B.E.'}));
  return <main className="scores-preview">
    <a href="/" className="text-link">← BACK TO SCRAMB</a>
    <div className="scores-heading"><h1>Score kitchen</h1><span className="scores-date">LOCAL DESIGN PREVIEW · SAMPLE DATA</span></div>
    <p className="scores-note">Explore the score card and curve. These sample scores never enter the database.</p>
    <div className="preview-controls">
      <label>Finished players <select value={total} onChange={e=>setTotal(Number(e.target.value))}>{[0,1,12,29,30,100,250].map(n=><option key={n}>{n}</option>)}</select></label>
      <label>Your score <input type="range" min="0" max="600" step="5" value={score} onChange={e=>setScore(Number(e.target.value))}/><output>{score}</output></label>
    </div>
    <ScoresTodayCard today={today}/>
    <section className="scores-history leaderboard"><div className="scores-history-top"><h3>TODAY'S LEADERS</h3><span>SAMPLE SCORES</span></div><LeaderboardTable entries={entries}/></section>
  </main>;
}
