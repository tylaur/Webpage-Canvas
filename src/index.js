import { canvas, ctx } from "./canvas.js";
import { controlsContainer, controls } from "./controls.js";
import { modal } from "./modal.js";
import {
  setOtherElementsClickable,
  resetCanvas,
  onMouseDown,
  onMouseMove,
  onPathDone,
  drawPaths
} from "./canvasUtils.js";
import {
  onClear,
  onColorSelect
} from "./controlsUtils.js";

const state = {
  drawing: false,
  disabled: true,
  color: "red",
  paths: [],
  currentPath: [],
  canvas,
  ctx
};

// Configuring the canvas

document.body.appendChild(canvas);
resetCanvas(state);
setOtherElementsClickable(state, true);
document.addEventListener("DOMContentLoaded", () => resetCanvas(state));
window.addEventListener("resize", () => resetCanvas(state));
window.addEventListener("mousedown", (mouse) => onMouseDown(mouse, state));
window.addEventListener("mousemove", (mouse) => onMouseMove(mouse, state));
window.addEventListener("mouseup", () => onPathDone(state));
window.addEventListener("mouseleave", () => onPathDone(state));

// Configuring the dashboard

document.body.appendChild(controlsContainer);
[controls.redColor, controls.blueColor, controls.greenColor].forEach((el) => el.addEventListener("click", (mouse) => onColorSelect(mouse, state)));
controls.clearCanvas.addEventListener("click", () => onClear(state));
//controls.eraser.addEventListener("click", () => on)

// Configuring the modal

document.body.appendChild(modal);

// Enabling/disabling

function enable() {
  state.disabled = false;
  canvas.style.display = "block";
  controlsContainer.style.display = "flex";
}

function disable() {
  state.disabled = true;
  canvas.style.display = "none";
  controlsContainer.style.display = "none";
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "enable") {
    enable();
  }
  else if (message.action === "disable") {
    disable();
  }
});

chrome.runtime.sendMessage({ action: "getTabURL" }, (res) => {
  chrome.storage.local.get(res.url, (storage) => {
    if (!storage || !storage[res.url]) return;
    storage = storage[res.url];
    if (storage.checked) {
      enable();
    }
    if (storage.paths) {
      state.paths = JSON.parse(storage.paths);
      drawPaths(state);
    }
  });
});