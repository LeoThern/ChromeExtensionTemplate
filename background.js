chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "myExtensionId",
        title: "open video source", 
        contexts: ["video"], 
    })
});

chrome.contextMenus.onClicked.addListener(function(info, tab){
    if (info.menuItemId == "myExtensionId"){
        chrome.tabs.create({
            index: tab.index + 1,
            url: info.srcUrl
        });
    }
})