import { updateStorage } from "./utils.js";

function setOtherElementsClickable(state, clickable) {
  state.canvas.style.pointerEvents = (clickable ? "none" : "auto"); // The canvas sits on top of everything. by setting it's pointer events to none it makes other stuff clickable.
}

function getPathInformation(mouse, state) {
  return {
    x: (mouse.clientX + window.scrollX) / state.canvas.width, // Divide by the canvas width,height when storing the paths
    y: (mouse.clientY + window.scrollY) / state.canvas.height,
    color: state.color
  };
}

function drawPaths(state) {
   
  for (let path of state.paths) {

    state.ctx.beginPath(); // Index 0 is the starting point. Created by onMouseDown.
    state.ctx.moveTo(path[0].x * state.canvas.width, path[0].y * state.canvas.height); // Multiply by the canvas width,height when returning the paths
   
    for (let i = 1; i < path.length; i++) { // The actual path, created by onMouseMove.
      state.ctx.strokeStyle = path[i].color;
      state.ctx.lineTo(path[i].x * state.canvas.width, path[i].y * state.canvas.height);
    }
   
    state.ctx.stroke();
  }

  state.ctx.strokeStyle = state.color;
}

function resetCanvas(state) {
  state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);
  state.canvas.width = document.body.scrollWidth;
  state.canvas.height = document.body.scrollHeight;
  state.ctx.lineWidth = 5;
  state.ctx.strokeStyle = state.color; // All this stuff gets cleared when resizing for whatever reason.
  state.ctx.lineJoin = "round";
  drawPaths(state); // Canvas also gets cleared. then we redraw according to new size (if its a resize)
}

function onMouseDown(mouse, state) {
  if (state.disabled) return;
  state.drawing = true;
  document.body.style.cursor = "crosshair";
  if (state.activeTool === "eraser") return;
  state.currentPath = [getPathInformation(mouse, state)]; // Reset on mouse down
  state.ctx.beginPath();
  state.ctx.moveTo(mouse.clientX + window.scrollX, mouse.clientY + window.scrollY);
}

function onMouseMove(mouse, state) {
  if (!state.drawing || state.disabled) return;
  setOtherElementsClickable(state, false);
  if (state.activeTool === "eraser") {
    eraserOnMouseMove(mouse, state);
    return;
  }
  state.currentPath.push(getPathInformation(mouse, state));
  state.ctx.lineTo(mouse.clientX + window.scrollX, mouse.clientY + window.scrollY); // clientX,Y is where the mouse sits on the viewport. ScrollX,Y is how much the page is scrolled.
  state.ctx.stroke();
}

function onPathDone(state) {
  if (state.disabled) return;
  state.drawing = false;
  document.body.style.cursor = "auto";
  if (state.activeTool === "eraser") {
    updateStorage("paths", JSON.stringify(state.paths));
    return;
  }
  state.paths.push(state.currentPath); // add the current path
  setOtherElementsClickable(state, true);
  state.ctx.closePath();
  updateStorage("paths", JSON.stringify(state.paths));
}

function eraserOnMouseMove(mouse, state) {
  let x = (mouse.clientX + window.scrollX);
  let y = (mouse.clientY + window.scrollY);

  for (let i = 0; i < state.paths.length; i++) {
    let path = state.paths[i];
    for (let k = 0; k < path.length; k++) {
      let xDiff = Math.abs(x - (path[k].x * state.canvas.width));
      let yDiff = Math.abs(y - (path[k].y * state.canvas.height));
      if (xDiff <= 10 && yDiff <= 10) {
        state.paths.splice(i, 1);
        resetCanvas(state);
        return;
      }
    }
  }

}

export {
  setOtherElementsClickable,
  resetCanvas,
  onMouseDown,
  onMouseMove,
  onPathDone,
  drawPaths
};