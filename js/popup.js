'use strict';

function onClick(e) {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        var className = e.target.className;
        chrome.tabs.sendMessage(tabs[0].id, {rpc: className}, (msg) => {
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var lists = document.getElementsByTagName("li");
    for (var i = 0; i < lists.length; i++) {
        lists[i].addEventListener('click', onClick , false);
    }
});
