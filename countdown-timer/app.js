const daysEL = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const newYears = '1 Jan 2022'

function countdown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const day = Math.floor(totalSeconds / 3600 / 24);
    const hour = Math.floor(totalSeconds / 3600) % 24;
    const min = Math.floor(totalSeconds / 60) % 60;
    const sec = Math.floor(totalSeconds) % 60;

    daysEL.innerHTML = day;
    hoursEl.innerHTML = hour;
    minutesEl.innerHTML = min;
    secondsEl.innerHTML = sec;
}

countdown();

setInterval(countdown, 1000);