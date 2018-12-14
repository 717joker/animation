$(function() {

	loadFontSize();

	window.onresize = function() {
		loadFontSize();
	}

})

var loadFontSize = function() {
	var desw = 640;
	var devw = document.documentElement.clientWidth;
	if(devw > 640) {
		document.documentElement.style.fontSize = "100px";
	}else{
		document.documentElement.style.fontSize = devw / desw * 100 + "px";		
	}
}