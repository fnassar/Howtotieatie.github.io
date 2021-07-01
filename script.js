// scroll from homepage to page 1 upon clicking "click to begin"
var elem1 = document.getElementById("scrolldown1")
var video1 = document.getElementById("video1")
initialsketches();

elem1.addEventListener("click", () => {
	document.getElementById("page1").style.display = "block"
})


// move from page 1 to page 2 when video 1 has ended 
var elem2 = document.getElementById("scrolldown2")

video1.addEventListener("ended", () => {
	myScrollFunction();
})

// move from page 2 to page 3 when video 2 has ended
var elem3 = document.getElementById("scrolldown3")

video2.addEventListener("ended", () => {
	myScrollFunction();
})

//move from page 3 to closing screen when video 3 has ended\
var elem4 = document.getElementById("scrolldown4")

video3.addEventListener("ended", () => {
	myScrollFunction();
})

// adding jQuery auto-scroll when video ends 
function myScrollFunction() {
	window.scrollBy({
		top: window.innerHeight,
		behavior: 'smooth'
	});
}

video1 = document.getElementById("video1");
video2 = document.getElementById("video2");
video3 = document.getElementById("video3");


//script to manage the apparition of ps sketches 
video1.addEventListener("timeupdate", vid1sketches);
video2.addEventListener("timeupdate", vid2sketches);
video3.addEventListener("timeupdate", vid3sketches);

function nothing() { }

function initialsketches() {
	window.sketches = [false, false, false, false, false, false];
	initialsketches = nothing;
}

function vid1sketches() {
	if (video1.currentTime > 13 && !window.sketches[0]) {
		video1.pause();
		window.sketches[0] = true;
		var div = document.createElement("div");
		div.classList.add("overlay");
		var sec1 = document.getElementById("page1");
		sec1.appendChild(div);
		div.setAttribute("id", "div1")
		new p5(sketch1, 'div1')
	}
	if (video1.currentTime > 36 && !window.sketches[1]) {
		video1.pause();
		window.sketches[1] = true;
		var div2 = document.createElement("div");
		div2.classList.add("overlay");
		var sec1 = document.getElementById("page1");
		sec1.appendChild(div2);
		div2.setAttribute("id", "div2")
		new p5(sketch2, 'div2')
	}
}

function vid2sketches() {
	if (video2.currentTime > 7 && !window.sketches[2]) {
		video2.pause();
		window.sketches[2] = true;
		var div3 = document.createElement("div");
		div3.classList.add("overlay");
		var sec2 = document.getElementById("page2");
		sec2.appendChild(div3);
		div3.setAttribute("id", "div3")
		new p5(sketch3, 'div3')
	}
	if (video2.currentTime > 34 && !window.sketches[3]) {
		video2.pause();
		window.sketches[3] = true;
		var div4 = document.createElement("div");
		div4.classList.add("overlay");
		var sec2 = document.getElementById("page2");
		sec2.appendChild(div4);
		div4.setAttribute("id", "div4")
		new p5(sketch4, 'div4')
	}

}

function vid3sketches() {
	if (video3.currentTime > 18 && !window.sketches[4]) {
		video3.pause();
		window.sketches[4] = true;
		var div5 = document.createElement("div");
		div5.classList.add("overlay");
		var sec3 = document.getElementById("page3");
		sec3.appendChild(div5);
		div5.setAttribute("id", "div5")
		new p5(sketch5, 'div5')
	}
	if (video3.currentTime > 55 && !window.sketches[5]) {
		video3.pause();
		window.sketches[5] = true;
		var div6 = document.createElement("div");
		div6.classList.add("overlay");
		var sec3 = document.getElementById("page3");
		sec3.appendChild(div6);
		div6.setAttribute("id", "div6")
		new p5(sketch6, 'div6')
	}

}

