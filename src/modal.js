import styles from "./styles.js";
import { setStyleProperties } from "./utils.js";

const modal = document.createElement("div");
modal.id = "modal-webpage-canvas";
setStyleProperties(modal, styles.modal.container);

const alertText = document.createElement("h1");
setStyleProperties(alertText, styles.modal.alertText);
modal.appendChild(alertText);

const buttonContainer = document.createElement("div");
setStyleProperties(buttonContainer, styles.modal.buttonContainer);
modal.appendChild(buttonContainer);

const confirmButton = document.createElement("button");
confirmButton.innerHTML = "Yes";
setStyleProperties(confirmButton, styles.modal.confirmButton);
buttonContainer.appendChild(confirmButton);

const denyButton = document.createElement("button");
denyButton.innerHTML = "No";
setStyleProperties(denyButton, styles.modal.denyButton);
buttonContainer.appendChild(denyButton);

export {
  modal,
  alertText,
  buttonContainer,
  confirmButton,
  denyButton
};