/* ============================================================
   main.js — Bootstrap & Game Loop
   ============================================================ */

(function () {

  // ── DOM References ────────────────────────────────────────
  const canvas      = document.getElementById('game-canvas');
  const levelName   = document.getElementById('level-name');
  const btnLevels   = document.getElementById('btn-levels');
  const menuOverlay = document.getElementById('menu-overlay');
  const menuBox     = document.getElementById('menu-box');
  const levelGrid   = document.getElementById('level-grid');
  const btnMenuClose = document.getElementById('btn-menu-close');
  const levelTimeEl = document.getElementById('level-time');
  const levelBestEl = document.getElementById('level-best');
  const winOverlay  = document.getElementById('win-overlay');
  const winLevelEl  = document.getElementById('win-level');
  const winTimeEl   = document.getElementById('win-time');
  const winBestEl   = document.getElementById('win-best');
  const finalOverlay = document.getElementById('final-overlay');
  const infoOverlay = document.getElementById('info-overlay');
  const btnInfo     = document.getElementById('btn-info');
  const btnInfoClose = document.getElementById('btn-info-close');
  const btnNext     = document.getElementById('btn-next');
  const btnRestart  = document.getElementById('btn-restart');
  const btnPlayAgain = document.getElementById('btn-play-again');

  const COMPLETED_LEVELS_KEY = 'and_game_completed_levels';
  const BEST_TIMES_KEY = 'and_game_best_times';
  const completedLevelIds = new Set(loadCompletedLevelIds());
  const bestTimes = loadBestTimes();

  function colorizeTruthTableBits() {
    const cells = document.querySelectorAll('#truth-grid td');
    cells.forEach((cell) => {
      const value = cell.textContent.trim();
      cell.classList.remove('bit-0', 'bit-1');
      if (value === '0') cell.classList.add('bit-0');
      if (value === '1') cell.classList.add('bit-1');
    });
  }

  // ── Animation loop (for dashed border pulse) ─────────────
  let _rafId = null;
  let _lastSolved = false;
  let _winTimeout = null;
  let _menuVisible = false;
  let _levelStartedAt = null;
  let _elapsedMs = 0;
  let _levelFinished = false;
  let _timeRafId = null;
  let _currentLevelId = null;

  function loadCompletedLevelIds() {
    try {
      const raw = localStorage.getItem(COMPLETED_LEVELS_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (_error) {
      return [];
    }
  }

  function saveCompletedLevelIds() {
    try {
      localStorage.setItem(COMPLETED_LEVELS_KEY, JSON.stringify(Array.from(completedLevelIds)));
    } catch (_error) {
      // Ignore storage failures.
    }
  }

  function loadBestTimes() {
    try {
      const raw = localStorage.getItem(BEST_TIMES_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch (_error) {
      return {};
    }
  }

  function saveBestTimes() {
    try {
      localStorage.setItem(BEST_TIMES_KEY, JSON.stringify(bestTimes));
    } catch (_error) {
      // Ignore storage failures.
    }
  }

  function formatTime(ms) {
    if (ms === null || ms === undefined || Number.isNaN(ms)) return '--:--.--';
    const totalCentiseconds = Math.max(0, Math.floor(ms / 10));
    const minutes = Math.floor(totalCentiseconds / 6000);
    const seconds = Math.floor((totalCentiseconds % 6000) / 100);
    const centiseconds = totalCentiseconds % 100;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centiseconds).padStart(2, '0')}`;
  }

  function getBestTime(levelId) {
    const value = bestTimes[String(levelId)];
    return typeof value === 'number' ? value : null;
  }

  function setBestTime(levelId, ms) {
    const currentBest = getBestTime(levelId);
    if (currentBest === null || ms < currentBest) {
      bestTimes[String(levelId)] = ms;
      saveBestTimes();
    }
  }

  function updateTimerDisplay() {
    const levelId = _currentLevelId;
    if (levelId === null || _levelStartedAt === null) return;

    const elapsed = _levelFinished ? _elapsedMs : (performance.now() - _levelStartedAt);
    const best = getBestTime(levelId);

    levelTimeEl.textContent = `TIME ${formatTime(elapsed)}`;
    levelBestEl.textContent = `BEST ${best !== null ? formatTime(best) : '--:--.--'}`;

    const levelIndex = State.currentLevelIndex;
    if (LEVELS[levelIndex]) {
      const menuCard = levelGrid.querySelector(`.level-card[data-level-index="${levelIndex}"]`);
      if (menuCard) {
        const existing = menuCard.querySelector('.level-card-best');
        const bestLabel = best !== null ? `Best: ${formatTime(best)}` : 'Best: --:--.--';
        if (existing) {
          existing.textContent = bestLabel;
        }
      }
    }
  }

  function startTimer() {
    _levelStartedAt = performance.now();
    _elapsedMs = 0;
    _levelFinished = false;

    if (_timeRafId) cancelAnimationFrame(_timeRafId);

    const step = () => {
      if (_levelStartedAt === null) return;
      if (!_levelFinished) {
        _elapsedMs = performance.now() - _levelStartedAt;
        updateTimerDisplay();
        _timeRafId = requestAnimationFrame(step);
      }
    };

    updateTimerDisplay();
    _timeRafId = requestAnimationFrame(step);
  }

  function stopTimer() {
    _levelFinished = true;
    if (_timeRafId) cancelAnimationFrame(_timeRafId);
    _timeRafId = null;
    _elapsedMs = Math.max(0, performance.now() - _levelStartedAt);
    updateTimerDisplay();
  }

  function markLevelCompleted(levelId) {
    if (!completedLevelIds.has(levelId)) {
      completedLevelIds.add(levelId);
      saveCompletedLevelIds();
      renderLevelMenu();
    }
  }

  function isLevelCompleted(levelId) {
    return completedLevelIds.has(levelId);
  }

  function renderLevelMenu() {
    levelGrid.innerHTML = '';

    LEVELS.forEach((level, index) => {
      const completed = isLevelCompleted(level.id);
      const best = getBestTime(level.id);
      const card = document.createElement('button');
      card.type = 'button';
      card.className = `level-card${completed ? ' completed' : ''}`;
      card.dataset.levelIndex = String(index);

      card.innerHTML = `
        <div class="level-card-head">
          <div class="level-card-name">LEVEL ${index + 1}</div>
          <div class="level-card-status">${completed ? 'COMPLETED' : 'NEW'}</div>
        </div>
        <div class="level-card-description">${level.name}</div>
        <div class="level-card-meta">
          <span>Difficulty: ${level.difficulty || 'Medium'}</span>
          <span>${completed ? 'REPLAY' : 'PLAY'}</span>
        </div>
        <div class="level-card-description">${level.description}</div>
        <div class="level-card-best">Best: ${best !== null ? formatTime(best) : '--:--.--'}</div>
      `;

      card.addEventListener('click', () => {
        closeMenuOverlay();
        loadLevel(index);
      });

      levelGrid.appendChild(card);
    });
  }

  function openMenuOverlay() {
    renderLevelMenu();
    menuOverlay.classList.remove('hidden');
    menuOverlay.setAttribute('aria-hidden', 'false');
    _menuVisible = true;
  }

  function closeMenuOverlay() {
    menuOverlay.classList.add('hidden');
    menuOverlay.setAttribute('aria-hidden', 'true');
    _menuVisible = false;
  }

  // ── Core: Evaluate + Render ───────────────────────────────
  function tick() {
    const level  = State.level;
    if (!level) return;

    const result = Engine.evaluate(level);
    State.setEvalResult(result);

    Renderer.render(level, result, State.hoveredNodeId, result.solved);

    // Trigger win sequence if newly solved
    if (result.solved && !_lastSolved) {
      _lastSolved = true;
      _onSolve();
    }
    if (!result.solved) {
      _lastSolved = false;
    }

    _rafId = requestAnimationFrame(tick);
  }

  function startLoop() {
    if (_rafId) cancelAnimationFrame(_rafId);
    _rafId = requestAnimationFrame(tick);
  }

  // ── Load a Level ─────────────────────────────────────────
  function loadLevel(index) {
    if (index >= LEVELS.length) {
      _showFinalScreen();
      return;
    }

    const levelDef = LEVELS[index];
    State.setLevelIndex(index);
    State.setLevel(levelDef);
    _currentLevelId = levelDef.id;
    _lastSolved = false;
    _levelFinished = false;
    _elapsedMs = 0;

    // Update HUD
    levelName.textContent = `${index + 1}. ${levelDef.name}`;

    // Hide overlays
    closeMenuOverlay();
    winOverlay.classList.add('hidden');
    finalOverlay.classList.add('hidden');

    startTimer();
    renderLevelMenu();

    startLoop();
  }

  // ── Win Sequence ─────────────────────────────────────────
  function _onSolve() {
    clearTimeout(_winTimeout);
    _winTimeout = setTimeout(() => {
      const idx = State.currentLevelIndex;
      const levelDef = LEVELS[idx];
      stopTimer();
      setBestTime(levelDef.id, _elapsedMs);
      markLevelCompleted(levelDef.id);
      winLevelEl.textContent = `LEVEL ${idx + 1} — ${LEVELS[idx].name}`;
      winTimeEl.textContent = `TIME: ${formatTime(_elapsedMs)}`;
      const best = getBestTime(levelDef.id);
      winBestEl.textContent = `BEST: ${formatTime(best)}`;
      winOverlay.classList.remove('hidden');
      renderLevelMenu();
    }, 900);   // short delay so player sees the green flash first
  }

  function _showFinalScreen() {
    if (_rafId) cancelAnimationFrame(_rafId);
    finalOverlay.classList.remove('hidden');
  }

  // ── Button Handlers ───────────────────────────────────────
  btnNext.addEventListener('click', () => {
    winOverlay.classList.add('hidden');
    State.advanceLevel();
    loadLevel(State.currentLevelIndex);
  });

  btnRestart.addEventListener('click', () => {
    winOverlay.classList.add('hidden');
    loadLevel(State.currentLevelIndex);
  });

  btnPlayAgain.addEventListener('click', () => {
    finalOverlay.classList.add('hidden');
    loadLevel(0);
  });

  btnLevels.addEventListener('click', () => {
    openMenuOverlay();
  });

  btnMenuClose.addEventListener('click', () => {
    closeMenuOverlay();
  });

  menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) closeMenuOverlay();
  });

  // ── Info Overlay Handlers ───────────────────────────────
  function openInfoOverlay() {
    infoOverlay.classList.remove('hidden');
    infoOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeInfoOverlay() {
    infoOverlay.classList.add('hidden');
    infoOverlay.setAttribute('aria-hidden', 'true');
  }

  btnInfo.addEventListener('click', openInfoOverlay);
  btnInfoClose.addEventListener('click', closeInfoOverlay);

  // Close when clicking the dark backdrop
  infoOverlay.addEventListener('click', (e) => {
    if (e.target === infoOverlay) closeInfoOverlay();
  });

  // Keyboard accessibility
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !infoOverlay.classList.contains('hidden')) {
      closeInfoOverlay();
      return;
    }

    if (e.key === 'Escape' && !menuOverlay.classList.contains('hidden')) {
      closeMenuOverlay();
    }
  });

  colorizeTruthTableBits();

  // ── Input Callbacks ───────────────────────────────────────
  Input.init(canvas, {
    onGatePlaced:  () => { /* tick loop handles re-render */ },
    onHoverChange: () => { /* hover state already in State, tick renders it */ },
  });

  // ── Renderer Init & Resize ────────────────────────────────
  Renderer.init(canvas);
  window.addEventListener('resize', () => Renderer.resize());

  // ── Gate Palette Highlight (hover sync) ───────────────────
  function updatePaletteHighlight(gate) {
    document.querySelectorAll('.gate-chip').forEach(el => {
      el.classList.toggle('active', el.dataset.gate === gate);
    });
  }

  // Sync palette with hovered gate slot
  setInterval(() => {
    const h = State.hoveredNodeId;
    if (h && State.level) {
      const node = State.level.nodes.find(n => n.id === h);
      updatePaletteHighlight(node ? node.gate : null);
    } else {
      updatePaletteHighlight(null);
    }
  }, 100);

  // ── Start ─────────────────────────────────────────────────
  renderLevelMenu();
  openMenuOverlay();

})();
