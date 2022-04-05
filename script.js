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
const delayMilliseconds = 1;

const onTimer = () => {
  const timerId = setInterval(() => {
    milliseconds += 1;
    console.log(milliseconds);
    if (milliseconds >= 300) {
      clearInterval(timerId);
    }
  }, delayMilliseconds);
  return milliseconds;
};

console.log(milliseconds);

const generateLaps = () => {};

// Timer Event Listener
startAndStopBtn.addEventListener("click", onTimer);
lapAndResetBtn.addEventListener("click", generateLaps);
