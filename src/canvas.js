const canvas = document.createElement("canvas");
canvas.id = "webpage-canvas";
canvas.style.position = "absolute";
canvas.style.top = "0px";
canvas.style.left = "0px";

const ctx = canvas.getContext("2d");

export {
     canvas, ctx
}