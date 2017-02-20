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

        [].forEach.call(rectElements, function(rectElement) {
            var fill = rectElement.getAttribute("fill");

            switch (fill) {
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

    [].forEach.call(legendElements, function(legendElement) {
        var style = legendElement.style;
        var legendElementColor = style.backgroundColor;

        switch (legendElementColor) {
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
    // Color Definition
    const strawberrys = ["#ff80bf", "#ff2b95", "#ff0080", "#bb004b"];
    const skys = ["#cae7f2", "#6cbad8", "#1f91be", "#007fb1"];
    const honeys = ["#F9DFD5", "#EDA184", "#E06A3B", "#DA5019"];
    const indigos = ["#80bfff", "#5678AF", "#2D579A", "#002b55"];
    const chocolates = ["#ffbf80", "#ff952b", "#d56a00", "#4b251a"];
    const lavenders = ["#f1b8f1", "#ea95ea", "#e272e2", "#b123b1"];

    var colorArray = [];
    switch (colorId) {
        case "strawberry":
            colorArray = strawberrys;
            break;
        case "sky":
            colorArray = skys;
            break;
        case "honey":
            colorArray = honeys;
            break;
        case "indigo":
            colorArray = indigos;
            break;
        case "chocolate":
            colorArray = chocolates;
            break;
        case "lavender":
            colorArray = lavenders;
            break;
        default:
            break;
    }
    return colorArray
}
