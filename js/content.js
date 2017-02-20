 'use strict';

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    changeColor(getColorArray(msg.rpc));
  });

function changeColor(colors) {
  var calenderGraphSvg = document.querySelector(".js-calendar-graph-svg");
	var gElements = calenderGraphSvg.querySelector("g").getElementsByTagName("g");
	var legendElements = document.querySelector(".legend").getElementsByTagName("li");

	[].forEach.call(gElements, function(calenderGraphSvg) {
		var rectElements = calenderGraphSvg.getElementsByTagName("rect");

		[].forEach.call(rectElements, function(rectElement){
			var fill = rectElement.getAttribute("fill");

			switch(fill) {
				case "#d6e685":
            rectElement.setAttribute("fill", colors[0]);
            break;
        case "#8cc665":
            rectElement.setAttribute("fill", colors[1]);
            break;
        case "#44a340":
            rectElement.setAttribute("fill", colors[2]);
            break;
        case "#1e6823":
            rectElement.setAttribute("fill", colors[3]);
            break;
        default:
            break;
			}
		});
	});

	[].forEach.call(legendElements, function(legendElement){
		var style = legendElement.style;
		var legendElementColor = style.backgroundColor;

		switch(legendElementColor) {
			case "rgb(214, 230, 133)":
                style.backgroundColor = colors[0];
                break;
            case "rgb(140, 198, 101)":
                style.backgroundColor = colors[1];
                break;
            case "rgb(68, 163, 64)":
                style.backgroundColor = colors[2];
                break;
            case "rgb(30, 104, 35)":
                style.backgroundColor = colors[3];
                break;
            default:
                break;
		}
	});
}

function getColorArray(colorId) {
    var colorArray = [];
    switch (colorId) {
        case "red":
            colorArray = redColors;
            break;
        case "blue":
            colorArray = blueColors;
            break;
        case "orange":
            colorArray = orangeColors;
            break;
        case "yellow":
            colorArray = yellowColors;
            break;
        default:
            break;
    }
    return colorArray
}
