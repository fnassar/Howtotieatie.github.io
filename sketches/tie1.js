function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent("tie3");
    assignValue();
}

function noop() {

}

function assignValue() {
    window.bigtietip = 170;
    window.smalltietip = 240;
    assignValue = noop;
}

function draw() {
    background(220);
    noStroke();
    fill(255);
    shirt();
    stroke(180);
    fill(255);
    //objectives
    smalltie(170);
    bigtie(240);
    stroke(220)
    fill(0);
    smalltie(window.smalltietip);
    bigtie(window.bigtietip);
    //check if win
    if(Math.abs(smalltietip-170) < 10 && Math.abs(bigtietip-240) < 10)
    {
        console.log("win");
    }

}


bigtiecoords = [[12, -90], [227, -5], [250, 0], [227, 5], [12, 90]];
smalltiecoords = [[12, -90], [156, -4.5], [170, 0], [156, 4.5], [12, 90]];


function mouseDragged() {
    //pulling on left side (small tie)
    if(mouseX < 162 && mouseX > 138 && mouseY > 100)
    {
        window.smalltietip = mouseY-100;
        window.bigtietip = 420-smalltietip;
    }
    //pulling on right side (big tie)
    if(mouseX < 270 && mouseX > 230 && mouseY > 100)
    {
        window.bigtietip = mouseY-100;
        window.smalltietip = 420-bigtietip;
    }

}

//these functions draw the tie from a tip coordinate upwards. the small tie is flat, the big tie uses diagonals of five degrees pointing upwards
function bigtie(tip) {
    beginShape();
    vertex(250, 100+tip);
    vertex(270, 100+tip-25);
    //project rays until y=100
    vertex(270-(tip*Math.sin(0.03)), 100)
    vertex(230+(tip*Math.sin(0.03)), 100)
    //close shape
    vertex(230, 100+tip-25);
    endShape(CLOSE);
}



function smalltie(tip) {
    beginShape();
    vertex(150, 100+tip);
    vertex(162, 100+tip-15);
    //project rays until y=100
    vertex(162, 100)
    vertex(138, 100)
    //close shape
    vertex(138, 100+tip-15);
    endShape(CLOSE);
}


function shirt()
{
    beginShape();
    vertex(0,100);
    vertex(162,100);
    vertex(162,70);
    vertex(190,70);
    vertex(190,100);
    vertex(210,100);
    vertex(210,70);
    vertex(242,70);
    vertex(242,100);
    vertex(400,100);
    vertex(400,190);
    vertex(300,190);
    vertex(300,400);
    vertex(100,400);
    vertex(100,190);
    vertex(0,190);
    
    endShape(CLOSE);
    stroke(220);
    line(200,100,200,400); 

}