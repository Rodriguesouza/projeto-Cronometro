

let timer;
let running = false;
let seconds = 0, minutes = 0, hours = 0;

function startStop() {
    if (running) {
        clearInterval(timer);
        document.getElementById('startStop').innerHTML = 'Iniciar';
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById('startStop').innerHTML = 'Parar';
    }
    running = !running;
}

function reset() {
    clearInterval(timer);
    running = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById('startStop').innerHTML = 'Iniciar';
}

function updateDisplay() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const display = document.getElementById('display');
    display.innerHTML = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
