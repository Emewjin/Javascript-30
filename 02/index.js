const hourHandle = document.querySelector(".hour-handle");
const minuteHandle = document.querySelector(".minute-handle");
const secondHandle = document.querySelector(".second-handle");
const digitalClock = document.querySelector(".digital-clock");

function getTime() {
    const date = new Date();

    const seconds = date.getSeconds();
    const secondsDeg = (seconds / 60) * 360 + 90;
    secondHandle.style.transform=`rotate(${secondsDeg}deg)`;

    const hours = date.getHours();
    const hoursDeg = (hours / 12) * 360 + 90;
    hourHandle.style.transform=`rotate(${hoursDeg}deg)`;

    const minutes = date.getMinutes();
    const minutesDeg = (minutes / 60) * 360 + 90;
    minuteHandle.style.transform=`rotate(${minutesDeg}deg)`;

    digitalClock.innerText = `${
        hours<10 ? `0${hours}` : hours
    }시 ${
        minutes<10 ? `0${minutes}` : minutes
    }분 ${
        seconds<10 ? `0${seconds}` : seconds
        }초`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();