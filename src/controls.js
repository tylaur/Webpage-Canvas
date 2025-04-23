import styles from "./styles.js";
import { setStyleProperties } from "./utils.js";

const controlsContainer = document.createElement("div");
setStyleProperties(controlsContainer, styles.controlsContainer);

const controlDefs = [
  { key: "redColor", bg: "red" },
  { key: "greenColor", bg: "green" },
  { key: "yellowColor", bg: "yellow" },
  { key: "purpleColor", bg: "purple" },
  { key: "blueColor", bg: "blue" },
  { key: "clearCanvas", bg: "gray", label: "CLEAR" },
  { key: "eraser", bg: "gray", label: "ERASER" },
];

const controls = {

};

for (let control of controlDefs) {
  let element = document.createElement("div");
  setStyleProperties(element, styles.controlBox);
  element.style.backgroundColor = control.bg;
  if (control.label) {
    element.innerText = control.label;
    setStyleProperties(element, styles.labelBoxStyles);
  }
  controlsContainer.appendChild(element);
  controls[control.key] = element;
}

export {
  controlsContainer, controls
};