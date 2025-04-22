chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getTabURL") {
    sendResponse({ url: sender.tab.url });
  }
});