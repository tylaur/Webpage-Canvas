const canvas = {
     "position": "absolute",
     "top": "0px",
     "left": "0px"
};

const controlsContainer = {
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
};

const controlBox = {
     "width": "40px",
     "height": "40px",
     "border": "3px solid black",
     "border-radius": "10px"
};

const modal = {};

modal.container = {
     "width": "50vw",
     "height": "50vh",
     "background-color": "gray",
     "position": "absolute",
     "display": "none",
     "top": "25vh",
     "left": "25vw",
     "z-index": 999,
     "flex-direction": "column",
     "justify-content": "center",
     "align-items": "center",
     "border": "3px solid gray",
     "border-radius": "15px"
};

modal.alertText = {
     "color": "black"
};

modal.buttonContainer = {
     "display": "flex",
     "flex-direction": "row",
     "justify-content": "center",
     "align-items": "center"
};

modal.confirmButton = {
     "width": "100px",
     "height": "50px"
};

modal.denyButton = {
     "width": "100px",
     "height": "50px"
};

const styles = {
     canvas,
     controlsContainer,
     controlBox,
     modal
};

export default styles;