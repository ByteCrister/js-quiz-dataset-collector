// ==================== GLOBAL VARIABLES ====================
let userQuestions = [];             // will hold 10 randomly selected questions
let currentIndex = 0;
let userAnswers = [];               // { questionId, selectedAnswer, timeSpent }
let questionStartTime = null;
let timerInterval = null;
let warningShown = false;
let quizStarted = false;

// JavaScript was first introduced in 1995; nobody can have more experience than that
const JS_START_YEAR = 1995;
const CURRENT_YEAR = new Date().getFullYear();
const MAX_JS_EXPERIENCE = CURRENT_YEAR - JS_START_YEAR;

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
function selectRandomQuestions(count) {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function initialiseQuizState() {
    userQuestions = selectRandomQuestions(10);
    userAnswers = userQuestions.map(q => ({
        questionId: q.id,
        selectedAnswer: null,
        timeSpent: 0
    }));
    currentIndex = 0;
}

// ==================== CHEATING PREVENTION ====================
// Disable right‑click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    handleSuspiciousBehavior('Right‑click detected');
});

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
        handleSuspiciousBehavior('Disallowed keyboard shortcut');
        return;
    }

    // When quiz is active and an answer is selected, allow Enter to progress
    if (
        quizStarted &&
        !quizContainer.classList.contains('hidden') &&
        e.key === 'Enter' &&
        userAnswers[currentIndex] &&
        userAnswers[currentIndex].selectedAnswer
    ) {
        e.preventDefault();
        goToNext();
    }
});

// Detect window/tab losing focus
window.addEventListener('blur', () => {
    showWarning('Do not switch tabs or minimise the window!');
    handleSuspiciousBehavior('Window lost focus');
});

// Detect visibility change (tab switch)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        showWarning('Quiz tab is hidden! Please return.');
        handleSuspiciousBehavior('Tab hidden or switched');
    }
});

function handleSuspiciousBehavior(reason) {
    // Only react if quiz is currently in progress
    if (!quizStarted) return;

    // Stop any timing
    stopTimerForCurrentQuestion();

    // Reset view back to opening screen
    quizContainer.classList.add('hidden');
    thankYouModal.classList.add('hidden');
    openingModal.classList.remove('hidden');

    quizStarted = false;

    alert('Suspicious behaviour detected ("' + reason + '"). The quiz has been reset and new questions will be loaded when you start again.');
}

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
            // Once an answer is selected, allow moving forward
            nextBtn.disabled = false;
        });
    });

    // Enable/disable previous button
    prevBtn.disabled = (currentIndex === 0);
    // Change next button text on last question
    nextBtn.textContent = (currentIndex === userQuestions.length - 1) ? 'Submit' : 'Next';
    // Disable Next/Submit if current question has not been answered yet
    nextBtn.disabled = (userAnswers[currentIndex].selectedAnswer === null);

    // Start timing for this question
    startTimerForCurrentQuestion();
}

// ==================== NAVIGATION ====================
function goToNext() {
    // Do not allow moving forward without answering current question
    if (!userAnswers[currentIndex].selectedAnswer) {
        showWarning('Please select an answer before continuing.');
        return;
    }
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
    // Send question difficulty and time spent instead of selected answers
    const answerPayload = userAnswers.map((ans, idx) => ({
        questionId: ans.questionId,
        difficulty: userQuestions[idx].difficulty,
        timeSpent: ans.timeSpent
    }));

    const payload = {
        email: emailInput.value,
        yearsExperience: yearsExpInput.value,
        selfRating: selfRatingSelect.value,
        answers: answerPayload,
        totalScore: calculateScore()
    };

    try {
        // Replace with your actual Google Apps Script URL
        const response = await fetch(
            'https://script.google.com/macros/s/AKfycbynOOccnnhWXOfg2ubIv_n1KCP5ZhJb0LO5orKGlF68EFwC1PABYSIJdFP6Yi64o7xryw/exec',
            {
                method: 'POST',
                body: JSON.stringify(payload)
            }
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const result = await response.json();

        if (result.status === "success") {
            submissionStatus.textContent = 'Submission successful! Thank you.';
        } else {
            // Show alert with server message
            alert(result.message || "Submission failed. Please check your connection.");
            submissionStatus.textContent = 'Submission failed.';
        }

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
    // Validate form fields in detail
    const email = emailInput.value.trim();
    const years = Number(yearsExpInput.value);

    // Basic email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
    }

    if (!Number.isFinite(years) || years < 0 || years > MAX_JS_EXPERIENCE) {
        alert(`Please enter a valid number of years of JavaScript experience (0–${MAX_JS_EXPERIENCE}).`);
        yearsExpInput.focus();
        return;
    }

    if (!selfRatingSelect.value) {
        alert('Please select your self‑rated skill level.');
        selfRatingSelect.focus();
        return;
    }
    // Prepare a fresh quiz with new random questions
    initialiseQuizState();
    quizStarted = true;
    // Hide opening modal, show quiz
    openingModal.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    // Initialise first question
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