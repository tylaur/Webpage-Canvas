function onColorSelect(mouse, state) {
     let selectedColor = mouse.target.style.backgroundColor;
     state.ctx.strokeStyle = selectedColor;
     state.color = selectedColor;
}

export {
     onColorSelect
};