function sketch1(p) {
	p.setup = function () {
		p.createCanvas(400, 400);
		assignValue();
	}

	function noop() {

	}

	function assignValue() {
		window.bigtietip = 170;
		window.smalltietip = 240;
		assignValue = noop;
	}

	p.draw = function () {
		p.background(220);
		p.noStroke();
		p.fill(255);
		shirt();
		p.stroke(180);
		p.fill(255);
		//objectives
		smalltie(170);
		bigtie(240);
		p.stroke(220)
		p.fill(0);
		smalltie(window.smalltietip);
		bigtie(window.bigtietip);
		//check if win
		if (Math.abs(smalltietip - 170) < 10 && Math.abs(bigtietip - 240) < 10) {
			var toDelete = document.getElementById("div1");
			video1.play()
			toDelete.remove();
		}

	}


	bigtiecoords = [[12, -90], [227, -5], [250, 0], [227, 5], [12, 90]];
	smalltiecoords = [[12, -90], [156, -4.5], [170, 0], [156, 4.5], [12, 90]];


	p.mouseDragged = function () {
		//pulling on left side (small tie)
		if (p.mouseX < 162 && p.mouseX > 138 && p.mouseY > 100) {
			window.smalltietip = p.mouseY - 100;
			window.bigtietip = 420 - smalltietip;
		}
		//pulling on right side (big tie)
		if (p.mouseX < 270 && p.mouseX > 230 && p.mouseY > 100) {
			window.bigtietip = p.mouseY - 100;
			window.smalltietip = 420 - bigtietip;
		}

	}

	//these functions draw the tie from a tip coordinate upwards. the small tie is flat, the big tie uses diagonals of five degrees pointing upwards
	function bigtie(tip) {
		p.beginShape();
		p.vertex(250, 100 + tip);
		p.vertex(270, 100 + tip - 25);
		//project rays until y=100
		p.vertex(270 - (tip * Math.sin(0.03)), 100)
		p.vertex(230 + (tip * Math.sin(0.03)), 100)
		//p.CLOSE shape
		p.vertex(230, 100 + tip - 25);
		p.endShape(p.CLOSE);
	}



	function smalltie(tip) {
		p.beginShape();
		p.vertex(150, 100 + tip);
		p.vertex(162, 100 + tip - 15);
		//project rays until y=100
		p.vertex(162, 100)
		p.vertex(138, 100)
		//p.CLOSE shape
		p.vertex(138, 100 + tip - 15);
		p.endShape(p.CLOSE);
	}


	function shirt() {
		p.beginShape();
		p.vertex(0, 100);
		p.vertex(162, 100);
		p.vertex(162, 70);
		p.vertex(190, 70);
		p.vertex(190, 100);
		p.vertex(210, 100);
		p.vertex(210, 70);
		p.vertex(242, 70);
		p.vertex(242, 100);
		p.vertex(400, 100);
		p.vertex(400, 190);
		p.vertex(300, 190);
		p.vertex(300, 400);
		p.vertex(100, 400);
		p.vertex(100, 190);
		p.vertex(0, 190);

		p.endShape(p.CLOSE);
		p.stroke(220);
		p.line(200, 100, 200, 400);

	}

}

