// To get time for analog clock
const secondHandEl = document.querySelector('.second-hand');
const minuteHandEl = document.querySelector('.minute-hand');
const hourHandEl = document.querySelector('.hour-hand');

function getTimeForAnalog() {
    const date = new Date();

    const seconds = date.getSeconds();
    const secsToDegrees = 6 * seconds + 90;

    const mins = date.getMinutes();
    const minsToDegrees = mins*6 + 90;

    const hour = date.getHours();
    const hourToDegrees = 30 * hour + mins / 2 + 90 ;

    secondHandEl.style.transform = `rotate(${secsToDegrees}deg)`;
    minuteHandEl.style.transform = `rotate(${minsToDegrees}deg)`;
    hourHandEl.style.transform = `rotate(${hourToDegrees}deg)`;
}

setInterval(getTimeForAnalog, 1000);
getTimeForAnalog();