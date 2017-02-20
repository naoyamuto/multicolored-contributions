'use strict';

function onClick(e) {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    var id = e.target.id;
    chrome.tabs.sendMessage(tabs[0].id, {rpc: id}, (msg) => {
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var classes = document.getElementsByClassName('col-xs-3');
  for (var i = 0; i < classes.length; i++) {
    classes[i].addEventListener('click', onClick , false);
  }
});
