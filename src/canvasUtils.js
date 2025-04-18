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

    state.ctx.beginPath();
    state.ctx.moveTo(path[0].x * state.canvas.width, path[0].y * state.canvas.height); // Multiply by the canvas width,height when returning the paths
   
    for (let i = 1; i < path.length; i++) {
      state.ctx.strokeStyle = path[i].color;
      state.ctx.lineTo(path[i].x * state.canvas.width, path[i].y * state.canvas.height);
    }
   
    state.ctx.stroke();
  }

  state.ctx.strokeStyle = "red";
}

function resetCanvas(state) {
  state.canvas.width = document.body.scrollWidth;
  state.canvas.height = document.body.scrollHeight;
  state.ctx.lineWidth = 5;
  state.ctx.strokeStyle = state.color; // All this stuff gets cleared when resizing for whatever reason.
  state.ctx.lineJoin = "round";
  drawPaths(state); // Canvas also gets cleared. then we redraw according to new size (if its a resize)
}

function onMouseDown(mouse, state) {
  state.drawing = true;
  state.currentPath = [getPathInformation(mouse, state)]; // Reset on mouse down
  state.ctx.beginPath();
  state.ctx.moveTo(mouse.clientX + window.scrollX, mouse.clientY + window.scrollY);
}

function onMouseMove(mouse, state) {
  if (!state.drawing) return;
  setOtherElementsClickable(state, false);
  state.currentPath.push(getPathInformation(mouse, state));
  state.ctx.lineTo(mouse.clientX + window.scrollX, mouse.clientY + window.scrollY); // clientX,Y is where the mouse sits on the viewport. ScrollX,Y is how much the page is scrolled.
  state.ctx.stroke();
}

function onPathDone(state) {
  state.paths.push(state.currentPath); // add the current path
  state.drawing = false;
  setOtherElementsClickable(state, true);
  state.ctx.closePath();
}

export {
  setOtherElementsClickable,
  resetCanvas,
  onMouseDown,
  onMouseMove,
  onPathDone
};