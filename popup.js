const toggle = document.getElementById("toggle");

chrome.tabs.query({ active: true, lastFocusedWindow: true }, ([tab]) => {

  chrome.storage.local.get(tab.url, (res) => {
    if (!res || !res[tab.url]) return;
    toggle.checked = res[tab.url].checked;
  });

  toggle.addEventListener("change", () => {
    chrome.tabs.sendMessage(tab.id, {
      action: (toggle.checked ? "enable" : "disable")
    });
    chrome.storage.local.set({ [tab.url]: { checked: toggle.checked }});
  });

});