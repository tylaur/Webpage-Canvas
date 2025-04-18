import styles from "./styles.js";
import { setStyleProperties } from "./utils.js";

const canvas = document.createElement("canvas");
canvas.id = "webpage-canvas";
setStyleProperties(canvas, styles.canvas);

const ctx = canvas.getContext("2d");

export {
  canvas, ctx
};