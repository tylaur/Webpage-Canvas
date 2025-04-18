function setStyleProperties(element, properties) {
  for (let property of Object.keys(properties)) {
    element.style.setProperty(property, properties[property]);
  }
}

export {
  setStyleProperties
};