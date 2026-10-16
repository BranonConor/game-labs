import { generateBoard, VALUES } from './ranked-board.js';

// A transparent bootstrap prior, not invented player records. Calibration uses
// completed boards strictly before this board so a past day's estimate is stable.
export function boardPrior(boardId, baseline = {}) {
  const { fixed, effectTiles, initialFilled } = generateBoard(boardId);
  const rare = fixed.filter(Boolean).reduce((sum, letter) => sum + Math.max(0, VALUES[letter] - 2), 0);
  const accessible = [...effectTiles.keys()].reduce((sum, tile) => sum + [tile - 8, tile + 8, tile - 1, tile + 1]
    .filter(i => i >= 0 && i < 64 && Math.abs(i % 8 - tile % 8) + Math.abs(Math.floor(i / 8) - Math.floor(tile / 8)) === 1 && !fixed[i]).length, 0);
  const factor = Math.max(.8, Math.min(1.2, 1 + (14 - initialFilled) * .015 - rare * .006 + (accessible - 8) * .008));
  const calibrated = Number(baseline.count) >= 30;
  return { mean: Math.max(20, (calibrated ? Number(baseline.mean) : 160) * factor),
    deviation: Math.max(30, (calibrated ? Number(baseline.deviation) : 70) * factor),
    calibration: calibrated ? 'historical' : 'bootstrap' };
}
export function normalCDF(z) {
  const x = Math.abs(z), t = 1 / (1 + .2316419 * x);
  const tail = Math.exp(-x*x/2) / Math.sqrt(2*Math.PI) * t * (.319381530 + t*(-.356563782 + t*(1.781477937 + t*(-1.821255978 + t*1.330274429))));
  return z >= 0 ? 1 - tail : tail;
}
export function scoreModel(boardId, total, distribution = [], baseline = {}, observed = {}) {
  const prior = boardPrior(boardId, baseline);
  // Keep 30 prior observations' worth of influence; continuously recalibrate.
  const observedWeight = total / (total + 30);
  const mean = observed.mean != null ? Number(observed.mean) : distribution.reduce((s,b) => s + (b.score + 25) * b.count, 0) / (total || 1);
  const variance = observed.deviation != null ? Number(observed.deviation)**2 : distribution.reduce((s,b) => s + b.count * ((b.score + 25 - mean)**2 + 50**2/12), 0) / (total || 1);
  const blendedMean = (1-observedWeight)*prior.mean + observedWeight*mean;
  const deviation = Math.sqrt((1-observedWeight)*(prior.deviation**2 + (prior.mean-blendedMean)**2) + observedWeight*(variance + (mean-blendedMean)**2));
  return { mean: blendedMean, deviation, observedWeight, calibration: prior.calibration,
    source: total < 30 ? 'projected' : 'adjusted', sampleSize: total,
    priorMean: prior.mean, priorDeviation: prior.deviation };
}
export function modelPercentile(score, model) {
  // Truncate at zero: scores cannot be negative.
  const floor = normalCDF(-model.mean/model.deviation);
  return Math.round(Math.max(0, Math.min(100, 100 * (normalCDF((score-model.mean)/model.deviation)-floor)/(1-floor))) * 10)/10;
}