function sketch2(p) {

	p.setup = function () {
		p.createCanvas(400, 400);
		assignValue();
	}

	function noop() {

	}

	function assignValue() {
		window.bigtieangle = Math.PI / 2;
		window.smalltieangle = Math.PI / 2;
		assignValue = noop;
	}

	p.draw = function () {
		p.background(220);
		p.noStroke();
		p.fill(255);
		shirt();
		p.stroke(180);
		p.fill(255);
		//objectives
		smalltie(0.78);
		bigtie(2.35);
		p.stroke(220)
		p.fill(0);
		smalltie(window.smalltieangle);
		bigtie(window.bigtieangle);
		//check if win
		if (Math.abs(smalltieangle - 0.78) < 0.05 && Math.abs(bigtieangle - 2.35) < 0.05) {
			var toDelete = document.getElementById("div2");
			video1.play()
			toDelete.remove();
		}

	}

	//coordinates in this case are r, angle (polar) from the base of the tie
	bigtiecoords = [[12, -90], [227, -5], [250, 0], [227, 5], [12, 90]];
	smalltiecoords = [[12, -90], [156, -4.5], [170, 0], [156, 4.5], [12, 90]];

	function bigtie(angle) {
		p.beginShape();
		for (var i = 0; i < 5; i++) {
			coord = bigtiecoords[i];
			var polar = coord[1] * Math.PI / 180;
			p.vertex(250 + coord[0] * Math.cos(angle + polar), 100 + coord[0] * Math.sin(angle + polar));
		}
		p.endShape(p.CLOSE);
	}

	p.mouseDragged = function () {
		var mouseAngleToBigTie = Math.atan((p.mouseY - 100) / (p.mouseX - 250));
		if (mouseAngleToBigTie < 0 && p.mouseY > 100) {
			mouseAngleToBigTie = Math.PI + mouseAngleToBigTie;
		}
		if (mouseAngleToBigTie > 0 && p.mouseY < 100) {
			mouseAngleToBigTie = 0 - Math.PI + mouseAngleToBigTie;
		}
		if (Math.abs(mouseAngleToBigTie - window.bigtieangle) < 0.14) {
			window.bigtieangle = mouseAngleToBigTie;
		}

		var mouseAngleToSmallTie = Math.atan((p.mouseY - 100) / (p.mouseX - 150));
		if (mouseAngleToSmallTie < 0 && p.mouseY > 100) {
			mouseAngleToSmallTie = Math.PI + mouseAngleToSmallTie;
		}
		if (mouseAngleToSmallTie > 0 && p.mouseY < 100) {
			mouseAngleToSmallTie = 0 - Math.PI + mouseAngleToSmallTie;
		}
		if (Math.abs(mouseAngleToSmallTie - window.smalltieangle) < 0.12) {
			window.smalltieangle = mouseAngleToSmallTie;
		}

	}

	function smalltie(angle) {
		p.beginShape();
		for (var i = 0; i < 5; i++) {
			coord = smalltiecoords[i];
			var polar = coord[1] * Math.PI / 180;
			p.vertex(150 + coord[0] * Math.cos(angle + polar), 100 + coord[0] * Math.sin(angle + polar));
		}
		p.endShape(p.CLOSE);
	}
	function shirt() {
		p.beginShape();
		p.vertex(0, 100);
		p.vertex(162, 100);
		p.vertex(162, 70);
		p.vertex(190, 70);
		p.vertex(190, 100);
		p.vertex(210, 100);
		p.vertex(210, 70);
		p.vertex(242, 70);
		p.vertex(242, 100);
		p.vertex(400, 100);
		p.vertex(400, 190);
		p.vertex(300, 190);
		p.vertex(300, 400);
		p.vertex(100, 400);
		p.vertex(100, 190);
		p.vertex(0, 190);

		p.endShape(p.CLOSE);
		p.stroke(220);
		p.line(200, 100, 200, 400);

	}

}

