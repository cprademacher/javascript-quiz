var duration = 60; // this is the amount of seconds the countdown will start with.
var timerDisplay = document.getElementById('timer') // this will be where the countdown is displayed in the browser
var questionOneEl = document.getElementById('question-1');
var questionTwoEl = document.getElementById('question-2');
var questionThreeEl = document.getElementById('question-3');
var questionFourEl = document.getElementById('question-4');
var questionFiveEl = document.getElementById('question-5');
var button = document.getElementById('show-high-score');
var begin = document.getElementById('begin');
var quizDescription = document.getElementById('quiz-description');
var correct1 = document.getElementById('correct-1');
var correct2 = document.getElementById('correct-2');
var correct3 = document.getElementById('correct-3');
var correct4 = document.getElementById('correct-4');
var correct5 = document.getElementById('correct-5');
var incorrect11 = document.getElementById('incorrect-1.1');
var incorrect12 = document.getElementById('incorrect-1.2');
var incorrect13 = document.getElementById('incorrect-1.3');
var incorrect21 = document.getElementById('incorrect-2.1');
var incorrect22 = document.getElementById('incorrect-2.2');
var incorrect23 = document.getElementById('incorrect-2.3');
var incorrect31 = document.getElementById('incorrect-3.1');
var incorrect32 = document.getElementById('incorrect-3.2');
var incorrect33 = document.getElementById('incorrect-3.3');
var incorrect41 = document.getElementById('incorrect-4.1');
var incorrect42 = document.getElementById('incorrect-4.2');
var incorrect43 = document.getElementById('incorrect-4.3');
var incorrect51 = document.getElementById('incorrect-5.1');
var incorrect52 = document.getElementById('incorrect-5.2');
var incorrect53 = document.getElementById('incorrect-5.3');
var score = 0;
var quizOverEl = document.getElementById('quiz-over');
var scoreEl = document.getElementById('score');
var restart = document.getElementById('restart');

questionOneEl.setAttribute('style', 'display: none;');
questionTwoEl.setAttribute('style', 'display: none;');
questionThreeEl.setAttribute('style', 'display: none;');
questionFourEl.setAttribute('style', 'display: none;');
questionFiveEl.setAttribute('style', 'display: none;');
quizOverEl.setAttribute('style', 'display: none;');

// Upon clicking the restart quiz header, the page will refresh and everything will be reset
restart.addEventListener('click', function() {
    location.reload();
})

// Hides the quiz until the button is pressed, once pressed question 1 will appear and the timer will start
begin.addEventListener('click', function () {
    quizDescription.setAttribute('style', 'display: none;');
    questionOneEl.setAttribute('style', 'display: visible;');

    var countdown = setInterval(function() {
                if (duration !== 0) {
                    timerDisplay.textContent = 'Time left: ' + duration;
                    duration--;
                } else {
                    timerDisplay.textContent = 'Time left: 0';
                    clearInterval(countdown);
                    showScore();
                }
            }, 1000);
})

// The next chunks of code add event listeners to the answers on the questions and do different
// things based on correct or incorrect answers.
correct1.addEventListener('click', function () {
    questionOneEl.setAttribute('style', 'display: none;')
    questionTwoEl.setAttribute('style', 'display: visible;')

    score+= 20;

    console.log(score);
})

incorrect11.addEventListener('click', function () {
    questionOneEl.setAttribute('style', 'display: none;')
    questionTwoEl.setAttribute('style', 'display: visible;')

    duration = duration - 10;
})

incorrect12.addEventListener('click', function () {
    questionOneEl.setAttribute('style', 'display: none;')
    questionTwoEl.setAttribute('style', 'display: visible;')

    duration = duration - 10;
})

incorrect13.addEventListener('click', function () {
    questionOneEl.setAttribute('style', 'display: none;')
    questionTwoEl.setAttribute('style', 'display: visible;')

    duration = duration - 10;
})

