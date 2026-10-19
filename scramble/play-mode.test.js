import assert from 'node:assert/strict';
import test from 'node:test';
import { playMode, PRACTICE_BOARD_ID, PRACTICE_DURATION_MS } from './play-mode.js';
import { DURATION_MS, generateBoard, validRankedBoardId } from './ranked-board.js';
import { tutorialExamples } from './tutorial-example.js';
import { verifyWord } from './ranked-run.js';
import { readFileSync } from 'node:fs';

test('practice retains the same board and five-minute timer across daily rollover', () => {
  const first = playMode('?practice=1', '2026-10-18');
  const next = playMode('?practice=1', '2026-10-19');
  assert.deepEqual(first, next);
  assert.equal(first.boardId, PRACTICE_BOARD_ID);
  assert.equal(first.duration, 300000);
  assert.equal(PRACTICE_DURATION_MS, 300000);
  assert.equal(validRankedBoardId(first.boardId), false);
  assert.deepEqual(generateBoard(first.boardId), generateBoard(next.boardId));
  assert.notDeepEqual(generateBoard(first.boardId).fixed, generateBoard('2026-10-18').fixed);
});

test('daily play keeps its date, four-minute clock, and separate storage identity', () => {
  const daily = playMode('', '2026-10-18');
  assert.equal(daily.practice, false);
  assert.equal(daily.practiceSeed, null);
  assert.equal(daily.boardId, '2026-10-18');
  assert.equal(daily.duration, DURATION_MS);
  assert.notEqual(daily.boardId, playMode('?practice=1', daily.boardId).boardId);
  assert.equal(playMode('?seed=other', daily.boardId).practiceSeed, 'other');
  assert.equal(playMode('?practice=1&seed=other', daily.boardId).boardId, PRACTICE_BOARD_ID);
});

test('the fixed tutorial demonstrates legal words with an existing letter inside the word', () => {
  const board = generateBoard(PRACTICE_BOARD_ID);
  const examples = tutorialExamples(board.fixed, board.effectTiles);
  const words = new Set(readFileSync(new URL('./public/lexicon.txt', import.meta.url), 'utf8').toUpperCase().split(/\s+/));
  assert.ok(examples[0].anchorPosition > 0);
  assert.ok(examples[0].anchorPosition < examples[0].word.length - 1);
  assert.equal(board.fixed[examples[0].path[0]], null);
  let run = { played: {}, moves: [], score: 0 };
  for (const example of examples) {
    run = verifyWord(PRACTICE_BOARD_ID, run, example.path, example.letters, words);
    assert.equal(run.move.word, example.word);
    assert.equal(run.move.points, example.points);
  }
});
