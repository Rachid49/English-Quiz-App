import quizData from './quizeData.js';

let lengthDisplay = document.querySelector('.length').textContent = quizData.length;
let currentQuestionIndex = 0;

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
let score = 0;

function showQuestion() {
    // Clear previous question and answers
    questionContainer.innerText = '';
    answerButtons.innerHTML = '';

    // Display the current question
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => checkAnswer(button, answer));
        answerButtons.appendChild(button);
    });
}

function checkAnswer(button, selectedAnswer) {
    const correctAnswer = quizData[currentQuestionIndex].answers.find(answer => answer.correct);

    if (selectedAnswer === correctAnswer) {
        button.style.backgroundColor = '#00cf00';
        score++;
    } else {
        button.style.backgroundColor = 'red';
    }

    // Disable all buttons after an answer is selected
    answerButtons.querySelectorAll('button').forEach(btn => {
        btn.disabled = true;
    });
    if (selectedAnswer) {
        checkClick();
    }
    showCorrectAnswer();
}
function checkClick() {
    answerButtons.querySelectorAll('button').forEach(btn => {
        btn.setAttribute('clicked', 'yes');
    })
}


function showCorrectAnswer() {
    const correctAnswer = quizData[currentQuestionIndex].answers.find(answer => answer.correct);
    answerButtons.querySelectorAll('button').forEach(btn => {
        if (btn.textContent === correctAnswer.text) {
            btn.style.backgroundColor = '#00cf00';
        }
    });
}
let restartBtn = document.querySelector('.restart-btn');
restartBtn.style.display = 'none';
function resetQuiz() {
    let message = document.querySelector('.message');
    let scoreDisplay = document.querySelector('.score');
    let countDisplay = document.querySelector('.count');
    let lengthDisplay = document.querySelector('.length');

    currentQuestionIndex = 0;
    score = 0;
    message.textContent = '';
    scoreDisplay.textContent = score;
    countDisplay.textContent = "20";
    lengthDisplay.textContent = quizData.length;
    document.getElementById('next-button').disabled = true;
    startQuiz();
    startTime();
}

function nextQuestion() {
    let countDisplay = document.querySelector('.count');
    let message = document.querySelector('.message');
    let scoreDisplay = document.querySelector('.score');
    lengthDisplay = document.querySelector('.length');

    countDisplay.textContent = "20";
    resetColors();
    currentQuestionIndex++;
    lengthDisplay.textContent--;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
        startTime();
    } else {
        message.textContent = 'Quiz Finished. Thank You!';
        answerButtons.querySelectorAll('button').forEach(btn => {
            btn.style.backgroundColor = '#838383';
            btn.disabled = true;
        });
        scoreDisplay.textContent = score;
        restartBtn.style.display = 'block';
        nextBtn.disabled = true;
    }
}
let start = "20";
function startTime() {
    let countDisplay = document.querySelector('.count');

    // Start the countdown timer and store the interval ID in a variable
    let timer = setInterval(() => {
        if (countDisplay.textContent === "0") {
            clearInterval(timer); // Clear the interval
            nextQuestion();
            countDisplay.textContent = start;
        } else if (currentQuestionIndex >= quizData.length) {
            clearInterval(timer); // Clear the interval
        } else if (answerButtons.querySelector('button').hasAttribute("clicked", "yes")) {
            clearInterval(timer); // Clear the interval
        } else {
            countDisplay.textContent--;
        }
    }, 1000);
}


function resetColors() {
    answerButtons.querySelectorAll('button').forEach(btn => {
        btn.style.backgroundColor = '';
        btn.disabled = false;
    });
}

let startBtn = document.querySelector('.start-btn');
let nextBtn = document.getElementById('next-button');

nextBtn.style.display = 'none';
startBtn.disabled = false;
nextBtn.disabled = true;
function startQuiz() {
    nextBtn.disabled = false;
    startBtn.disabled = true;
    nextBtn.style.display = 'block';

    startTime();
    showQuestion();
    restartBtn.style.display = 'none';

}

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', resetQuiz);
