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
  onColorSelect,
  onEraserClick
} from "./controlsUtils.js";
import { getStorage } from "./utils.js";

const state = {
  drawing: false,
  disabled: true,
  activeTool: "paint",
  color: "red",
  paths: [],
  currentPath: [],
  canvas,
  ctx
};

// Configuring the canvas

// function debounce(func) {
//   let timeout;
//   return function(...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(func, 1000, args);
//   };
// }

// const debouncedResetCanvas = debounce(resetCanvas);

document.body.appendChild(canvas);
resetCanvas(state);
setOtherElementsClickable(state, true);
document.addEventListener("DOMContentLoaded", () => resetCanvas(state));
//window.addEventListener("resize", () => debouncedResetCanvas(state));
window.addEventListener("mousedown", (mouse) => onMouseDown(mouse, state));
window.addEventListener("mousemove", (mouse) => onMouseMove(mouse, state));
window.addEventListener("mouseup", () => onPathDone(state));
window.addEventListener("mouseleave", () => onPathDone(state));

// Configuring the dashboard

document.body.appendChild(controlsContainer);
[controls.redColor, controls.blueColor, controls.greenColor, controls.yellowColor, controls.purpleColor].forEach((el) => el.addEventListener("click", (mouse) => onColorSelect(mouse, state)));
controls.clearCanvas.addEventListener("click", () => onClear(state));
controls.eraser.addEventListener("click", () => onEraserClick(state));

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

(async () => {
  let enabled = await getStorage("checked");
  let paths = await getStorage("paths");
  if (enabled) enable();
  if (paths) {
    state.paths = JSON.parse(paths);
    drawPaths(state);
  }
})();