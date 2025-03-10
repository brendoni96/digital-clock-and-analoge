const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#minute");
const secondHand = document.querySelector("#sec");

setInterval(setClock, 1000);

function setClock() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const h_rotation = 30 * hours + minutes / 2;
  const m_rotation = 6 * minutes;
  const s_rotation = 6 * seconds;

  hourHand.style.transform = `rotate(${h_rotation}deg)`;
  minuteHand.style.transform = `rotate(${m_rotation}deg)`;
  secondHand.style.transform = `rotate(${s_rotation}deg)`;
}

setClock();

// Digital Clock
function setDigitalClock() {
  const currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  document.querySelector(
    "#digital-clock"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(setDigitalClock, 1000);
setDigitalClock();
