var duration = 60; // this is the amount of seconds the countdown will start with.
var timerDisplay = document.getElementById('timer') // this will be where the countdown is displayed in the browser
var quizEl = $('#quiz');

var button = document.getElementById('show-high-score');
// This starts the 60 second countdown upon clicking 'view high scores'
// Will need to change what is clicked, but functionality works
button.addEventListener('click', function() {
    var countdown = setInterval(function() {
        if (duration !== 0) {
            timerDisplay.textContent = 'Time left: ' + duration;
            duration--;
        } else {
            timerDisplay.textContent = 'Time left: 0';
            clearInterval(countdown);
        }
    }, 1000);
});

// trying to hide the quiz until the button is pressed, not working yet
quizEl.css('display', 'hidden');