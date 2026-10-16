import { tierForScore } from "./score-tiers.js";

export function renderScoreChart(container, today) {
  container.replaceChildren();
  const model = today.model;
  if (!model || today.score == null || today.percentile == null) { container.hidden = true; return; }
  const ns = 'http://www.w3.org/2000/svg';
  const node = (name, attrs = {}, text) => {
    const el = document.createElementNS(ns, name);
    for (const [key,value] of Object.entries(attrs)) el.setAttribute(key, value);
    if (text != null) el.textContent = text;
    return el;
  };
  const max = Math.ceil(Math.max(model.mean + 3*model.deviation, today.score || 0, 300)/100)*100;
  const x = score => 24 + Math.max(0, Math.min(max,score))/max*552;
  const y = score => 150 - 112*Math.exp(-.5*((score-model.mean)/model.deviation)**2);
  const svg = node('svg', { viewBox: '0 0 600 200', role: 'img', 'aria-label': `Score spread. Average ${Math.round(model.mean)} points. Your score ${today.score} points, ahead of about ${Math.round(today.percentile)}%.` });
  const curve = Array.from({length:121},(_,i)=>{ const v=i/120*max;return `${i?'L':'M'}${x(v).toFixed(2)},${y(v).toFixed(2)}`; }).join(' ');
  svg.append(node('path',{d:curve+' L576,150 L24,150 Z',fill:'#a9dbc422'}));
  svg.append(node('path',{d:curve,fill:'none',stroke:'#a9dbc4','stroke-width':3}));
  svg.append(node('line',{x1:24,x2:576,y1:150,y2:150,stroke:'#8897a3'}));
  svg.append(node('line',{x1:x(model.mean),x2:x(model.mean),y1:35,y2:150,stroke:'#a9dbc4','stroke-dasharray':'4 5'}));
  const meanX = x(model.mean);
  const labelX = Math.abs(x(today.score)-meanX) < 70
    ? Math.max(80,Math.min(520,meanX + (x(today.score) <= meanX ? 85 : -85))) : meanX;
  svg.append(node('text',{x:labelX,'text-anchor':'middle',y:20,fill:'#a9dbc4'},`AVG ${Math.round(model.mean)}`));
  if (today.score != null) {
    const px=x(today.score);
    svg.append(node('line',{x1:px,x2:px,y1:y(today.score),y2:165,stroke:'#ffcf83','stroke-width':2}));
    svg.append(node('circle',{cx:px,cy:y(today.score),r:5,fill:'#ffcf83',stroke:'#302f45','stroke-width':2}));
    const egg = node('g',{transform:`translate(${px},${y(today.score)-26})`,'aria-hidden':'true'});
    egg.append(node('image',{class:'score-curve-egg',href:`/eggs/${tierForScore(today.score).id}.svg`,x:-14,y:-14,width:28,height:28,'image-rendering':'pixelated'}));
    svg.append(egg);
    svg.append(node('text',{x:Math.max(60,Math.min(540,px)),y:191,'text-anchor':'middle',fill:'#ffcf83'},`YOU · ${today.score}`));
  }
  for (const v of [0,max]) svg.append(node('text',{x:x(v),y:170,'text-anchor':v?'end':'start',fill:'#cbd4d4'},`${v} PTS`));
  container.append(svg);
  container.hidden=false;
}
