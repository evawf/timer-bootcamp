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
let startAndStopBtn = document.createElement("button");
startAndStopBtn.className = "btn";
startAndStopBtn.innerText = "Start";
let lapAndResetBtn = document.createElement("button");
lapAndResetBtn.className = "btn";
lapAndResetBtn.innerText = "Lap";
lapAndResetBtn.disabled = true;

// Main Container div
const containerDiv = document.createElement("div");
containerDiv.className = "container";

containerDiv.append(elapsedTime, startAndStopBtn, lapAndResetBtn);
document.body.append(containerDiv, lapsInfoDiv);

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
const delayMilliseconds = 1000;
let setTimer;
let mode = "start";

// toggle buttons
const toggleBtn = () => {
  startAndStopBtn.innerText === "Start"
    ? (startAndStopBtn.innerText = "Stop")
    : (startAndStopBtn.innerText = "Start");
  lapAndResetBtn.innerText === "Lap"
    ? (lapAndResetBtn.innerText = "Reset")
    : (lapAndResetBtn.innerText = "Lap");
};

const displayTwoDigits = (num) => {
  if (num >= 100)
    return Math.floor(num / 10)
      .toString()
      .padStart(2, "0");
  return num.toString().padStart(2, "0");
};

// Display elpased time
const onTimer = () => {
  const startTimer = () => {
    seconds += 1;
    if (seconds >= 60) {
      minutes += 1;
      seconds = 0;
    }
    if (minutes >= 60) {
      hours += 1;
      minutes = 0;
    }
    elapsedTime.innerText = `${displayTwoDigits(hours)}:${displayTwoDigits(
      minutes
    )}:${displayTwoDigits(seconds)}`;
    milliseconds += 1;
    // return milliseconds;
  };
  setTimer = setInterval(startTimer, delayMilliseconds);
  // return milliseconds;
};

// Display laps
const generateLaps = () => {};

const toggleMode = (mode) => {
  mode === "start" ? (mode = "stop") : (mode = "start");
  return mode;
};

// Timer Event Listener
startAndStopBtn.addEventListener("click", () => {
  console.log(mode);
  if (mode === "start") {
    onTimer();
    startAndStopBtn.innerText = "Stop";
    startAndStopBtn.style = "background-color: pink";
  }

  if (mode === "stop") {
    console.log("you clicked stop btn");
    console.log(setTimer);
    clearInterval(setTimer);
    startAndStopBtn.innerText = "Start";
    startAndStopBtn.style = "background-color: green";
    console.log(seconds);
  }
  mode = toggleMode(mode);
});
// console.log(mode);

lapAndResetBtn.addEventListener("click", generateLaps);