correct2.addEventListener('click', function () {
    questionTwoEl.setAttribute('style', 'display: none;')
    questionThreeEl.setAttribute('style', 'display: visible;')

    score+= 20;

    console.log(score);
})

incorrect21.addEventListener('click', function () {
    questionTwoEl.setAttribute('style', 'display: none;')
    questionThreeEl.setAttribute('style', 'display: visible;')

    duration = duration - 10;
})

incorrect22.addEventListener('click', function () {
    questionTwoEl.setAttribute('style', 'display: none;')
    questionThreeEl.setAttribute('style', 'display: visible;')

    duration = duration - 10;
})

incorrect23.addEventListener('click', function () {
    questionTwoEl.setAttribute('style', 'display: none;')
    questionThreeEl.setAttribute('style', 'display: visible;')

    duration = duration - 10;
})

correct3.addEventListener('click', function () {
    questionThreeEl.setAttribute('style', 'display: none;')
    questionFourEl.setAttribute('style', 'display: visible;')

    score+= 20;

    console.log(score);
})

incorrect31.addEventListener('click', function () {
    questionThreeEl.setAttribute('style', 'display: none;')
    questionFourEl.setAttribute('style', 'display: visible;')

    duration = duration - 10;
})

incorrect32.addEventListener('click', function () {
    questionThreeEl.setAttribute('style', 'display: none;')
    questionFourEl.setAttribute('style', 'display: visible;')

    duration = duration - 10;
})

incorrect33.addEventListener('click', function () {
    questionThreeEl.setAttribute('style', 'display: none;')
    questionFourEl.setAttribute('style', 'display: visible;')

    duration = duration - 10;
})

correct4.addEventListener('click', function () {
    questionFourEl.setAttribute('style', 'display: none;')
    questionFiveEl.setAttribute('style', 'display: visible;')

    score+= 20;

    console.log(score);
})

incorrect41.addEventListener('click', function () {
    questionFourEl.setAttribute('style', 'display: none;')
    questionFiveEl.setAttribute('style', 'display: visible;')

    duration = duration - 10;
})

incorrect42.addEventListener('click', function () {
    questionFourEl.setAttribute('style', 'display: none;')
    questionFiveEl.setAttribute('style', 'display: visible;')

    duration = duration - 10;
})

incorrect43.addEventListener('click', function () {
    questionFourEl.setAttribute('style', 'display: none;')
    questionFiveEl.setAttribute('style', 'display: visible;')

    duration = duration - 10;
})

// The function below will show the quiz-over element after the last question is
// answered, which will show the user's score
var showScore = function() {
    duration = 0;
    questionOneEl.setAttribute('style', 'display: none;');
    questionTwoEl.setAttribute('style', 'display: none;');
    questionThreeEl.setAttribute('style', 'display: none;');
    questionFourEl.setAttribute('style', 'display: none;');
    questionFiveEl.setAttribute('style', 'display: none;');
    quizOverEl.setAttribute('style', 'display: visible');
    scoreEl.innerHTML = 'Score: ' + score + '%';
};

// This is supposed to clear all questions and show the quiz-over element when the
// timer goes to 0, but it is not working for some reason.

correct5.addEventListener('click', function () {
    score+= 20;
    questionFiveEl.setAttribute('style', 'display: none;')
    
    duration = 0;
    showScore();
})

incorrect51.addEventListener('click', function () {
    questionFiveEl.setAttribute('style', 'display: none;')
    
    duration = 0;
    showScore();
})

incorrect52.addEventListener('click', function () {
    questionFiveEl.setAttribute('style', 'display: none;')
    
    duration = 0;
    showScore();
})

incorrect53.addEventListener('click', function () {
    questionFiveEl.setAttribute('style', 'display: none;')
    
    duration = 0;
    showScore();
})


console.log(score);

// REMEMBER TO PUSH TO GITHUB