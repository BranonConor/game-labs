import assert from 'node:assert/strict';
import test from 'node:test';
import { boardPrior, scoreModel, modelPercentile, normalCDF } from './score-model.js';
import { isExpired, publicRankedRun } from './ranked-run.js';
const day = '2026-10-16';
test('zero-player projection is deterministic, bounded, and monotonic', () => {
  const m=scoreModel(day,0);
  assert.deepEqual(m,scoreModel(day,0));
  assert.equal(m.source,'projected');
  assert.equal(modelPercentile(0,m),0);
  assert.ok(modelPercentile(100,m)<modelPercentile(200,m));
  assert.equal(modelPercentile(100000,m),100);
  assert.ok(Math.abs(normalCDF(0)-.5)<.00001);
  assert.notDeepEqual(boardPrior(day),boardPrior('2026-10-17'));
});
test('real moments calibrate smoothly through 30, including overflow scores', () => {
  const before=scoreModel(day,29,[],{}, {mean:300,deviation:60});
  const after=scoreModel(day,30,[],{}, {mean:300,deviation:60});
  assert.ok(Math.abs(modelPercentile(200,before)-modelPercentile(200,after))<2);
  const many=scoreModel(day,30000,[],{}, {mean:600,deviation:60});
  assert.ok(many.mean>590);
  assert.equal(many.source,'adjusted');
  assert.equal(boardPrior(day,{count:100,mean:250,deviation:40}).calibration,'historical');
});
test('paused authoritative runs survive wall-clock deadline, but freeze at daily cutoff', () => {
  const run={board_id:day,started_at:day+'T12:00:00Z',deadline_at:day+'T12:04:00Z',paused_at:day+'T12:01:00Z',moves:[],played:{},sequence:0,score:0};
  assert.equal(isExpired(run,Date.parse(day+'T18:00:00Z')),false);
  const view=publicRankedRun(run,Date.parse(day+'T18:00:00Z'));
  assert.equal(view.remainingMs,180000);assert.equal(view.finished,false);
  assert.equal(isExpired({...run,paused_at:null},Date.parse(day+'T12:04:00Z')),true);
  assert.equal(isExpired(run,Date.parse('2026-10-17T00:04:00Z')),true);
});
test('reloading an early finish preserves its unused active time', () => {
  const run={board_id:day,started_at:day+'T12:00:00Z',deadline_at:day+'T12:14:00Z',finished_at:day+'T12:12:00Z',moves:[],played:{},sequence:0,score:0};
  const view=publicRankedRun(run,Date.parse(day+'T18:00:00Z'));
  assert.equal(view.remainingMs,120000); assert.equal(view.finished,true); assert.equal(view.pausedAt,null);
});
