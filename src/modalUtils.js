import { modal, alertText, confirmButton, denyButton } from "./modal.js";

function showModal() {
  modal.style.display = "flex";
}

function hideModal() {
  modal.style.display = "none";
}

let activeAlert = false;

function modalAlert(text, callback) {
  if (activeAlert) return;
  activeAlert = true;
  alertText.innerText = text;
  function onConfirm() {
    activeAlert = false;
    confirmButton.removeEventListener("click", onConfirm);
    denyButton.removeEventListener("click", onDeny);
    hideModal();
    callback(true);
  }
  function onDeny() {
    activeAlert = false;
    confirmButton.removeEventListener("click", onConfirm);
    denyButton.removeEventListener("click", onDeny);
    hideModal();
    callback(false);
  }
  confirmButton.addEventListener("click", onConfirm);
  denyButton.addEventListener("click", onDeny);
  showModal();
}

export {
  modalAlert
};