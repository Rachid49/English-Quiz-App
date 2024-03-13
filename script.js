let navLinks = document.querySelector('.nav-links');
let burgerMenu = document.querySelector('.burger-menu');
let spans = burgerMenu.querySelectorAll('span');
document.addEventListener('click', (e) => {
    if (e.target === burgerMenu || Array.from(spans).includes(e.target)) {
        navLinks.classList.toggle('active');
        spans.forEach(span => {
            span.classList.toggle('span-active')
        });
    }
    else {
        navLinks.classList.remove('active');
        spans.forEach(span => {
            span.classList.remove('span-active')
        });
    }
})

document.querySelectorAll('.soon').forEach(btn => {
    btn.onclick = () => {
        message.textContent = 'COMMING SOON!!';
    }
});

let quizData;
let lengthDisplay = document.querySelector('.length');
// Define a function to import and process the quiz data
function importQuizData(fileName) {
    // Import the quiz data file based on the fileName parameter
    import(`./${fileName}.js`).then((module) => {
        // Access the exported data from the module and store it in the global variable
        quizData = module.default;
        // Reset currentQuestionIndex to 0
        currentQuestionIndex = 0;
        // You can now use the quizData variable anywhere in your code
        startBtn.style.display = 'block';

        // Access the length of quizData and update the lengthDisplay
        if (lengthDisplay) {
            lengthDisplay.textContent = quizData.length;
        } else {
            console.error('Length display element not found.');
        }
    }).catch((error) => {
        console.error(`Error importing quiz data from ${fileName}.js:`, error);
    });
}

let alertMsj = document.querySelector('.alert');
let messageAlert = alertMsj.querySelector('p span')
let Ok = document.querySelector('.ok');
let cancel = document.querySelector('.cancel');

// Add event listeners to trigger importQuizData function when links are clicked
document.querySelector('#grammar').addEventListener('click', () => {
    clearInterval(timer);
    messageAlert.textContent = 'Grammar';
    alertMsj.style.display = 'flex';
    if (countDisplay.textContent < start) {
        document.querySelector('.alertText').textContent = 'Are you sure you want to leave this quiz?';
        cancel.textContent = 'Continue';
    }
    Ok.onclick = function () {
        startBtn.disabled = false;
        stopQuiz();
        countDisplay.textContent = start;
        message.textContent = '';
        restartBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        importQuizData('grammar-quizeData');
        alertMsj.style.display = 'none';
        questionContainer.innerHTML = 'Welcome to the Grammar Quiz <span>Click Start to start the Quiz.</span>';
    };
    cancel.onclick = function () {
        if (cancel.textContent === 'Continue') {
            startTime();
            alertMsj.style.display = 'none';
        } else {
            alertMsj.style.display = 'none';
        }
    };
});

document.querySelector('#spoken').addEventListener('click', () => {
    clearInterval(timer);
    messageAlert.textContent = 'Spoken';
    alertMsj.style.display = 'flex';

    if (countDisplay.textContent < start) {
        document.querySelector('.alertText').innerHTML = 'Are you sure you want to leave this quiz?';
        cancel.textContent = 'Continue';
    }


    Ok.onclick = function () {
        startBtn.disabled = false;
        stopQuiz();
        countDisplay.textContent = start;
        message.textContent = '';
        restartBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        importQuizData('spoken-quizeData');
        alertMsj.style.display = 'none';
        questionContainer.innerHTML = 'Welcome to the Spoken Quiz <span>Click Start to start the Quiz.</span>';
    };
    cancel.onclick = function () {
        if (cancel.textContent === 'Continue') {
            startTime();
            alertMsj.style.display = 'none';
        } else {
            alertMsj.style.display = 'none';
        }
    };
});



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
    };
    showCorrectAnswer();
};
function checkClick() {
    answerButtons.querySelectorAll('button').forEach(btn => {
        btn.setAttribute('clicked', 'yes');
    });
};


function showCorrectAnswer() {
    const correctAnswer = quizData[currentQuestionIndex].answers.find(answer => answer.correct);
    answerButtons.querySelectorAll('button').forEach(btn => {
        if (btn.textContent === correctAnswer.text) {
            btn.style.backgroundColor = '#00cf00';
        }
    });
}
let restartBtn = document.querySelector('.restart-btn');
let message = document.querySelector('.message');
restartBtn.style.display = 'none';
function resetQuiz() {
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
        startBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
}
let start = "20";
let timer;
let countDisplay = document.querySelector('.count');

function startTime() {
    document.querySelector('.statistiques').style.opacity = "1";
    document.getElementById('main-container').classList.add('mainPhone');
    questionContainer.style.backgroundColor = 'transparent';
    if (timer) {
        clearInterval(timer);
    }
    // Check if quizData is undefined before accessing its length property
    if (quizData === undefined) {
        // Handle the case where quizData is undefined
        console.error('Quiz data is not loaded yet.');
        return;
    }
    timer = setInterval(() => {

        if (countDisplay.textContent === "0") {
            clearInterval(timer);
            nextQuestion();
            countDisplay.textContent = start;
        } else if (currentQuestionIndex >= quizData.length) {
            clearInterval(timer);
        } else if (answerButtons.querySelector('button').hasAttribute("clicked", "yes")) {
            clearInterval(timer);
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
startBtn.style.display = 'none';
nextBtn.disabled = true;
function startQuiz() {
    nextBtn.disabled = false;
    startBtn.disabled = true;
    startBtn.style.display = 'none';
    nextBtn.style.display = 'block';
    startTime();
    showQuestion();
    restartBtn.style.display = 'none';
    answerButtons.style.display = 'flex';
    document.getElementById('quiz-container').style.justifyContent = 'space-evenly'
};

function stopQuiz() {
    answerButtons.querySelectorAll('button').forEach(btn => {
        btn.textContent = '......';
        btn.style.backgroundColor = '';
    });

}
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', resetQuiz);



const answerButtonsDiv = document.querySelector('button');
answerButtons.style.display = 'none';

