const elapsedTime = document.createElement("div");
elapsedTime.className = "display";
elapsedTime.innerHTML = "Timer";

const lapsInfoDiv = document.createElement("div");
lapsInfoDiv.className = "lapsInfo";
// Add buttons
const startAndStopBtn = document.createElement("button");
startAndStopBtn.className = "btn";
startAndStopBtn.innerText = "Start";
const lapAndResetBtn = document.createElement("button");
lapAndResetBtn.className = "btn";
lapAndResetBtn.innerText = "Lap";
lapAndResetBtn.disabled = true;

const containerDiv = document.createElement("div");
containerDiv.className = "container";

containerDiv.append(elapsedTime, startAndStopBtn, lapAndResetBtn);
document.body.append(containerDiv, lapsInfoDiv);

let lapCounter = 0;
const lapsData = [];
let clickCounter = 0;
let milliseconds = 0;
const delayInMilliseconds = 1;

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

const convertMsToHM = (milliseconds) => {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let ms = milliseconds % 100;
  seconds = ms >= 100 ? seconds : seconds;
  seconds = seconds % 60;
  minutes = seconds >= 30 ? minutes : minutes;
  minutes = minutes % 60;

  return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}:${padTo2Digits(
    ms
  )}`;
};

const onTimer = () => {
  clickCounter += 1;
  startAndStopBtn.innerText = "Stop";
  lapAndResetBtn.disabled = false;

  const onTimer = setInterval(() => {
    elapsedTime.innerHTML = convertMsToHM(milliseconds);
    if (clickCounter % 2 === 0) {
      clearInterval(onTimer);
      startAndStopBtn.innerText = "Start";
    }
    milliseconds += 1;
  }, delayInMilliseconds);
  console.log(milliseconds);
  return milliseconds;
};

const displayLapsInfo = (laps) => {
  console.log(laps);
  let displayLaps = "";
  for (let i = 0; i < laps.length; i += 1) {
    displayLaps += `Lap ${laps[i].lap}:  ${convertMsToHM(laps[i].time)}<br>`;
  }
  return displayLaps;
};

startAndStopBtn.addEventListener("click", onTimer);
lapAndResetBtn.addEventListener("click", () => {
  lapCounter += 1;
  console.log(milliseconds);

  let lapTime = onTimer();
  let lapData = {
    lap: lapCounter,
    time: lapTime,
  };
  lapsData.push(lapData);
  lapsInfoDiv.innerHTML = displayLapsInfo(lapsData);
});
