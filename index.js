(async () => {
  await import(chrome.runtime.getURL("src/index.js"));
})();