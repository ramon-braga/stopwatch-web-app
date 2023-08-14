const stopWatchDiplay = document.querySelector('.js-stopwatch-display');
const startButton = document.querySelector('.js-start-button');
const restartButton = document.querySelector('.js-reset-button');

let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let intervalId = 0;

startButton.addEventListener('click', () => {
    startCount();
});

function startCount() {

    if (startButton.innerHTML === 'Start') {
        startButton.innerHTML = 'Pause';

        intervalId = setInterval(() => {
            miliseconds += 1;
            
            if (miliseconds === 100) {
                miliseconds = 0;
                seconds += 1;

                if (seconds === 60) {
                    seconds = 0;
                    minutes += 1;

                    if (minutes === 60) {
                        resetCount();
                    }
                }
                
            }
            stopWatchDiplay.innerHTML = `${timeFormat(minutes)}:${timeFormat(seconds)}:${timeFormat(miliseconds)}`;

        }, 10);

    }else {
        startButton.innerHTML = 'Start';
        clearInterval(intervalId);

    }
}

restartButton.addEventListener('click', () => {
    resetCount();
});

function resetCount() {
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    stopWatchDiplay.innerHTML = `00:00:00`;
}

function timeFormat(time) {
    return time < 10 ? `0${time}` : time;
}