function sketch3(p) {

	p.setup = function () {
		p.createCanvas(400, 400);
		assignValue();
	}

	function noop() {

	}

	function assignValue() {
		window.horizontal = 40;
		window.currenttietip = [0, 0];
		assignValue = noop;
	}
	p.draw = function () {
		p.background(220);
		p.noStroke();
		p.fill(255);
		shirt();
		p.stroke(180);
		p.fill(255);
		//objectives
		bigtie(190, false);
		p.stroke(220)
		p.fill(0);
		//small tie is static, called between two layers of big tie

		bigtie(window.horizontal, true);
		p.fill(255,0,0);
		p.ellipse(window.currenttietip[0],window.currenttietip[1], 10,10);
		//check if win
		if (Math.abs(window.horizontal - 190) < 10) {
			var toDelete = document.getElementById("div3");
			video2.play()
			toDelete.remove();
		}
	}


	bigtiecoords = [[12, -90], [227, -5], [250, 0], [227, 5], [12, 90]];
	bigtiepart1 = [[12, -90], [227, -5], [250, 0], [227, 5], [12, 90]]
	smalltiecoords = [[12, -90], [156, -4.5], [170, 0], [156, 4.5], [12, 90]];

	p.mouseDragged = function () {
		if (Math.abs(p.mouseX - window.currenttietip[0]) < 20 && Math.abs(p.mouseY - window.currenttietip[1]) < 20 && horizontal >= 25) {
			// this equation was the result of a lot of hard trigonometry i dont want to repeat ever
			window.horizontal = (p.mouseX - 38.71) / 1.768;
		}
	}

	function bigtie(horizontal, active) {
		angle = 2.38;
		tielength = 280;
		//calculate base points
		coord = bigtiecoords[0];
		var polar = coord[1] * Math.PI / 180;
		base1x = 230 + coord[0] * Math.cos(angle + polar);
		base1y = 100 + coord[0] * Math.sin(angle + polar);
		coord = bigtiecoords[4];
		polar = coord[1] * Math.PI / 180;
		base2x = 230 + coord[0] * Math.cos(angle + polar);
		base2y = 100 + coord[0] * Math.sin(angle + polar);

		// calculate the points of fold based on horizontal value
		corner1 = [tielength - 13 - horizontal, -3];
		corner1polar = corner1[1] * Math.PI / 180;
		corner1x = base1x + corner1[0] * Math.cos(angle + corner1polar);
		corner1y = base1y + corner1[0] * Math.sin(angle + corner1polar);
		corner2 = [tielength - 13 - horizontal, 3];
		corner2polar = corner2[1] * Math.PI / 180;
		corner2x = base2x + corner2[0] * Math.cos(angle + corner2polar);
		corner2y = base2y + corner2[0] * Math.sin(angle + corner2polar);

		// part 2 - from fold to the right
		p.beginShape();
		corner3polar = -3 * Math.PI / 180;
		p.vertex(corner1x, corner1y);
		p.vertex(corner2x, corner2y);
		corner3x = corner2x + horizontal * Math.cos(corner3polar);
		corner3y = corner2y + horizontal * Math.sin(corner3polar);
		corner4x = corner3x;
		corner4y = corner1y - horizontal * Math.sin(corner3polar);
		p.vertex(corner3x, corner3y);
		p.vertex(corner3x + 25, (corner3y + corner4y) / 2);
		p.vertex(corner4x, corner4y);

		p.endShape(p.CLOSE);


		smalltie(1.2);

		// part 1 of the tie - fron neck to fold

		p.beginShape();
		p.vertex(base1x, base1y);
		p.vertex(corner1x, corner1y);
		p.vertex(corner2x, corner2y);
		p.vertex(base2x, base2y)
		p.endShape(p.CLOSE);

		if (active) {
			window.currenttietip = [corner3x + 25, (corner3y + corner4y) / 2];
		}
	}

	function smalltie(angle) {
		p.beginShape();
		for (var i = 0; i < 5; i++) {
			coord = smalltiecoords[i];
			var polar = coord[1] * Math.PI / 180;
			p.vertex(180 + coord[0] * Math.cos(angle + polar), 100 + coord[0] * Math.sin(angle + polar));
		}
		p.endShape(p.CLOSE);
	}
	function shirt() {
		p.beginShape();
		p.vertex(0, 100);
		p.vertex(162, 100);
		p.vertex(162, 70);
		p.vertex(190, 70);
		p.vertex(190, 100);
		p.vertex(210, 100);
		p.vertex(210, 70);
		p.vertex(242, 70);
		p.vertex(242, 100);
		p.vertex(400, 100);
		p.vertex(400, 190);
		p.vertex(300, 190);
		p.vertex(300, 400);
		p.vertex(100, 400);
		p.vertex(100, 190);
		p.vertex(0, 190);

		p.endShape(p.CLOSE);
		p.stroke(220);
		p.line(200, 100, 200, 400);

	}

}

