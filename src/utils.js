function setStyleProperties(element, properties) {
  for (let property of Object.keys(properties)) {
    element.style.setProperty(property, properties[property]);
  }
}

function updateStorage(key, value) {
  chrome.runtime.sendMessage({ action: "getTabURL" }, (res) => {
    chrome.storage.local.get(res.url, (storage) => {
      chrome.storage.local.set({ [res.url]: { ...storage[res.url], [key]: value }});
    });
  });
}

async function getStorage(key) {
  let { url } = await chrome.runtime.sendMessage({ action: "getTabURL" });
  let storage = await chrome.storage.local.get(url);
  if (!storage || !storage[url]) return undefined;
  return storage[url][key];
}

export {
  setStyleProperties,
  updateStorage,
  getStorage
};