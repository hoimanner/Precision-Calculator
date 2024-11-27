let startTime;
let elapsed = 0;
let timer;

function updateDisplay() {
    const display = document.getElementById('display');

    // Calculate elapsed time in milliseconds
    const now = performance.now();
    elapsed = now - startTime;

    // Calculate hours, minutes, seconds, milliseconds, microseconds, and nanoseconds
    const hrs = Math.floor(elapsed / 3600000);
    const mins = Math.floor((elapsed % 3600000) / 60000);
    const secs = Math.floor((elapsed % 60000) / 1000);
    const ms = Math.floor(elapsed % 1000);
    const micros = (elapsed % 1) * 1e6; // Convert fractional milliseconds to microseconds

    // Update display with formatted time
    display.innerText = 
        String(hrs).padStart(2, '0') + ':' +
        String(mins).padStart(2, '0') + ':' +
        String(secs).padStart(2, '0') + '.' +
        String(ms).padStart(3, '0') + ' (' + Math.floor(micros) + ' µs)';
}

document.getElementById('startBtn').addEventListener('click', () => {
    if (!timer) {
        startTime = performance.now() - elapsed; // Allow for continuous timing
        timer = setInterval(updateDisplay, 1); // Update every millisecond
    }
});

document.getElementById('stopBtn').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});

document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    elapsed = 0;
    document.getElementById('display').innerText = '00:00:00.000 (0 µs)';
});