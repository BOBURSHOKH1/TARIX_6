/**
 * 6-SINF QADIMGI DUNYO TARIXI - INTERAKTIV TEST TIZIMI
 * JavaScript Dasturiy Mantig'i (Script Engine)
 * Mualliflik: 2022-yilgi O'zbekiston 6-sinf Tarix darsligi asosida
 */

(() => {
  'use strict';

  // ==========================================
  // ILOVA HOLATI (APP STATE)
  // ==========================================
  const state = {
    allQuestions: [],
    currentTestQuestions: [],
    currentIndex: 0,
    userAnswers: {}, // questionId -> selectedOptionIndex (0..3)
    userChecked: {}, // questionId -> boolean (mashg'ulot rejimida tekshirilganmi)
    mode: 'standard', // 'quick10', 'standard', 'deep30', 'large50', 'chapter', 'full', 'exam', 'practice', 'retryWrong'
    isExamMode: false,
    isPracticeMode: false,
    selectedChapterId: null,
    timeLimitSeconds: 0,
    timeRemainingSeconds: 0,
    timerInterval: null,
    testStartTime: null,
    testDurationSeconds: 0,
    soundEnabled: true,
    shuffleOptionsEnabled: true,
    stats: {
      totalTests: 0,
      bestScore: 0,
      bestPercent: 0,
      totalCorrect: 0,
      totalQuestionsAnswered: 0
    }
  };

  // ==========================================
  // DOM ELEMENTLAR
  // ==========================================
  const els = {
    // Ekranlar
    screenDashboard: document.getElementById('screenDashboard'),
    screenTest: document.getElementById('screenTest'),
    screenResults: document.getElementById('screenResults'),

    // Header statistika
    headerBestScore: document.getElementById('headerBestScore'),
    headerTestsCount: document.getElementById('headerTestsCount'),
    btnSoundToggle: document.getElementById('btnSoundToggle'),
    btnSettings: document.getElementById('btnSettings'),
    btnTextbookInfo: document.getElementById('btnTextbookInfo'),
    brandHomeBtn: document.getElementById('brandHomeBtn'),

    // Dashboard elementlari
    dashTotalTests: document.getElementById('dashTotalTests'),
    dashBestScore: document.getElementById('dashBestScore'),
    dashAvgPercent: document.getElementById('dashAvgPercent'),
    chaptersList: document.getElementById('chaptersList'),

    // Test ekrani elementlari
    testModeName: document.getElementById('testModeName'),
    testTimerWrapper: document.getElementById('testTimerWrapper'),
    testTimerText: document.getElementById('testTimerText'),
    testProgressText: document.getElementById('testProgressText'),
    testPercentText: document.getElementById('testPercentText'),
    testProgressBar: document.getElementById('testProgressBar'),
    paletteToggleBar: document.getElementById('paletteToggleBar'),
    paletteContainer: document.getElementById('paletteContainer'),
    paletteGrid: document.getElementById('paletteGrid'),
    questionSectionTag: document.getElementById('questionSectionTag'),
    questionTopicTag: document.getElementById('questionTopicTag'),
    questionText: document.getElementById('questionText'),
    optionsList: document.getElementById('optionsList'),
    explanationBox: document.getElementById('explanationBox'),
    explanationContent: document.getElementById('explanationContent'),

    // Test tugmalari
    btnPrevQuestion: document.getElementById('btnPrevQuestion'),
    btnNextQuestion: document.getElementById('btnNextQuestion'),
    btnCheckAnswer: document.getElementById('btnCheckAnswer'),
    btnFinishTest: document.getElementById('btnFinishTest'),
    btnQuitTest: document.getElementById('btnQuitTest'),

    // Natijalar ekrani
    resultTrophy: document.getElementById('resultTrophy'),
    resultGradeTitle: document.getElementById('resultGradeTitle'),
    resultGradeComment: document.getElementById('resultGradeComment'),
    resultPercent: document.getElementById('resultPercent'),
    resultScoreText: document.getElementById('resultScoreText'),
    resultCorrectCount: document.getElementById('resultCorrectCount'),
    resultWrongCount: document.getElementById('resultWrongCount'),
    resultTimeSpent: document.getElementById('resultTimeSpent'),
    btnRestartTest: document.getElementById('btnRestartTest'),
    btnRetryMistakes: document.getElementById('btnRetryMistakes'),
    btnHomeFromResults: document.getElementById('btnHomeFromResults'),
    reviewList: document.getElementById('reviewList'),
    filterReviewBtns: document.querySelectorAll('.filter-btn'),

    // Modallar
    textbookModal: document.getElementById('textbookModal'),
    settingsModal: document.getElementById('settingsModal'),
    confirmFinishModal: document.getElementById('confirmFinishModal'),
    btnConfirmFinishYes: document.getElementById('btnConfirmFinishYes'),
    settingSoundToggle: document.getElementById('settingSoundToggle'),
    settingShuffleToggle: document.getElementById('settingShuffleToggle'),
    confettiCanvas: document.getElementById('confettiCanvas')
  };

  // ==========================================
  // WEB AUDIO API - TOVUSH EFFEKTLARI (NO EXTERNAL FILES)
  // ==========================================
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playTone(freq, duration = 0.15, type = 'sine', gainVal = 0.12) {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio play failed', e);
    }
  }

  function playCorrectSound() {
    playTone(523.25, 0.12, 'sine', 0.15); // C5
    setTimeout(() => playTone(659.25, 0.18, 'sine', 0.15), 100); // E5
    setTimeout(() => playTone(783.99, 0.25, 'triangle', 0.18), 180); // G5
  }

  function playWrongSound() {
    playTone(280, 0.15, 'sawtooth', 0.12);
    setTimeout(() => playTone(220, 0.25, 'sawtooth', 0.12), 120);
  }

  function playSelectSound() {
    playTone(600, 0.05, 'sine', 0.06);
  }

  function playFanfare() {
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, idx) => {
      setTimeout(() => playTone(f, 0.2, 'triangle', 0.2), idx * 120);
    });
  }

  // ==========================================
  // MA'LUMOTLARNI YUKLASH VA LOCALSTORAGE
  // ==========================================
  function loadStoredStats() {
    try {
      const saved = localStorage.getItem('tarix_test_stats_v1');
      if (saved) {
        state.stats = Object.assign(state.stats, JSON.parse(saved));
      }
      const soundSetting = localStorage.getItem('tarix_sound_setting');
      if (soundSetting !== null) {
        state.soundEnabled = soundSetting === 'true';
      }
      const shuffleSetting = localStorage.getItem('tarix_shuffle_setting');
      if (shuffleSetting !== null) {
        state.shuffleOptionsEnabled = shuffleSetting === 'true';
      }
    } catch (e) {
      console.error('Storage load error', e);
    }
    updateHeaderStats();
    updateDashboardStats();
    updateSettingsUI();
  }

  function saveStoredStats() {
    try {
      localStorage.setItem('tarix_test_stats_v1', JSON.stringify(state.stats));
      localStorage.setItem('tarix_sound_setting', state.soundEnabled.toString());
      localStorage.setItem('tarix_shuffle_setting', state.shuffleOptionsEnabled.toString());
    } catch (e) {
      console.error('Storage save error', e);
    }
    updateHeaderStats();
    updateDashboardStats();
  }

  function updateHeaderStats() {
    if (els.headerBestScore) {
      els.headerBestScore.textContent = `${state.stats.bestPercent}%`;
    }
    if (els.headerTestsCount) {
      els.headerTestsCount.textContent = state.stats.totalTests;
    }
    if (els.btnSoundToggle) {
      els.btnSoundToggle.textContent = state.soundEnabled ? '🔊' : '🔇';
    }
  }

  function updateDashboardStats() {
    if (els.dashTotalTests) els.dashTotalTests.textContent = state.stats.totalTests;
    if (els.dashBestScore) els.dashBestScore.textContent = `${state.stats.bestScore} ball (${state.stats.bestPercent}%)`;
    if (els.dashAvgPercent) {
      const avg = state.stats.totalQuestionsAnswered > 0
        ? Math.round((state.stats.totalCorrect / state.stats.totalQuestionsAnswered) * 100)
        : 0;
      els.dashAvgPercent.textContent = `${avg}%`;
    }
  }

  function updateSettingsUI() {
    if (els.settingSoundToggle) els.settingSoundToggle.checked = state.soundEnabled;
    if (els.settingShuffleToggle) els.settingShuffleToggle.checked = state.shuffleOptionsEnabled;
  }

  // ==========================================
  // EKRANLARNI ALMASHTIRISH (NAVIGATION)
  // ==========================================
  function showScreen(screenEl) {
    [els.screenDashboard, els.screenTest, els.screenResults].forEach(s => {
      if (s) s.classList.remove('active');
    });
    if (screenEl) {
      screenEl.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ==========================================
  // SHUFFLE (TASODIFIY ARALASHTIRISH)
  // ==========================================
  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  /**
   * Savol va uning variantlarini darslikdagi to'g'ri javobni yo'qotmasdan aralashtirish
   */
  function prepareQuestionItem(original) {
    if (!state.shuffleOptionsEnabled) {
      return {
        ...original,
        shuffledOptions: [...original.options],
        correctShuffledIndex: original.correct
      };
    }
    // Variantlarni indekslari bilan birlashtiramiz
    const indexed = original.options.map((text, idx) => ({ text, isCorrect: idx === original.correct }));
    const shuffled = shuffleArray(indexed);
    const correctIdx = shuffled.findIndex(item => item.isCorrect);

    return {
      ...original,
      shuffledOptions: shuffled.map(item => item.text),
      correctShuffledIndex: correctIdx
    };
  }

  // ==========================================
  // TESTNI BOSHLASH VA SOZLASH
  // ==========================================
  function startTest(mode, options = {}) {
    state.mode = mode;
    state.isExamMode = (mode === 'exam');
    state.isPracticeMode = (mode === 'practice');
    state.selectedChapterId = options.chapterId || null;
    state.userAnswers = {};
    state.userChecked = {};
    state.currentIndex = 0;
    state.testStartTime = Date.now();

    let pool = [];

    if (mode === 'chapter' && state.selectedChapterId) {
      pool = state.allQuestions.filter(q => q.sectionId === state.selectedChapterId);
    } else if (mode === 'retryWrong' && options.wrongQuestions && options.wrongQuestions.length) {
      pool = options.wrongQuestions;
    } else {
      pool = [...state.allQuestions];
    }

    // Savollarni aralashtiramiz
    pool = shuffleArray(pool);

    // Hajmni belgilaymiz
    let count = pool.length;
    let timeMinutes = 0;

    if (mode === 'quick10') {
      count = Math.min(10, pool.length);
      timeMinutes = 10;
    } else if (mode === 'standard') {
      count = Math.min(20, pool.length);
      timeMinutes = 20;
    } else if (mode === 'deep30') {
      count = Math.min(30, pool.length);
      timeMinutes = 30;
    } else if (mode === 'large50') {
      count = Math.min(50, pool.length);
      timeMinutes = 45;
    } else if (mode === 'chapter') {
      count = pool.length;
      timeMinutes = count * 1.2;
    } else if (mode === 'full') {
      count = pool.length;
      timeMinutes = count * 1;
    } else if (mode === 'exam') {
      count = Math.min(25, pool.length);
      timeMinutes = 25; // Imtihon uchun 25 daqiqa
    } else if (mode === 'practice') {
      count = Math.min(20, pool.length);
      timeMinutes = 0; // Vaqt chegarasisiz
    } else if (mode === 'retryWrong') {
      count = pool.length;
      timeMinutes = count * 1.5;
    }

    const selectedPool = pool.slice(0, count);
    state.currentTestQuestions = selectedPool.map(q => prepareQuestionItem(q));

    // Taymerni sozlash
    clearInterval(state.timerInterval);
    if (state.isExamMode && timeMinutes > 0) {
      state.timeLimitSeconds = Math.round(timeMinutes * 60);
      state.timeRemainingSeconds = state.timeLimitSeconds;
      els.testTimerWrapper.style.display = 'flex';
      updateTimerDisplay();
      startTimerCountdown();
    } else {
      state.timeLimitSeconds = 0;
      els.testTimerWrapper.style.display = 'none';
    }

    // Rejim nomini ko'rsatish
    updateModeTitleBadge();

    // Palitrani yaratish
    renderQuestionPalette();

    // Birinchi savolni ochish
    renderQuestion(0);

    // Test ekraniga o'tish
    showScreen(els.screenTest);
  }

  function updateModeTitleBadge() {
    let title = 'Standart Test';
    if (state.mode === 'quick10') title = '⚡ Tezkor Test (10 ta savol)';
    else if (state.mode === 'standard') title = '📘 Standart Test (20 ta savol)';
    else if (state.mode === 'deep30') title = '📚 Kengaytirilgan Test (30 ta savol)';
    else if (state.mode === 'large50') title = '🏆 Katta Sinov (50 ta savol)';
    else if (state.mode === 'chapter') {
      const ch = window.HistoryApp.SECTIONS.find(s => s.id === state.selectedChapterId);
      title = ch ? `📖 ${ch.shortName}` : 'Bob bo\'yicha mashq';
    } else if (state.mode === 'full') title = '🌐 To\'liq darslik amaliyoti';
    else if (state.mode === 'exam') title = '🎓 Rasmiy Imtihon Rejimi';
    else if (state.mode === 'practice') title = '💡 Mashg\'ulot Rejimi (Izohlar bilan)';
    else if (state.mode === 'retryWrong') title = '🔄 Xatolar ustida ishlash';

    els.testModeName.textContent = title;
  }

  // ==========================================
  // TAYMER BOSHQARUVI
  // ==========================================
  function startTimerCountdown() {
    state.timerInterval = setInterval(() => {
      state.timeRemainingSeconds--;
      updateTimerDisplay();

      if (state.timeRemainingSeconds <= 60) {
        els.testTimerWrapper.classList.add('danger');
      } else {
        els.testTimerWrapper.classList.remove('danger');
      }

      if (state.timeRemainingSeconds <= 0) {
        clearInterval(state.timerInterval);
        playWrongSound();
        alert('Vaqt tugadi! Imtihon natijalari hisoblanmoqda.');
        finishTest();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const min = Math.floor(state.timeRemainingSeconds / 60);
    const sec = state.timeRemainingSeconds % 60;
    els.testTimerText.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  }

  // ==========================================
  // SAVOLNI RENDERING QILISH
  // ==========================================
  function renderQuestion(index) {
    if (index < 0 || index >= state.currentTestQuestions.length) return;
    state.currentIndex = index;

    const q = state.currentTestQuestions[index];
    const total = state.currentTestQuestions.length;

    // Progress bar va raqamlar
    els.testProgressText.innerHTML = `Savol: <strong>${index + 1}</strong> / ${total}`;
    const percent = Math.round(((index + 1) / total) * 100);
    els.testPercentText.textContent = `${percent}%`;
    els.testProgressBar.style.width = `${percent}%`;

    // Bo'lim va mavzu teglari
    els.questionSectionTag.textContent = q.sectionName || "Darslik bo'limi";
    els.questionTopicTag.textContent = `Mavzu: ${q.topic || "Qadimgi dunyo"}`;
    els.questionText.textContent = q.question;

    // Variantlarni tozalash va chizish
    els.optionsList.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    const currentSelected = state.userAnswers[q.id];
    const isChecked = state.userChecked[q.id];

    q.shuffledOptions.forEach((optText, optIdx) => {
      const optEl = document.createElement('div');
      optEl.className = 'option-item';
      optEl.dataset.index = optIdx;

      if (currentSelected === optIdx) {
        optEl.classList.add('selected');
      }

      // Agar mashg'ulot rejimida tekshirilgan bo'lsa
      if (isChecked) {
        if (optIdx === q.correctShuffledIndex) {
          optEl.classList.add('is-correct');
        } else if (currentSelected === optIdx) {
          optEl.classList.add('is-wrong');
        }
      }

      optEl.innerHTML = `
        <div class="option-letter">${letters[optIdx]}</div>
        <div class="option-text">${optText}</div>
      `;

      optEl.addEventListener('click', () => {
        selectOption(optIdx);
      });

      els.optionsList.appendChild(optEl);
    });

    // Tushuntirish qutisi holati
    if (state.isPracticeMode && isChecked) {
      showExplanation(q);
    } else {
      els.explanationBox.classList.remove('visible');
    }

    // Tugmalar holati
    els.btnPrevQuestion.disabled = (index === 0);
    els.btnPrevQuestion.style.opacity = (index === 0) ? '0.4' : '1';

    const isLast = (index === total - 1);
    if (isLast) {
      els.btnNextQuestion.style.display = 'none';
      els.btnFinishTest.style.display = 'inline-flex';
    } else {
      els.btnNextQuestion.style.display = 'inline-flex';
      els.btnFinishTest.style.display = 'none';
    }

    // "Javobni tekshirish" tugmasi mashg'ulot rejimida faol
    if (state.isPracticeMode) {
      els.btnCheckAnswer.style.display = 'inline-flex';
      els.btnCheckAnswer.disabled = (currentSelected === undefined || isChecked);
      els.btnCheckAnswer.style.opacity = (currentSelected === undefined || isChecked) ? '0.5' : '1';
    } else {
      els.btnCheckAnswer.style.display = 'none';
    }

    // Palitradagi joriy chipni yangilash
    highlightCurrentPaletteItem(index);
  }

  function selectOption(optIndex) {
    const q = state.currentTestQuestions[state.currentIndex];
    
    // Agar mashg'ulot rejimida allaqachon tekshirilgan bo'lsa, o'zgartirish taqiqlanadi
    if (state.isPracticeMode && state.userChecked[q.id]) {
      return;
    }

    state.userAnswers[q.id] = optIndex;
    playSelectSound();

    // DOM yangilash
    const allOptElements = els.optionsList.querySelectorAll('.option-item');
    allOptElements.forEach(el => {
      const idx = parseInt(el.dataset.index, 10);
      if (idx === optIndex) {
        el.classList.add('selected');
      } else {
        el.classList.remove('selected');
      }
    });

    // Mashg'ulot rejimida tugmani faollashtirish
    if (state.isPracticeMode) {
      els.btnCheckAnswer.disabled = false;
      els.btnCheckAnswer.style.opacity = '1';
    }

    // Palitrani belgilangan deb yangilash
    updatePaletteItemAnswered(state.currentIndex);
  }

  function checkCurrentAnswerInPractice() {
    const q = state.currentTestQuestions[state.currentIndex];
    const selected = state.userAnswers[q.id];
    if (selected === undefined) return;

    state.userChecked[q.id] = true;
    const isCorrect = (selected === q.correctShuffledIndex);

    if (isCorrect) {
      playCorrectSound();
    } else {
      playWrongSound();
    }

    // Variantlarni bo'yash
    const allOptElements = els.optionsList.querySelectorAll('.option-item');
    allOptElements.forEach(el => {
      const idx = parseInt(el.dataset.index, 10);
      if (idx === q.correctShuffledIndex) {
        el.classList.add('is-correct');
      } else if (idx === selected) {
        el.classList.add('is-wrong');
      }
    });

    els.btnCheckAnswer.disabled = true;
    els.btnCheckAnswer.style.opacity = '0.5';

    showExplanation(q);
  }

  function showExplanation(q) {
    els.explanationContent.textContent = q.explanation || "Darslikda ushbu mavzu bo'yicha batafsil ma'lumot keltirilgan.";
    els.explanationBox.classList.add('visible');
  }

  // ==========================================
  // SAVOLLAR PALITRASI (QUESTION NAVIGATOR)
  // ==========================================
  function renderQuestionPalette() {
    els.paletteGrid.innerHTML = '';
    state.currentTestQuestions.forEach((q, idx) => {
      const chip = document.createElement('button');
      chip.className = 'palette-btn';
      chip.textContent = idx + 1;
      chip.dataset.index = idx;
      chip.id = `palette-chip-${idx}`;

      chip.addEventListener('click', () => {
        renderQuestion(idx);
      });

      els.paletteGrid.appendChild(chip);
    });
  }

  function highlightCurrentPaletteItem(index) {
    const allChips = els.paletteGrid.querySelectorAll('.palette-btn');
    allChips.forEach(chip => {
      const idx = parseInt(chip.dataset.index, 10);
      chip.classList.toggle('current', idx === index);
    });
  }

  function updatePaletteItemAnswered(index) {
    const chip = document.getElementById(`palette-chip-${index}`);
    if (chip) {
      chip.classList.add('answered');
    }
  }

  // ==========================================
  // TESTNI YAKUNLASH VA NATIJALAR HISOBI
  // ==========================================
  function finishTest() {
    clearInterval(state.timerInterval);
    state.testDurationSeconds = Math.max(1, Math.round((Date.now() - state.testStartTime) / 1000));

    let correctCount = 0;
    let wrongCount = 0;
    const reviewData = [];

    state.currentTestQuestions.forEach((q, idx) => {
      const userSelected = state.userAnswers[q.id];
      const isCorrect = (userSelected === q.correctShuffledIndex);

      if (isCorrect) {
        correctCount++;
      } else {
        wrongCount++;
      }

      reviewData.push({
        index: idx + 1,
        question: q.question,
        topic: q.topic,
        sectionName: q.sectionName,
        userSelectedText: userSelected !== undefined ? q.shuffledOptions[userSelected] : "Belgilanmagan",
        correctText: q.shuffledOptions[q.correctShuffledIndex],
        isCorrect: isCorrect,
        explanation: q.explanation,
        rawQuestion: q
      });
    });

    const total = state.currentTestQuestions.length;
    const percent = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    // Statistika yangilash
    state.stats.totalTests++;
    state.stats.totalCorrect += correctCount;
    state.stats.totalQuestionsAnswered += total;

    if (correctCount > state.stats.bestScore) {
      state.stats.bestScore = correctCount;
      state.stats.bestPercent = percent;
    }

    saveStoredStats();

    // Natijalarni ekranga chizish
    displayResultsScreen(correctCount, wrongCount, total, percent, reviewData);
  }

  function displayResultsScreen(correct, wrong, total, percent, reviewData) {
    // Baho aniqlash (5, 4, 3, 2)
    let trophy = '🥉';
    let gradeTitle = "Qoniqarli (3 baho)";
    let comment = "Yaxshi boshlanish! Darslik mavzularini yana bir bor takrorlab chiqsangiz, natijangiz yanada yaxshilanadi.";

    if (percent >= 86) {
      trophy = '🏆';
      gradeTitle = "A'lo! (5 baho)";
      comment = "Ofarin! Siz 6-sinf Qadimgi dunyo tarixi darsligini a'lo darajada o'zlashtirgansiz!";
      playFanfare();
      triggerConfetti();
    } else if (percent >= 70) {
      trophy = '🥈';
      gradeTitle = "Yaxshi (4 baho)";
      comment = "Juda yaxshi natija! Bir nechta qiyin savollarda biroz xatolik bo'ldi, o'rganib chiqing.";
      playCorrectSound();
    } else if (percent < 50) {
      trophy = '📖';
      gradeTitle = "Qayta o'qish tavsiya etiladi (2 baho)";
      comment = "Darslik bo'limlarini chuqurroq o'qib chiqish tavsiya etiladi. Xatolar ustida ishlash bo'limidan foydalaning!";
      playWrongSound();
    } else {
      playCorrectSound();
    }

    els.resultTrophy.textContent = trophy;
    els.resultGradeTitle.textContent = gradeTitle;
    els.resultGradeComment.textContent = comment;
    els.resultPercent.textContent = `${percent}%`;
    els.resultScoreText.textContent = `${correct} / ${total} to'g'ri`;
    els.resultCorrectCount.textContent = correct;
    els.resultWrongCount.textContent = wrong;

    // Vaqtni hisoblash
    const minutes = Math.floor(state.testDurationSeconds / 60);
    const seconds = state.testDurationSeconds % 60;
    els.resultTimeSpent.textContent = `${minutes} daq ${seconds} son`;

    // Faqat xatolar ustida ishlash tugmasi
    const wrongQuestionsOnly = reviewData.filter(item => !item.isCorrect).map(item => item.rawQuestion);
    if (wrongQuestionsOnly.length > 0) {
      els.btnRetryMistakes.style.display = 'inline-flex';
      els.btnRetryMistakes.onclick = () => {
        startTest('retryWrong', { wrongQuestions: wrongQuestionsOnly });
      };
    } else {
      els.btnRetryMistakes.style.display = 'none';
    }

    // Tahlil ro'yxatini render qilish
    renderReviewSection(reviewData);

    showScreen(els.screenResults);
  }

  // ==========================================
  // TAHLIL (REVIEW) VA XATOLAR USTIDA ISHLASH
  // ==========================================
  let currentReviewData = [];

  function renderReviewSection(reviewData) {
    currentReviewData = reviewData;
    filterAndDisplayReview('all');
  }

  function filterAndDisplayReview(filterType) {
    els.reviewList.innerHTML = '';

    const filtered = currentReviewData.filter(item => {
      if (filterType === 'wrong') return !item.isCorrect;
      if (filterType === 'correct') return item.isCorrect;
      return true;
    });

    if (filtered.length === 0) {
      els.reviewList.innerHTML = `
        <div style="text-align: center; padding: 24px; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-md);">
          Tanlangan parametr bo'yicha savollar topilmadi.
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = `review-item ${item.isCorrect ? 'correct' : 'wrong'}`;

      card.innerHTML = `
        <div class="review-item-header">
          <span class="review-q-num">Savol #${item.index} • ${item.topic || item.sectionName}</span>
          <span class="review-status-badge ${item.isCorrect ? 'correct' : 'wrong'}">
            ${item.isCorrect ? '✅ To\'g\'ri' : '❌ Noto\'g\'ri'}
          </span>
        </div>
        <div class="review-question-text">${item.question}</div>
        <div class="review-answers-box">
          <div class="review-ans-card user">
            <strong>Sizning javobingiz:</strong> ${item.userSelectedText}
          </div>
          <div class="review-ans-card actual-correct">
            <strong>To'g'ri javob:</strong> ${item.correctText}
          </div>
        </div>
        <div class="review-explanation">
          <strong>📖 Darslikdan tushuntirish:</strong> ${item.explanation}
        </div>
      `;

      els.reviewList.appendChild(card);
    });
  }

  // ==========================================
  // CONFETTI ANIMATSIYASI (HIGH SCORE CELEBRATION)
  // ==========================================
  function triggerConfetti() {
    const canvas = els.confettiCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#d4af37', '#ffd700', '#f7df79', '#38bdf8', '#10b981', '#ffffff'];

    for (let i = 0; i < 90; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 4 + 2,
        angle: Math.random() * 360,
        spin: Math.random() * 6 - 3
      });
    }

    let frame = 0;
    function renderConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.y += p.speed;
        p.angle += p.spin;
        ctx.fillStyle = p.color;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.angle * Math.PI) / 180);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      frame++;
      if (frame < 180) {
        requestAnimationFrame(renderConfetti);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    renderConfetti();
  }

  // ==========================================
  // DASHBOARD BOB BO'LIMLARINI CHIZISH
  // ==========================================
  function renderDashboardChapters() {
    if (!els.chaptersList) return;
    els.chaptersList.innerHTML = '';

    const sections = window.HistoryApp.SECTIONS || [];
    sections.forEach(sec => {
      const count = state.allQuestions.filter(q => q.sectionId === sec.id).length;
      const card = document.createElement('div');
      card.className = 'chapter-card';
      card.innerHTML = `
        <div class="chapter-badge">${sec.icon}</div>
        <div class="chapter-info">
          <h4>${sec.name}</h4>
          <p>${sec.description}</p>
          <span class="chapter-count">📚 Savollar soni: ${count} ta</span>
        </div>
      `;

      card.addEventListener('click', () => {
        startTest('chapter', { chapterId: sec.id });
      });

      els.chaptersList.appendChild(card);
    });
  }

  // ==========================================
  // TUGMALAR VA HODISALAR (EVENT LISTENERS)
  // ==========================================
  function setupEventListeners() {
    // Brand home button
    if (els.brandHomeBtn) {
      els.brandHomeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showScreen(els.screenDashboard);
      });
    }

    // Header tovush tugmasi
    if (els.btnSoundToggle) {
      els.btnSoundToggle.addEventListener('click', () => {
        state.soundEnabled = !state.soundEnabled;
        updateHeaderStats();
        updateSettingsUI();
        saveStoredStats();
        playSelectSound();
      });
    }

    // Modallar boshqaruvi
    if (els.btnTextbookInfo) {
      els.btnTextbookInfo.addEventListener('click', () => {
        els.textbookModal.classList.add('open');
      });
    }

    if (els.btnSettings) {
      els.btnSettings.addEventListener('click', () => {
        els.settingsModal.classList.add('open');
      });
    }

    document.querySelectorAll('.modal-close-btn, .btn-modal-close').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
      });
    });

    // Sozlamalar modali ichidagi togglelar
    if (els.settingSoundToggle) {
      els.settingSoundToggle.addEventListener('change', (e) => {
        state.soundEnabled = e.target.checked;
        updateHeaderStats();
        saveStoredStats();
      });
    }

    if (els.settingShuffleToggle) {
      els.settingShuffleToggle.addEventListener('change', (e) => {
        state.shuffleOptionsEnabled = e.target.checked;
        saveStoredStats();
      });
    }

    // Dashboard rejim kartalari
    document.querySelectorAll('.mode-card[data-mode]').forEach(card => {
      card.addEventListener('click', () => {
        const mode = card.dataset.mode;
        startTest(mode);
      });
    });

    // Palitrani ochish/yopish toggle
    if (els.paletteToggleBar) {
      els.paletteToggleBar.addEventListener('click', () => {
        els.paletteContainer.classList.toggle('open');
      });
    }

    // Savollar o'rtasida navigatsiya
    if (els.btnPrevQuestion) {
      els.btnPrevQuestion.addEventListener('click', () => {
        if (state.currentIndex > 0) {
          renderQuestion(state.currentIndex - 1);
        }
      });
    }

    if (els.btnNextQuestion) {
      els.btnNextQuestion.addEventListener('click', () => {
        if (state.currentIndex < state.currentTestQuestions.length - 1) {
          renderQuestion(state.currentIndex + 1);
        }
      });
    }

    // Javobni tekshirish (Mashg'ulot rejimi)
    if (els.btnCheckAnswer) {
      els.btnCheckAnswer.addEventListener('click', () => {
        checkCurrentAnswerInPractice();
      });
    }

    // Testni yakunlash (Finish)
    if (els.btnFinishTest) {
      els.btnFinishTest.addEventListener('click', () => {
        const answeredCount = Object.keys(state.userAnswers).length;
        const total = state.currentTestQuestions.length;
        if (answeredCount < total) {
          els.confirmFinishModal.classList.add('open');
        } else {
          finishTest();
        }
      });
    }

    if (els.btnConfirmFinishYes) {
      els.btnConfirmFinishYes.addEventListener('click', () => {
        els.confirmFinishModal.classList.remove('open');
        finishTest();
      });
    }

    // Testdan chiqish
    if (els.btnQuitTest) {
      els.btnQuitTest.addEventListener('click', () => {
        if (confirm('Rostdan ham testni to\'xtatib, bosh sahifaga qaytmoqchimisiz?')) {
          clearInterval(state.timerInterval);
          showScreen(els.screenDashboard);
        }
      });
    }

    // Natijalar ekrani tugmalari
    if (els.btnRestartTest) {
      els.btnRestartTest.addEventListener('click', () => {
        startTest(state.mode, { chapterId: state.selectedChapterId });
      });
    }

    if (els.btnHomeFromResults) {
      els.btnHomeFromResults.addEventListener('click', () => {
        showScreen(els.screenDashboard);
      });
    }

    // Tahlil filtrlari (All, Correct, Wrong)
    els.filterReviewBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        els.filterReviewBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterAndDisplayReview(btn.dataset.filter);
      });
    });

    // Klaviatura tugmalari orqali boshqarish (Keyboard Navigation)
    window.addEventListener('keydown', (e) => {
      if (!els.screenTest.classList.contains('active')) return;

      // Agar modal ochiq bo'lsa klaviaturani e'tiborsiz qoldirish
      if (document.querySelector('.modal-overlay.open')) return;

      const key = e.key.toUpperCase();
      if (key === 'A' || key === '1') selectOption(0);
      else if (key === 'B' || key === '2') selectOption(1);
      else if (key === 'C' || key === '3') selectOption(2);
      else if (key === 'D' || key === '4') selectOption(3);
      else if (e.key === 'ArrowRight') {
        if (state.currentIndex < state.currentTestQuestions.length - 1) {
          renderQuestion(state.currentIndex + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (state.currentIndex > 0) {
          renderQuestion(state.currentIndex - 1);
        }
      } else if (e.key === 'Enter') {
        if (state.isPracticeMode && !state.userChecked[state.currentTestQuestions[state.currentIndex]?.id]) {
          checkCurrentAnswerInPractice();
        }
      }
    });
  }

  // ==========================================
  // ILOVANI ISHGA TUSHIRISH (INIT)
  // ==========================================
  function init() {
    state.allQuestions = window.HistoryApp.QUESTIONS || [];
    loadStoredStats();
    renderDashboardChapters();
    setupEventListeners();
    showScreen(els.screenDashboard);
    console.log(`6-sinf Tarix testi yuklandi: Jami ${state.allQuestions.length} ta darslik savoli mavjud.`);
  }

  // DOM tayyor bo'lganda ishga tushirish
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
