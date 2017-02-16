'use strict';

function onClick() {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {rpc: 'red'}, (msg) => {
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var classes = document.getElementsByClassName('col-xs-3');
  for (var i = 0; i < classes.length; i++) {
    classes[i].addEventListener('click', onClick , false);
  }
});