function sketch4(p) {

	p.setup = function () {
		p.createCanvas(400, 400);
		assignValue();
	}

	function noop() {

	}

	function assignValue() {
		window.flip = 25;
		window.currenttietip = [0, 0];
		assignValue = noop;
	}

	p.draw = function () {
		p.background(220);
		p.noStroke();
		p.fill(255);
		shirt();
		p.stroke(180);
		p.fill(255);
		//objectives
		bigtie(340, false);
		p.stroke(220)
		p.fill(0);
		//small tie is static, called between two layers of big tie

		bigtie(window.flip, true);
		p.fill(255,0,0);
		p.ellipse(window.currenttietip[0],window.currenttietip[1], 10,10);
		//check if win
		if (Math.abs(window.flip - 340) < 5) {
			var toDelete = document.getElementById("div4");
			video2.play()
			toDelete.remove();
		}
	}


	bigtiecoords = [[12, -90], [227, -5], [250, 0], [227, 5], [12, 90]];
	bigtiepart1 = [[12, -90], [227, -5], [250, 0], [227, 5], [12, 90]]
	smalltiecoords = [[12, -90], [156, -4.5], [170, 0], [156, 4.5], [12, 90]];

	p.mouseDragged = function () {
		if (Math.abs(p.mouseX - window.currenttietip[0]) < 20 && Math.abs(p.mouseY - window.currenttietip[1]) < 20) {
			window.flip = 364 - p.mouseX;
		}
	}

	function bigtie(flip, active) {
		//this code is inherited from tie3.js, but is locked at the crossed position




		angle = 2.38;
		tielength = 280;
		horizontal = 196;
		//calculate base points
		coord = bigtiecoords[0];
		var polar = coord[1] * Math.PI / 180;
		base1x = 230 + coord[0] * Math.cos(angle + polar);
		base1y = 100 + coord[0] * Math.sin(angle + polar);
		coord = bigtiecoords[4];
		polar = coord[1] * Math.PI / 180;
		base2x = 230 + coord[0] * Math.cos(angle + polar);
		base2y = 100 + coord[0] * Math.sin(angle + polar);

		// calculate the points of fold based on horizontal value
		corner1 = [tielength - 13 - horizontal, -3];
		corner1polar = corner1[1] * Math.PI / 180;
		corner1x = base1x + corner1[0] * Math.cos(angle + corner1polar);
		corner1y = base1y + corner1[0] * Math.sin(angle + corner1polar);
		corner2 = [tielength - 13 - horizontal, 3];
		corner2polar = corner2[1] * Math.PI / 180;
		corner2x = base2x + corner2[0] * Math.cos(angle + corner2polar);
		corner2y = base2y + corner2[0] * Math.sin(angle + corner2polar);
		corner3polar = -3 * Math.PI / 180;
		corner3x = corner2x + horizontal * Math.cos(corner3polar);
		corner3y = corner2y + horizontal * Math.sin(corner3polar);
		corner4x = corner3x;
		corner4y = corner1y - horizontal * Math.sin(corner3polar);




		// part 2 - from fold to the right
		p.beginShape();
		p.vertex(corner1x, corner1y);
		p.vertex(corner2x, corner2y);
		corner3y = corner3y + flip / 2 * Math.sin(0.05)
		corner4y = corner4y - flip / 2 * Math.sin(0.05)
		p.vertex(corner3x - flip / 2 + 25, corner3y);
		p.vertex(corner4x - flip / 2 + 25, corner4y);

		p.endShape(p.CLOSE);


		smalltie(1.2);

		// part 1 of the tie - fron neck to fold

		p.beginShape();
		p.vertex(base1x, base1y);
		p.vertex(corner1x, corner1y);
		p.vertex(corner2x, corner2y);
		p.vertex(base2x, base2y)
		p.endShape(p.CLOSE);

		//part 3 - overfold
		p.beginShape();
		p.vertex(corner3x - flip / 2 + 25, corner3y);
		//3 degree diagonal
		p.vertex((corner3x - flip / 2 + 25) - flip / 2 * Math.cos(-0.05), corner3y + flip / 2 * Math.sin(-0.05))
		p.vertex(corner3x - flip, (corner3y + corner4y) / 2)
		//3 degree diagonal
		p.vertex((corner4x - flip / 2 + 25) - flip / 2 * Math.cos(-0.05), corner4y - flip / 2 * Math.sin(-0.05))
		p.vertex(corner4x - flip / 2 + 25, corner4y);
		p.endShape(p.CLOSE);

		if (active) {
			window.currenttietip = [corner3x - flip, (corner3y + corner4y) / 2];

		}


	}



	function smalltie(angle) {
		p.beginShape();
		for (var i = 0; i < 5; i++) {
			coord = smalltiecoords[i];
			var polar = coord[1] * Math.PI / 180;
			p.vertex(180 + coord[0] * Math.cos(angle + polar), 100 + coord[0] * Math.sin(angle + polar));
		}
		p.endShape(p.CLOSE);
	}
	function shirt() {
		p.beginShape();
		p.vertex(0, 100);
		p.vertex(162, 100);
		p.vertex(162, 70);
		p.vertex(190, 70);
		p.vertex(190, 100);
		p.vertex(210, 100);
		p.vertex(210, 70);
		p.vertex(242, 70);
		p.vertex(242, 100);
		p.vertex(400, 100);
		p.vertex(400, 190);
		p.vertex(300, 190);
		p.vertex(300, 400);
		p.vertex(100, 400);
		p.vertex(100, 190);
		p.vertex(0, 190);

		p.endShape(p.CLOSE);
		p.stroke(220);
		p.line(200, 100, 200, 400);

	}

}

