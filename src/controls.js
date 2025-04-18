import { setStyleProperties } from "./utils.js";

const controlsContainer = document.createElement("div");
setStyleProperties(controlsContainer, {
     "id": "controls-webpage-canvas",
     "position": "fixed",
     "display": "flex",
     "flex-direction": "column",
     "gap": "10px",
     "top": "20vh",
     "width": "60px",
     "left": "25px",
     "height": "60vh",
     "justify-content": "center",
     "align-items": "center",
     "background-color": "gray",
     "border": "3px solid black",
     "border-radius": "15px",
     "z-index": 999
});

const defaultBoxStyles = {
     "width": "40px",
     "height": "40px",
     "background-color": "red",
     "border": "3px solid black",
     "border-radius": "10px"
};

const redColor = document.createElement("div");
setStyleProperties(redColor, defaultBoxStyles);
controlsContainer.appendChild(redColor);

const greenColor = document.createElement("div");
setStyleProperties(greenColor, {...defaultBoxStyles, "background-color": "green"});
controlsContainer.appendChild(greenColor);

const blueColor = document.createElement("div");
setStyleProperties(blueColor, {...defaultBoxStyles, "background-color": "blue"});
controlsContainer.appendChild(blueColor);

const controls = {
     redColor,
     greenColor,
     blueColor
};

export {
     controlsContainer, controls
}