let lapCounter = 0;
const lapsData = [];
let clickCounter = 0;
let milliseconds = 0;
let milliseconds_lap = 0;
const delayInMilliseconds = 0;
let temp = 0;

// Div content to show Total time passed
const elapsedTime = document.createElement("div");
elapsedTime.className = "display";
elapsedTime.innerText = "Timer";

// Lap container
const lapsInfoDiv = document.createElement("div");
lapsInfoDiv.className = "lapsContainer";

// Div to show Current on-going lap
const currentLapDiv = document.createElement("div");
currentLapDiv.className = "currentLap";
currentLapDiv.classList.add = "lap";

// Div to show Previous lap
const lapRecord = document.createElement("div");
lapRecord.className = "lap";

// Add buttons
const startAndStopBtn = document.createElement("button");
startAndStopBtn.className = "btn";
startAndStopBtn.innerText = "Start";
const lapAndResetBtn = document.createElement("button");
lapAndResetBtn.className = "btn";
lapAndResetBtn.innerText = "Lap";
lapAndResetBtn.disabled = true;

// Main Container div
const containerDiv = document.createElement("div");
containerDiv.className = "container";

containerDiv.append(elapsedTime, startAndStopBtn, lapAndResetBtn);
document.body.append(containerDiv, lapsInfoDiv);

const init = () => {
  lapCounter = 0;
  lapsData.length = 0;
  clickCounter = 0;
  milliseconds = 0;
  milliseconds_lap = 0;
  temp = 0;
  lapRecord.innerHTML = "";
  currentLapDiv.innerText = "";
  displayLapsInfo.innerText = "";
  lapsInfoDiv.innerText = "";
  lapAndResetBtn.disabled = true;
  elapsedTime.innerText = "Timer";
};

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
  startAndStopBtn.style.color = "red";
  startAndStopBtn.style.backgroundColor = "pink";
  lapAndResetBtn.innerText = "Lap";
  lapAndResetBtn.disabled = false;
  const onTimer = setInterval(() => {
    elapsedTime.innerText = convertMsToHM(milliseconds);
    currentLapDiv.innerText = `Lap${lapCounter + 1}: ${convertMsToHM(
      milliseconds_lap
    )}`;
    lapsInfoDiv.prepend(currentLapDiv);

    if (clickCounter % 2 === 0) {
      clearInterval(onTimer);
      startAndStopBtn.innerText = "Start";
      startAndStopBtn.style.color = "white";
      startAndStopBtn.style.backgroundColor = "green";
      lapAndResetBtn.innerText = "Reset";
    }
    milliseconds += 1;
    console.log(milliseconds);
    milliseconds_lap += 1;
  }, delayInMilliseconds);
  // return milliseconds;
};

const displayLapsInfo = (laps) => {
  let displayLaps = "";
  for (let i = 0; i < laps.length; i++) {
    displayLaps += `Lap${laps[i].lap}:  ${convertMsToHM(laps[i].time)}<br>`;
  }
  return displayLaps;
};

const generateLaps = () => {
  if (lapAndResetBtn.innerText === "Lap") {
    milliseconds_lap = 0;
    lapCounter += 1;
    lapTime = milliseconds - temp;
    temp = milliseconds;
    let lapData = {
      lap: lapCounter,
      time: lapTime,
    };
    lapsData.push(lapData);
    lapsData.sort((a, b) => (a.lap > b.lap ? 1 : -1));
    lapRecord.innerHTML = displayLapsInfo(lapsData.reverse());
    lapsInfoDiv.prepend(lapRecord);
  }

  if (lapAndResetBtn.innerText === "Reset") {
    init();
  }
};

// Timer Event Listener
startAndStopBtn.addEventListener("click", onTimer);
lapAndResetBtn.addEventListener("click", generateLaps);
