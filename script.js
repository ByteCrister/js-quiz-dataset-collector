// ==================== GLOBAL VARIABLES ====================
const userQuestions = questions.slice(0, 10); // use first 10 questions
let currentIndex = 0;
let userAnswers = [];               // { questionId, selectedAnswer, timeSpent }
let questionStartTime = null;
let timerInterval = null;
let warningShown = false;

// DOM elements
const openingModal = document.getElementById('openingModal');
const quizContainer = document.getElementById('quizContainer');
const thankYouModal = document.getElementById('thankYouModal');
const startBtn = document.getElementById('startQuizBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const questionText = document.getElementById('questionText');
const optionsArea = document.getElementById('optionsArea');
const questionCounter = document.getElementById('questionCounter');
const warningMsg = document.getElementById('warningMessage');
const emailInput = document.getElementById('email');
const yearsExpInput = document.getElementById('yearsExp');
const selfRatingSelect = document.getElementById('selfRating');
const submissionStatus = document.getElementById('submissionStatus');

// ==================== INITIALISATION ====================
// Pre‑fill userAnswers array with empty entries for each question
userQuestions.forEach((q, idx) => {
  userAnswers[idx] = {
    questionId: q.id,
    selectedAnswer: null,
    timeSpent: 0
  };
});

// ==================== CHEATING PREVENTION ====================
// Disable right‑click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Disable common dev tools shortcuts and copy/paste
document.addEventListener('keydown', (e) => {
  // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, F12, Ctrl+C, Ctrl+V, Ctrl+X
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
    (e.ctrlKey && e.key === 'U') ||
    (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'x'))
  ) {
    e.preventDefault();
    showWarning('Developer tools and copy/paste are disabled.');
  }
});

// Detect window/tab losing focus
window.addEventListener('blur', () => {
  showWarning('Do not switch tabs or minimise the window!');
  // Optionally log this event
});

// Detect visibility change (tab switch)
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    showWarning('Quiz tab is hidden! Please return.');
  }
});

function showWarning(message) {
  if (!warningShown) {
    warningMsg.textContent = message;
    warningShown = true;
    setTimeout(() => {
      warningMsg.textContent = '';
      warningShown = false;
    }, 3000);
  }
}

// ==================== QUIZ TIMING ====================
function startTimerForCurrentQuestion() {
  if (timerInterval) clearInterval(timerInterval);
  questionStartTime = Date.now();
  // Optional: update a live timer display if desired
}

function stopTimerForCurrentQuestion() {
  if (questionStartTime) {
    const elapsed = Math.round((Date.now() - questionStartTime) / 1000); // seconds
    userAnswers[currentIndex].timeSpent += elapsed;
    questionStartTime = null;
  }
}

// ==================== RENDER QUESTION ====================
function renderQuestion() {
  const q = userQuestions[currentIndex];
  questionText.textContent = q.question;
  questionCounter.textContent = `Question ${currentIndex + 1} of ${userQuestions.length}`;

  // Build options as buttons
  let html = '';
  q.options.forEach((opt, idx) => {
    const isSelected = (userAnswers[currentIndex].selectedAnswer === opt);
    html += `<button class="option-btn ${isSelected ? 'selected' : ''}" data-option="${opt}">${opt}</button>`;
  });
  optionsArea.innerHTML = html;

  // Attach click listeners to option buttons
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove selected class from all options
      document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      // Mark this button as selected
      btn.classList.add('selected');
      // Update userAnswers
      userAnswers[currentIndex].selectedAnswer = btn.dataset.option;
    });
  });

  // Enable/disable previous button
  prevBtn.disabled = (currentIndex === 0);
  // Change next button text on last question
  nextBtn.textContent = (currentIndex === userQuestions.length - 1) ? 'Submit' : 'Next';

  // Start timing for this question
  startTimerForCurrentQuestion();
}

// ==================== NAVIGATION ====================
function goToNext() {
  // Stop timer for current question
  stopTimerForCurrentQuestion();

  if (currentIndex === userQuestions.length - 1) {
    // Last question -> submit quiz
    finishQuiz();
  } else {
    currentIndex++;
    renderQuestion();
  }
}

function goToPrev() {
  stopTimerForCurrentQuestion();
  currentIndex--;
  renderQuestion();
}

// ==================== FINISH QUIZ ====================
async function finishQuiz() {
  // Hide quiz, show thank you modal
  quizContainer.classList.add('hidden');
  thankYouModal.classList.remove('hidden');
  submissionStatus.textContent = 'Submitting your responses...';

  // Prepare payload for Google Sheets
  const payload = {
    email: emailInput.value,
    yearsExperience: yearsExpInput.value,
    selfRating: selfRatingSelect.value,
    answers: userAnswers,
    totalScore: calculateScore()
  };

  try {
    // Replace with your actual Google Apps Script URL
    const response = await fetch('https://script.google.com/macros/s/AKfycbwGS2uVFvEnzer9x4kSXxBzHb-tANvebHEVGiK3W0tE6OZopYDg9slsDCrWp6zhtI36Mg/exec', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    });
    const result = await response.json();
    submissionStatus.textContent = 'Submission successful! Thank you.';
  } catch (error) {
    console.error('Submission error:', error);
    submissionStatus.textContent = 'Submission failed. Please check your connection.';
  }
}

function calculateScore() {
  let score = 0;
  userAnswers.forEach((ans, idx) => {
    const correct = userQuestions[idx].answer;
    if (ans.selectedAnswer === correct) score++;
  });
  return score;
}

// ==================== START QUIZ ====================
startBtn.addEventListener('click', () => {
  // Validate form
  if (!emailInput.checkValidity() || !yearsExpInput.checkValidity() || !selfRatingSelect.checkValidity()) {
    alert('Please fill in all fields correctly.');
    return;
  }
  // Hide opening modal, show quiz
  openingModal.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  // Initialise first question
  currentIndex = 0;
  renderQuestion();
});

// Event listeners for navigation buttons
prevBtn.addEventListener('click', goToPrev);
nextBtn.addEventListener('click', goToNext);

// ==================== CLEAN UP ====================
// Stop timer if window unloads (just in case)
window.addEventListener('beforeunload', () => {
  if (timerInterval) clearInterval(timerInterval);
});