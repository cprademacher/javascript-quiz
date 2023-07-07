var duration = 60; // this is the amount of seconds the countdown will start with.
var timerDisplay = $('#timer') // this will be where the countdown is displayed in the browser
var quizEl = document.getElementById('quiz');
var button = $('#show-high-score');
var begin = document.getElementById('begin');
var quizDescription = document.getElementById('quiz-description');

quizEl.setAttribute('style', 'display: none;');

// This starts the 60 second countdown upon clicking 'view high scores'
// Will need to change what is clicked, but functionality works
// button.addEventListener('click', function() {
//     var countdown = setInterval(function() {
//         if (duration !== 0) {
//             timerDisplay.textContent = 'Time left: ' + duration;
//             duration--;
//         } else {
//             timerDisplay.textContent = 'Time left: 0';
//             clearInterval(countdown);
//         }
//     }, 1000);
// });

// trying to hide the quiz until the button is pressed, not working yet
// quizEl.css('display', 'hidden');

begin.addEventListener('click', function () {
    quizDescription.setAttribute('style', 'display: none;');
    quizEl.setAttribute('style', 'display: visible;');

    var countdown = setInterval(function() {
                if (duration !== 0) {
                    timerDisplay.textContent = 'Time left: ' + duration;
                    duration--;
                } else {
                    timerDisplay.textContent = 'Time left: 0';
                    clearInterval(countdown);
                }
            }, 1000);
})

// REMEMBER TO PUSH TO GITHUB