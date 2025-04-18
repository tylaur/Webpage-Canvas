import { canvas, ctx } from "./canvas.js";
import { controlsContainer, controls } from "./controls.js";
import { modal } from "./modal.js";
import {
     setOtherElementsClickable,
     resetCanvas,
     onMouseDown,
     onMouseMove,
     onPathDone
} from "./canvasUtils.js";
import {
     onClear,
     onColorSelect
} from "./controlsUtils.js";

const state = {
     drawing: false,
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

// Configuring the modal

document.body.appendChild(modal);