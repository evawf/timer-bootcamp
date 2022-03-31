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
