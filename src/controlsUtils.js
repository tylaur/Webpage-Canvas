import { modalAlert } from "./modalUtils.js";

function onColorSelect(mouse, state) {
  let selectedColor = mouse.target.style.backgroundColor;
  state.ctx.strokeStyle = selectedColor;
  state.color = selectedColor;
}

function onClear(state) {
  modalAlert("Are you sure you would like to clear the canvas? Once cleared, you will not be able to restore it.", (confirmed) => {
    if (!confirmed) return;
    state.paths = [];
    state.currentPath = [];
    state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);
  });
}

export {
  onColorSelect,
  onClear
};