// Please implement exercise logic here

const displayDiv = document.createElement("div");
displayDiv.className = "display";
displayDiv.innerHTML = "Timer";
// Add buttons
const startAndStopBtn = document.createElement("button");
startAndStopBtn.className = "btn";
startAndStopBtn.innerText = "Start";
const lapAndResetBtn = document.createElement("button");
lapAndResetBtn.className = "btn";
lapAndResetBtn.innerText = "Lap";

const containerDiv = document.createElement("div");
containerDiv.className = "container";

containerDiv.append(displayDiv, startAndStopBtn, lapAndResetBtn);
document.body.append(containerDiv);

let lapCounter = 0;
const lapData = [];
let clickCounter = 0;
let milliseconds = 0;
const delayInMilliseconds = 1;

startAndStopBtn.addEventListener("click", () => {
  clickCounter += 1;
  startAndStopBtn.innerText = "Stop";
  const onTimer = setInterval(() => {
    displayDiv.innerHTML = milliseconds;
    if (clickCounter % 2 === 0) {
      clearInterval(onTimer);
      startAndStopBtn.innerText = "Start";
    }
    milliseconds += 1;
  }, delayInMilliseconds);
  console.log(milliseconds);
});
