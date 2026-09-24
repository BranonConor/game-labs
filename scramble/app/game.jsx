"use client";

import { useEffect } from "react";

export default function Game({ authConfigured }) {
  useEffect(() => {
    let mounted = true;
    import("../app.js").then(({ mountGame }) => {
      if (mounted) mountGame(authConfigured);
    }).catch((error) => {
      console.error("Could not start Scramb:", error);
      if (mounted) document.getElementById("feedback").textContent = "Game unavailable. Reload to try again.";
    });
    return () => { mounted = false; };
  }, [authConfigured]);

  return (
    <>
      <canvas id="atmosphere" className="atmosphere-canvas" aria-hidden="true" />
      <main className="shell">
        <header className="topbar">
          <div className="brand-group">
            <button id="menu-toggle" className="menu-toggle" type="button" aria-label="Open menu" aria-haspopup="dialog" aria-controls="menu-dialog">
              <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
            </button>
            <h1 className="brand"><img className="egg-logo" src="/egg.svg" alt="" /> <span>SCRAMB</span><span className="brand-star" aria-hidden="true">✳</span></h1>
          </div>
          <div className="header-actions">
            <div className="edition"><span id="board-kind">DAILY GRID</span><strong id="date-label" /></div>
            <button id="rules" className="help-button" type="button" aria-label="How to play"><span className="help-label">HOW TO PLAY</span><span className="help-icon" aria-hidden="true">?</span></button>
          </div>
        </header>

        <div className="game-layout">
          <section className="board-panel" aria-label="Daily letter grid">
            <div className="board-hud" aria-label="Run status">
              <div className="hud-stat"><span>TIME LEFT</span><strong id="timer">04:00</strong></div>
              <div className="hud-center"><span id="filled-count">0/64 FILLED</span></div>
              <div className="hud-stat hud-score"><span>SCORE</span><strong id="score">0000</strong></div>
            </div>
            <div className="board-wrap">
              <div id="board" className="board covered" role="group" aria-label="Eight by eight letter grid" />
              <div id="selection-preview" className="selection-preview" hidden>
                <div className="selection-preview-header">
                  <span aria-hidden="true">CURRENT WORD</span>
                  <button id="selection-clear" className="selection-clear" type="button" aria-label="Clear selected path">×</button>
                </div>
                <div id="selection-letters" className="selection-letters" aria-hidden="true" />
              </div>
              <div id="start-overlay" className="start-overlay">
                <img className="overlay-egg" src="/egg.svg" alt="" />
                <h2>READY TO<br /><span>SCRAMB?</span></h2>
                <button id="start-button" className="action-button" type="button" disabled>LOADING WORDS... <span aria-hidden="true">↗</span></button>
              </div>
              <div id="finale" className="board-finale" role="status" hidden>
                <div className="finale-card">
                  <img src="/egg.svg" alt="" />
                  <strong id="finale-title" />
                  <span id="finale-detail" />
                </div>
              </div>
            </div>
          </section>

          <aside className="sidebar">
            <section className="draft-panel" aria-labelledby="draft-heading">
              <div className="panel-top"><span id="draft-heading">CURRENT WORD</span><span id="path-length">NO PATH</span></div>
              <div id="compose-content">
                <div className="word-compose">
                  <div id="draft-preview" className="draft-preview" aria-live="polite"><span className="preview-placeholder">SELECT A PATH ON THE GRID</span></div>
                  <input id="word-entry" className="word-entry" type="text" inputMode="text" autoComplete="off" autoCapitalize="characters" spellCheck="false" maxLength="16" aria-label="Type missing letters for the selected word" aria-describedby="feedback" disabled />
                </div>
                <div id="mobile-keyboard" className="mobile-keyboard" role="group" aria-label="Letter keyboard">
                  <span id="mobile-word-announcement" className="mobile-word-announcement" aria-live="polite" />
                  <div className="keyboard-row">
                    <button type="button" data-key="Q">Q</button><button type="button" data-key="W">W</button><button type="button" data-key="E">E</button><button type="button" data-key="R">R</button><button type="button" data-key="T">T</button><button type="button" data-key="Y">Y</button><button type="button" data-key="U">U</button><button type="button" data-key="I">I</button><button type="button" data-key="O">O</button><button type="button" data-key="P">P</button>
                  </div>
                  <div className="keyboard-row">
                    <button type="button" data-key="A">A</button><button type="button" data-key="S">S</button><button type="button" data-key="D">D</button><button type="button" data-key="F">F</button><button type="button" data-key="G">G</button><button type="button" data-key="H">H</button><button type="button" data-key="J">J</button><button type="button" data-key="K">K</button><button type="button" data-key="L">L</button>
                  </div>
                  <div className="keyboard-row">
                    <button type="button" data-key="Z">Z</button><button type="button" data-key="X">X</button><button type="button" data-key="C">C</button><button type="button" data-key="V">V</button><button type="button" data-key="B">B</button><button type="button" data-key="N">N</button><button type="button" data-key="M">M</button><button type="button" data-key="Backspace" className="keyboard-backspace" aria-label="Delete last letter">⌫</button>
                  </div>
                  <div className="keyboard-row keyboard-actions">
                    <button id="mobile-clear" type="button" aria-label="Clear selected path" disabled><span className="hotkey-icon" aria-hidden="true">ESC</span> CLEAR</button><button id="mobile-submit" type="button" aria-label="Submit word" disabled><span className="hotkey-icon" aria-hidden="true">↵</span> ENTER</button>
                  </div>
                </div>
                <div className="draft-actions"><button id="clear" className="secondary-button" type="button" disabled><span className="hotkey-icon" aria-hidden="true">ESC</span> CLEAR</button><button id="submit" className="action-button" type="button" disabled><span className="hotkey-icon" aria-hidden="true">↵</span> LOCK IN WORD</button></div>
                <p id="feedback" className="feedback" role="status" aria-live="polite" />
                <div id="points-preview" className="points-preview" />
              </div>
              <div id="results-content" className="inline-results" aria-live="polite" hidden>
                <h2>NICE COOKIN',<br /><span>CHEF!</span></h2>
                <div id="tier-result" className="end-result">
                  <img id="tier-egg" src="/egg.svg" alt="" />
                  <div className="tier-details">
                    <span id="tier-name" className="tier-name" />
                    <div className="tier-score"><strong id="final-score">0</strong><span>POINTS</span></div>
                    <small id="tier-range" />
                  </div>
                </div>
                <p id="final-summary" />
                <button id="share" className="action-button" type="button">COPY RESULT <img className="copy-icon" src="/copy.svg" alt="" /></button>
                <p id="share-status" role="status" />
                <button id="restart" className="text-link" type="button">Restart today's prototype board</button>
              </div>
            </section>

            <section className="notes-panel" aria-label="Submitted words">
              <div className="panel-top"><span>SCRAMBLES</span><span id="notes-count">0 FOUND</span></div>
              <ol id="word-list" className="word-list"><li className="empty-note">Nothing inked in yet. The board is yours.</li></ol>
            </section>
          </aside>
        </div>
        <footer><div className="footer-actions"><a className="text-link" href="/lexicon-license.txt" target="_blank" rel="noopener">WORD LIST ↗</a><button id="reseed" className="text-link dev-link" type="button">DEV / RESEED ↻</button><button id="skip-to-end" className="text-link dev-link" type="button">DEV / SKIP TO END ↠</button></div></footer>
      </main>

      <dialog id="menu-dialog" className="menu-dialog" aria-label="Scramb menu">
        <div className="menu-top"><span>SCRAMB / MENU</span><button id="menu-close" className="menu-close" type="button" aria-label="Close menu">×</button></div>
        <div id="menu-home" className="menu-screen">
          <div className="menu-hero"><span className="menu-egg" aria-hidden="true"><img src="/egg.svg" alt="" /><span className="menu-drip drip-left" /><span className="menu-drip drip-middle" /><span className="menu-drip drip-right" /><span className="menu-splash" /></span><p className="overline">FRESH FROM THE GRID</p><h2>WHAT'S<br />COOKING?</h2><p>More ways to play together are on the way.</p></div>
          <section className="menu-account" aria-label="Google account">
            <p id="account-status" role="status" aria-live="polite">CHECKING SIGN-IN...</p>
            <button id="google-signin" className="action-button" type="button" disabled>CONTINUE WITH GOOGLE <span aria-hidden="true">↗</span></button>
          </section>
          <nav className="menu-items" aria-label="Menu pages">
            <button className="menu-item" type="button" data-menu-page="scores"><span>SCORES<small>COMING SOON</small></span><span aria-hidden="true">↗</span></button>
            <button className="menu-item" type="button" data-menu-page="profile"><span>PROFILE<small id="profile-label">GUEST MODE</small></span><span aria-hidden="true">↗</span></button>
            <button className="menu-item" type="button" data-menu-page="settings"><span>SETTINGS<small>COMING SOON</small></span><span aria-hidden="true">↗</span></button>
            <button id="menu-logout" className="menu-item" type="button" hidden><span>SIGN OUT<small>GOOGLE ACCOUNT</small></span><span aria-hidden="true">↗</span></button>
          </nav>
          <p id="menu-footnote" className="menu-footnote">YOUR RUN STAYS ON THIS DEVICE</p>
        </div>
        <section id="menu-page" className="menu-screen menu-page" aria-labelledby="menu-page-title" hidden>
          <button id="menu-back" className="menu-back" type="button">← BACK TO MENU</button>
          <img src="/egg.svg" alt="" />
          <p className="overline">COMING SOON</p>
          <h2 id="menu-page-title" />
          <p id="menu-page-description" />
        </section>
      </dialog>

      <dialog id="rules-dialog" className="modal" aria-labelledby="rules-title">
        <div className="modal-header">
          <button className="modal-close" type="button" data-close="" aria-label="Close">×</button>
          <p className="overline">THE RECIPE</p><h2 id="rules-title">Make words.<br />Fill the board.</h2>
        </div>
        <div className="modal-content">
          <p><strong>Pick a path.</strong>&nbsp;Drag or tap through tiles next to each other. You can go all directions except for diagonally. Always include an existing letter in your selection.</p>
          <p><strong>Fill the gaps.</strong>&nbsp;Type letters into the empty tiles to make a word; letters already on the board fill themselves in. Press&nbsp;<strong>ENTER</strong>&nbsp;to submit, or&nbsp;<strong>ESC</strong>&nbsp;to clear the word/path. On phones, use the game keys and tap ENTER or CLEAR. With a keyboard, use arrow keys and Space to choose tiles.</p>
          <p><strong>Fill the board.</strong>&nbsp;Tiles in a submitted word can't be used again. Make more words and try to fill the board entirely (you get a lil' bonus if you do). The game ends if the 4 minutes runs out, if the board is fully complette, or if no scorable word remains.</p>
          <p><strong>Score big.</strong>&nbsp;Letters have different values. Each letter you add earns its value plus 2 points. Some starting letters give a one-time&nbsp;<strong>+5</strong>&nbsp;or&nbsp;<strong>×2</strong>&nbsp;bonus. Fill all 64 tiles for another&nbsp;<strong>+50</strong>.</p>
          <div className="recipe-tiers">
            <p className="overline">EGG TIERS / SCORE BANDS</p>
            <ul id="tier-guide" className="tier-guide" aria-label="Egg score tiers" />
            <small>Cosmetic score bands; we'll tune them as we learn.</small>
          </div>
        </div>
        <div className="modal-footer">
          <button className="action-button" type="button" data-close="">GOT IT <span aria-hidden="true">↗</span></button>
        </div>
      </dialog>
    </>
  );
}
