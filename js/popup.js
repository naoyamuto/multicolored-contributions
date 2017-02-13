(function() {
    'use strict';

    var calenderGraphSvg = document.querySelector(".js-calendar-graph-svg");
	var gElements = calenderGraphSvg.querySelector("g").getElementsByTagName("g");
	var legendElements = document.querySelector(".legend").getElementsByTagName("li");

	[].forEach.call(gElements, function(calenderGraphSvg) {
		var rectElements = calenderGraphSvg.getElementsByTagName("rect");
		
		[].forEach.call(rectElements, function(rectElement){
			var fill = rectElement.getAttribute("fill");

			switch(fill) {
				case "#d6e685":
                    rectElement.setAttribute("fill", "#e68585");
                    break;
                case "#8cc665":
                    rectElement.setAttribute("fill", "#c66565");
                    break;
                case "#44a340":
                    rectElement.setAttribute("fill", "#a23f3f");
                    break;
                case "#1e6823":
                    rectElement.setAttribute("fill", "#681d1d");
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
                style.backgroundColor = "#e68585";
                break;
            case "rgb(140, 198, 101)":
                style.backgroundColor = "#c66565";
                break;
            case "rgb(68, 163, 64)":
                style.backgroundColor = "#a23f3f";
                break;
            case "rgb(30, 104, 35)":
                style.backgroundColor = "#681d1d";
                break;
            default:
                break;
		}
	});
}());
