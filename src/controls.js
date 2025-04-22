import styles from "./styles.js";
import { setStyleProperties } from "./utils.js";

const controlsContainer = document.createElement("div");
setStyleProperties(controlsContainer, styles.controlsContainer);

const redColor = document.createElement("div");
setStyleProperties(redColor, {...styles.controlBox, "background-color": "red"});
controlsContainer.appendChild(redColor);

const greenColor = document.createElement("div");
setStyleProperties(greenColor, {...styles.controlBox, "background-color": "green"});
controlsContainer.appendChild(greenColor);

const blueColor = document.createElement("div");
setStyleProperties(blueColor, {...styles.controlBox, "background-color": "blue"});
controlsContainer.appendChild(blueColor);

const clearCanvas = document.createElement("div");
clearCanvas.innerText = "CLEAR";
setStyleProperties(clearCanvas, {
  ...styles.controlBox,
  "background-color": "gray",
  "text-align": "center",
  "font-size": "10px",
  "color": "white",
  "line-height": "40px"
});
controlsContainer.appendChild(clearCanvas);

const eraser = document.createElement("div");
eraser.innerText = "ERASER";
setStyleProperties(eraser, {
  ...styles.controlBox,
  "background-color": "gray",
  "text-align": "center",
  "font-size": "10px",
  "color": "white",
  "line-height": "40px"
});
controlsContainer.appendChild(eraser);

const controls = {
  redColor,
  greenColor,
  blueColor,
  clearCanvas,
  eraser
};

export {
  controlsContainer, controls
};