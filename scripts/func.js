/* FUNCTIONS */
//var fs = require('fs');
var _img = '<img src="./src/img_bgr.png" />';

function uploadBackground() {

}

function test() {
	console.log("Test")
	var bgr_canvas = document.getElementById('canvas-background');
	var bgr_context = bgr_canvas.getContext('2d');
	let bgr_data = bgr_context.getImageData(0,0,bgr_canvas.width,bgr_canvas.height);
	let bgr_rgba = bgr_data.data;
	console.log(bgr_rgba)

	var img_canvas = document.getElementById('canvas-image');
	var img_context = img_canvas.getContext('2d');
	let img_data = img_context.getImageData(0,0,img_canvas.width,img_canvas.height);
	let img_rgba = img_data.data;
	console.log(img_rgba)

	var res_canvas = document.getElementById('canvas-result');
	var res_context = res_canvas.getContext('2d');
	let res_data = res_context.getImageData(0,0,res_canvas.width,res_canvas.height);
	let res_rgba = res_data.data;
	console.log(res_rgba)

	for (var i=0; i < bgr_rgba.length;i += 4) {
		if (bgr_rgba[i+0] != img_rgba[i+0]
			||  bgr_rgba[i+1] != img_rgba[i+1]
			||  bgr_rgba[i+2] != img_rgba[i+2]
			||  bgr_rgba[i+3] != img_rgba[i+3]
		) {
			//var color = getColor();
			res_rgba[i+0] = img_rgba[i+0];
			res_rgba[i+1] = img_rgba[i+1];
			res_rgba[i+2] = img_rgba[i+2];
			res_rgba[i+3] = img_rgba[i+3];
		}
	}

	bgr_context.putImageData(bgr_data,0,0);
	img_context.putImageData(img_data,0,0);
	res_context.putImageData(res_data,0,0);
}

var getColor = function() {
	return [0,255,255,255];
}
