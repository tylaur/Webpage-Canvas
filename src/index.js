import { canvas, ctx } from "./canvas.js";
import { controlsContainer, controls } from "./controls.js";
import {
     setOtherElementsClickable,
     resetCanvas,
     onMouseDown,
     onMouseMove,
     onPathDone
} from "./canvasUtils.js";
import {
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
controls.redColor.addEventListener("click", (mouse) => onColorSelect(mouse, state));
controls.greenColor.addEventListener("click", (mouse) => onColorSelect(mouse, state));
controls.blueColor.addEventListener("click", (mouse) => onColorSelect(mouse, state));