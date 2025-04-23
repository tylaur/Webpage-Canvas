const canvas = {
  "position": "absolute",
  "display": "none",
  "top": "0px",
  "left": "0px"
};

const controlsContainer = {
  "id": "controls-webpage-canvas",
  "position": "fixed",
  "display": "none",
  "flex-direction": "column",
  "gap": "10px",
  "top": "25vh",
  "width": "60px",
  "left": "25px",
  "height": "50vh",
  "justify-content": "center",
  "align-items": "center",
  "background-color": "rgb(96, 104, 108)",
  "border": "3px solid rgb(140, 130, 115)",
  "border-radius": "15px",
  "z-index": 999
};

const controlBox = {
  "width": "40px",
  "height": "40px",
  "border": "3px solid rgb(140, 130, 115)",
  "border-radius": "10px"
};

const labelBoxStyles = {
  "background-color": "gray",
  "text-align": "center",
  "font-size": "10px",
  "color": "white",
  "line-height": "40px"
};

const modal = {};

modal.container = {
  "width": "50vw",
  "height": "50vh",
  "background-color": "rgb(96, 104, 108)",
  "position": "fixed",
  "display": "none",
  "top": "25vh",
  "left": "25vw",
  "z-index": 999,
  "flex-direction": "column",
  "justify-content": "center",
  "align-items": "center",
  "border": "5px solid rgb(140, 130, 115)",
  "border-radius": "15px",
  "gap": "25px"
};

modal.alertText = {
  "color": "lightgrey",
  "font-weight": "bold",
  "font-size": "15px"
};

modal.buttonContainer = {
  "display": "flex",
  "flex-direction": "row",
  "justify-content": "center",
  "align-items": "center",
  "gap": "50px"
};

modal.confirmButton = {
  "background-color": "rgb(96, 104, 108)",
  "width": "100px",
  "height": "50px",
  "border": "3px solid rgb(140, 130, 115)",
  "border-radius": "10px"
};

modal.denyButton = {
  "background-color": "rgb(96, 104, 108)",
  "width": "100px",
  "height": "50px",
  "border": "3px solid rgb(140, 130, 115)",
  "border-radius": "10px"
};

const styles = {
  canvas,
  controlsContainer,
  controlBox,
  labelBoxStyles,
  modal
};

export default styles;