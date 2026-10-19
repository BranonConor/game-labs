import { DURATION_MS } from './ranked-board.js';

// Versioned, date-independent seed shared by the tutorial and practice game.
export const PRACTICE_BOARD_ID = '2026-09-25:practice-v1';
export const PRACTICE_DURATION_MS = 5 * 60 * 1000;
export const PRACTICE_URL = '/?practice=1';

export function playMode(search, day) {
  const params = new URLSearchParams(search);
  const practice = params.get('practice') === '1';
  const requested = params.get('seed');
  const seed = requested && /^[\w-]{1,64}$/.test(requested) ? requested : null;
  return {
    practice,
    practiceSeed: practice ? 'practice-v1' : seed,
    boardId: practice ? PRACTICE_BOARD_ID : seed ? `${day}:${seed}` : day,
    duration: practice ? PRACTICE_DURATION_MS : DURATION_MS,
  };
}
