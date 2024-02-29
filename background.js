// This event is fired each time the user updates the URL in the browser address bar.
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url) {
        console.log('Tab updated: ', changeInfo.url);
    }
});