function sketch5(p) {

	p.setup = function () {
		p.createCanvas(400, 400);
		assignValue();
	}

	function noop() {

	}

	function assignValue() {
		window.vertical = 25;
		window.currenttietip = [0, 0];
		assignValue = noop;
	}

	p.draw = function () {
		yoffset = 40;
		p.background(220);
		p.noStroke();
		p.fill(255);
		shirt();
		p.stroke(180);
		p.fill(255);
		//objectives
		bigtie(140, false);
		p.stroke(220)
		p.fill(0);
		//small tie is static, called between two layers of big tie

		bigtie(window.vertical, true);
		p.fill(255,0,0);
		p.ellipse(window.currenttietip[0],window.currenttietip[1], 10,10);
		//check if win
		if (Math.abs(window.vertical - 140) < 5) {
			var toDelete = document.getElementById("div5");
			video3.play()
			toDelete.remove();
		}

	}


	bigtiecoords = [[12, -90], [227, -5], [250, 0], [227, 5], [12, 90]];
	bigtiepart1 = [[12, -90], [227, -5], [250, 0], [227, 5], [12, 90]]
	smalltiecoords = [[12, -90], [156, -4.5], [170, 0], [156, 4.5], [12, 90]];

	p.mouseDragged = function () {
		if (Math.abs(p.mouseX - window.currenttietip[0]) < 20 && Math.abs(p.mouseY - window.currenttietip[1]) < 20) {
			//another equation reached by a regrettable amount of hard trigonometry
			window.vertical = (p.mouseY - 125.7 - yoffset) / -0.984;
		}
	}

	function bigtie(vertical, active) {
		//this code is inherited from tie4.js, but is locked at the flipped over position

		yoffset = 40;


		angle = 2.38;
		tielength = 280;
		horizontal = 196;
		flip = 340
		//calculate base points
		coord = bigtiecoords[0];
		var polar = coord[1] * Math.PI / 180;
		base1x = 230 + coord[0] * Math.cos(angle + polar);
		base1y = 100 + coord[0] * Math.sin(angle + polar);
		coord = bigtiecoords[4];
		polar = coord[1] * Math.PI / 180;
		base2x = 230 + coord[0] * Math.cos(angle + polar);
		base2y = 100 + coord[0] * Math.sin(angle + polar);

		// calculate the points of fold based on horizontal value
		corner1 = [tielength - 13 - horizontal, -3];
		corner1polar = corner1[1] * Math.PI / 180;
		corner1x = base1x + corner1[0] * Math.cos(angle + corner1polar);
		corner1y = base1y + corner1[0] * Math.sin(angle + corner1polar);
		corner2 = [tielength - 13 - horizontal, 3];
		corner2polar = corner2[1] * Math.PI / 180;
		corner2x = base2x + corner2[0] * Math.cos(angle + corner2polar);
		corner2y = base2y + corner2[0] * Math.sin(angle + corner2polar);
		corner3polar = -3 * Math.PI / 180;
		corner3x = corner2x + horizontal * Math.cos(corner3polar);
		corner3y = corner2y + horizontal * Math.sin(corner3polar);
		corner4x = corner3x;
		corner4y = corner1y - horizontal * Math.sin(corner3polar);
		corner3y = corner3y + flip / 2 * Math.sin(0.05)
		corner4y = corner4y - flip / 2 * Math.sin(0.05)

		corner5x = (corner3x - flip / 2 + 25) - flip / 2 * Math.cos(-0.05);
		corner5y = corner3y + flip / 2 * Math.sin(-0.05)
		corner6x = (corner4x - flip / 2 + 25) - flip / 2 * Math.cos(-0.05)
		corner6y = corner4y - flip / 2 * Math.sin(-0.05)
		difference = corner6y - corner5y;

		corner5x = corner5x + (vertical - 25) * Math.cos(-0.05);
		corner5y = corner5y - (vertical - 25) * Math.sin(-0.05);

		corner7x = corner5x + vertical * Math.sin(-0.05);
		corner7y = corner5y - (vertical - 25) * Math.cos(-0.05);
		uppertipx = corner7x + 20;
		uppertipy = corner7y - 25;
		corner9x = corner7x + difference;
		corner9y = corner7y;
		corner6x = corner9x + (difference + vertical - 25) * Math.sin(-0.05);

		//build y based on x
		corner6y = corner4y;



		//part 4 - fold to above
		p.beginShape();
		//connection down
		p.vertex(corner5x, corner5y + yoffset);

		//tip itself
		p.vertex(corner7x, corner7y + yoffset);
		p.vertex(uppertipx, uppertipy + yoffset);
		p.vertex(corner9x, corner9y + yoffset);

		//todo corner6
		p.vertex(corner6x, corner6y + yoffset);

		p.endShape(p.CLOSE);

		// part 2 - from fold to the right
		p.beginShape();
		p.vertex(corner1x, corner1y + yoffset);
		p.vertex(corner2x, corner2y + yoffset);

		p.vertex(corner3x - flip / 2 + 25, corner3y + yoffset);
		p.vertex(corner4x - flip / 2 + 25, corner4y + yoffset);

		p.endShape(p.CLOSE);


		smalltie(1.2);

		// part 1 of the tie - fron neck to fold

		p.beginShape();
		p.vertex(base1x, base1y + yoffset);
		p.vertex(corner1x, corner1y + yoffset);
		p.vertex(corner2x, corner2y + yoffset);
		p.vertex(base2x, base2y + yoffset)
		p.endShape(p.CLOSE);

		//part 3 - overfold
		p.beginShape();
		p.vertex(corner3x - flip / 2 + 25, corner3y + yoffset);
		//3 degree diagonal
		p.vertex(corner5x, corner5y + yoffset)
		//3 degree diagonal
		p.vertex(corner6x, corner6y + yoffset)
		p.vertex(corner4x - flip / 2 + 25, corner4y + yoffset);
		p.endShape(p.CLOSE);

		if (active) {
			window.currenttietip = [uppertipx, uppertipy + yoffset];

		}


	}



	function smalltie(angle) {
		p.beginShape();
		for (var i = 0; i < 5; i++) {
			coord = smalltiecoords[i];
			var polar = coord[1] * Math.PI / 180;
			p.vertex(180 + coord[0] * Math.cos(angle + polar), yoffset + 100 + coord[0] * Math.sin(angle + polar));
		}
		p.endShape(p.CLOSE);
	}
	function shirt() {
		p.beginShape();
		p.vertex(0, yoffset + 100);
		p.vertex(162, yoffset + 100);
		p.vertex(162, yoffset + 70);
		p.vertex(190, yoffset + 70);
		p.vertex(190, yoffset + 100);
		p.vertex(210, yoffset + 100);
		p.vertex(210, yoffset + 70);
		p.vertex(242, yoffset + 70);
		p.vertex(242, yoffset + 100);
		p.vertex(400, yoffset + 100);
		p.vertex(400, yoffset + 190);
		p.vertex(300, yoffset + 190);
		p.vertex(300, yoffset + 400);
		p.vertex(100, yoffset + 400);
		p.vertex(100, yoffset + 190);
		p.vertex(0, yoffset + 190);

		p.endShape(p.CLOSE);
		p.stroke(220);
		p.line(200, 100, 200, 400);

	}
}

