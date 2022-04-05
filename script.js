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
lapAndResetBtn.style = "background-color: gray";

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
let lapMode = "lap";
const lapsData = [];
let lapData;
let tempSeconds = 0;
let tempMinutes = 0;
let tempHours = 0;
let lapCounter = 0;

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

const toggleMode = (mode) => {
  if (mode === "start") return (mode = "stop");
  if (mode === "stop") return (mode = "start");
  if (mode === "lap") return (mode = "reset");
  if (mode === "reset") return (mode = "lap");
};

// Timer Event Listener
startAndStopBtn.addEventListener("click", () => {
  console.log(mode);
  if (mode === "start") {
    onTimer();
    startAndStopBtn.innerText = "Stop";
    startAndStopBtn.style = "background-color: pink";
    lapAndResetBtn.disabled = false;
    lapAndResetBtn.style = "background-color: green";
  }

  if (mode === "stop") {
    console.log("you clicked stop btn");
    console.log(setTimer);
    clearInterval(setTimer);
    startAndStopBtn.innerText = "Start";
    lapAndResetBtn.innerText = "Reset";
    lapMode = toggleMode(lapMode);
    startAndStopBtn.style = "background-color: green";
    console.log(seconds);
  }
  mode = toggleMode(mode);
});

// Collect laps data and Display
const displayLapsInfo = (laps) => {
  console.log(laps);
  let displayLaps = "";
  for (let i = 0; i < laps.length; i++) {
    displayLaps += `Lap${laps[i].lap}: ${laps[i].lapTime}<br>`;
  }
  return displayLaps;
};

const generateLaps = () => {
  // console.log(seconds);
  if (lapMode === "lap") {
    let lapSeconds = seconds - tempSeconds;
    tempSeconds = seconds;
    let lapMinutes = minutes - tempMinutes;
    tempMinutes = minutes;
    let lapHours = hours - tempHours;
    tempHours = hours;
    lapCounter += 1;
    lapData = {
      lap: lapCounter,
      lapTime: `${displayTwoDigits(lapHours)}:${displayTwoDigits(
        lapMinutes
      )}:${displayTwoDigits(lapSeconds)}`,
    };
    lapsData.push(lapData);
    lapsData.sort((a, b) => (a.lap > b.lap ? 1 : -1));
    lapRecord.innerHTML = displayLapsInfo(lapsData.reverse());
    lapsInfoDiv.prepend(lapRecord);
  }

  if (lapMode === "reset") {
    lapAndResetBtn.disabled = true;
    console.log("you clicked reset");
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    setTimer;
    mode = "start";
    lapMode = "lap";
    lapsData.length = 0;
    lapData;
    tempSeconds = 0;
    tempMinutes = 0;
    tempHours = 0;
    lapCounter = 0;
    elapsedTime.innerText = "Timer";
    lapRecord.innerHTML = "";
    currentLapDiv.innerText = "";
    displayLapsInfo.innerText = "";
    lapsInfoDiv.innerText = "";
  }
};

lapAndResetBtn.addEventListener("click", generateLaps);
