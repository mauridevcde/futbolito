
// canvas vars
var canvas = document.getElementById("cancha");

var ctx = canvas.getContext("2d");

var cw = canvas.width;
var ch = canvas.height;

// canvas styles
ctx.strokeStyle = 'skyblue';
ctx.fillStyle = 'blue';

// "x": 309.04998779296875,
// 			"y": 462.6999969482422
// 		},
// 		{
// 			"x": 0,
// 			"y": 0

var requestID
// animating vars
var pct = 100;
var startX = 41.04998779296875;
var startY = 350.6999969482422;

var endX = 237.04998779296875;
var endY = 222.6999969482422;

var dx = endX - startX;
var dy = endY - startY;


// start animation loop running
//requestAnimationFrame(animate);
function dibujoLinea(startX, startY, endX, endY) {
	ctx.beginPath();
	ctx.moveTo(startX, startY);
	ctx.lineTo(endX, endY);
	ctx.stroke();
}
function dibujoCirculo(x, y) {
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, Math.PI * 2);
	ctx.fill()
}

// constantly running loop
// will animate dot from startX,startY to endX,endY 
function animate(time) {
	requestID = requestAnimationFrame(animate);
	// demo: rerun animation	
	if (++pct > 100) { pct = 0 }


	// update
	x = startX + dx * pct / 100;
	y = startY + dy * pct / 100;

	console.log('x: ' + x + ' y: ' + y);

	// draw
	ctx.clearRect(0, 0, cw, ch);
	dibujoLinea(startX, startY, endX, endY)
	dibujoCirculo(x, y)

	// request another animation loop

	if (pct == 100) {
		//cancelAnimationFrame(requestID);
		startX = 0
		startY = 0
		console.log('dentro de pct2 FULL');
		//inicial
		startX = 237.04998779296875
		startY = 222.6999969482422
		//final
		endX = 309.04998779296875
		endY = 462.6999969482422

		if (++pct > 100) { pct = 0 }

		dx = endX - startX;
		dy = endY - startY;
		// update
		x = startX + dx * pct / 100;
		y = startY + dy * pct / 100;

		//console.log('x: ' + x + ' y: ' + y);

		// draw
		ctx.clearRect(0, 0, cw, ch);
		dibujoLinea(startX, startY, endX, endY)
		dibujoCirculo(x, y)

		if (pct == 55) {
			console.log('pct FULL', pct)
			cancelAnimationFrame(requestID)
		}

	}

	console.log("pct", pct);
}



window.startBtn.addEventListener("click", function (e) {
	e.preventDefault();
	requestID = requestAnimationFrame(animate);

})

window.stopBtn.addEventListener("click", function (e) {
	e.preventDefault();
	cancelAnimationFrame(requestID);
});

window.resetBtn.addEventListener("click", function (e) {
	e.preventDefault();
	// update
	//requestID = cancelAnimationFrame(requestID);

	ctx.clearRect(0, 0, cw, ch);
	pct = 101
	startX = 41.04998779296875;
	startY = 350.6999969482422;

	endX = 237.04998779296875;
	endY = 222.6999969482422;

	x = startX
	y = startY

	dx = endX - startX;
	dy = endY - startY;
	dibujoLinea(startX, startY, endX, endY)
	dibujoCirculo(x, y)


});