function sketch6(p) {

	p.setup = function () {
		p.createCanvas(400, 400);
		assignValue();
	}

	function noop() {

	}

	function assignValue() {
		window.vertical = 25;
		window.currenttietip = [0, 0];
		assignValue = noop;
	}

	p.draw = function () {
		p.background(220);
		p.noStroke();
		p.fill(255);
		shirt();
		p.stroke(180);
		p.fill(255);
		//objectives
		bigtie(300, false);
		p.stroke(220)
		p.fill(0);
		//small tie is static, called between two layers of big tie
		
		bigtie(window.vertical, true);
		p.fill(255,0,0);
		p.ellipse(window.currenttietip[0],window.currenttietip[1], 10,10);
		//check if win
		if (Math.abs(window.vertical - 300) < 5) {
			var toDelete = document.getElementById("div6");
			video3.play()
			toDelete.remove();
		}

	}


	bigtiecoords = [[12, -90], [227, -5], [250, 0], [227, 5], [12, 90]];
	bigtiepart1 = [[12, -90], [227, -5], [250, 0], [227, 5], [12, 90]]



	p.mouseDragged = function () {
		if (Math.abs(p.mouseX - window.currenttietip[0]) < 20 && Math.abs(p.mouseY - window.currenttietip[1]) < 20) {
			//another equation reached by a regrettable amount of hard trigonometry
			window.vertical = (p.mouseY - 21.2) / 0.998;
		}
	}

	function bigtie(verticalflip, active) {
		//this code is completely reworked from the last sequence
		//behind bottom - neck section
		p.beginShape();
		p.vertex(175, 140);
		p.vertex(162, 140);
		p.vertex(140, 140);
		p.vertex(182, 168);
		p.endShape(p.CLOSE);
		p.beginShape();
		p.vertex(225, 140);
		p.vertex(250, 140);
		p.vertex(218, 165);
		p.endShape(p.CLOSE);

		//bottom - small tie
		smalltie(Math.PI / 2);

		tielength = 140;
		//layer 2 - big tie
		p.beginShape();
		//right basepoint
		p.vertex(216, 145);

		//3degree slope
		fold1x = 216 + (tielength - verticalflip / 2) * Math.sin(0.05);
		fold1y = 145 - (tielength - verticalflip / 2) * Math.cos(0.05);
		p.vertex(fold1x, fold1y);


		//3degree slope
		fold2x = 184 - (tielength - verticalflip / 2) * Math.sin(0.05);
		fold2y = fold1y;
		p.vertex(fold2x, fold2y);

		//left basepoint
		p.vertex(184, 145);
		p.endShape(p.CLOSE);

		//layer 2.5 - big tie folded down
		p.beginShape();
		rightcornerx = fold1x + (verticalflip / 2) * Math.sin(0.05);
		rightcornery = fold1y + (verticalflip / 2) * Math.cos(0.05);
		leftcornerx = fold2x - (verticalflip / 2) * Math.sin(0.05);
		leftcornery = rightcornery;
		tipx = (leftcornerx + rightcornerx) / 2;
		tipy = rightcornery + 25;

		p.vertex(fold1x, fold1y);
		p.vertex(rightcornerx, rightcornery);
		p.vertex(tipx, tipy);
		p.vertex(leftcornerx, leftcornery);
		p.vertex(fold2x, fold2y);

		p.endShape(p.CLOSE);

		//layer 3 - loop
		p.beginShape();
		p.vertex(175, 140);
		p.vertex(225, 140);
		p.vertex(218, 170);
		p.vertex(182, 174);
		p.endShape(p.CLOSE);

		if (active) {
			window.currenttietip = [tipx, tipy];

		}


	}


	smalltiecoords = [[12, -90], [156, -4.5], [170, 0], [156, 4.5], [12, 90]];
	function smalltie(angle) {
		p.beginShape();
		for (var i = 0; i < 5; i++) {
			coord = smalltiecoords[i];
			var polar = coord[1] * Math.PI / 180;
			p.vertex(200 + coord[0] * Math.cos(angle + polar), 140 + coord[0] * Math.sin(angle + polar));
		}
		p.endShape(p.CLOSE);
	}
	function shirt() {
		p.beginShape();
		p.vertex(0, 140);
		p.vertex(162, 140);
		p.vertex(162, 110);
		p.vertex(190, 110);
		p.vertex(190, 140);
		p.vertex(210, 140);
		p.vertex(210, 110);
		p.vertex(242, 110);
		p.vertex(242, 140);
		p.vertex(400, 140);
		p.vertex(400, 230);
		p.vertex(300, 230);
		p.vertex(300, 400);
		p.vertex(100, 400);
		p.vertex(100, 230);
		p.vertex(0, 230);

		p.endShape(p.CLOSE);
		p.stroke(220);
		p.line(200, 100, 200, 400);

	}

	
}
function scrolltop()
{
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	  });
}