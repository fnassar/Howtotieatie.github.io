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
// video2.addEventListener("timeupdate", vid2sketches);
// video3.addEventListener("timeupdate", vid3sketches);

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

	p.setup = function() {
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

	p.draw = function() {
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

	p.mouseDragged = function() {
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