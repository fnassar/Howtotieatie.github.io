
function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent("tie3");
    assignValue();
}

function noop() {

}

function assignValue() {
    window.vertical = 25;
    window.currenttietip = [0,0];
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
    bigtie(300, false);
    stroke(220)
    fill(0);
    //small tie is static, called between two layers of big tie
    
    bigtie(window.vertical, true);
    //check if win
    if(Math.abs(window.vertical-300) < 5)
    {
        console.log("win");
    }

}


bigtiecoords = [[12, -90], [227, -5], [250, 0], [227, 5], [12, 90]];
bigtiepart1 = [[12, -90], [227, -5], [250, 0], [227, 5], [12, 90]]



function mouseDragged() {
    if(Math.abs(mouseX - window.currenttietip[0]) < 20 && Math.abs(mouseY - window.currenttietip[1]) < 20)
    {
        //another equation reached by a regrettable amount of hard trigonometry
        window.vertical = (mouseY-21.2)/0.998;
    }
}

function bigtie(verticalflip, active) {
    //this code is completely reworked from the last sequence
    //behind bottom - neck section
    beginShape();
    vertex(175,140);
    vertex(162,140);
    vertex(140,140);
    vertex(182,168);
    endShape(CLOSE);
    beginShape();
    vertex(225,140);
    vertex(250,140);
    vertex(218,165);
    endShape(CLOSE);

    //bottom - small tie
    smalltie(Math.PI/2);

    tielength = 140;
    //layer 2 - big tie
    beginShape();
        //right basepoint
        vertex(216, 145);

        //3degree slope
        fold1x = 216+(tielength-verticalflip/2)*Math.sin(0.05);
        fold1y = 145-(tielength-verticalflip/2)*Math.cos(0.05);
        vertex(fold1x, fold1y);


        //3degree slope
        fold2x = 184-(tielength-verticalflip/2)*Math.sin(0.05);
        fold2y = fold1y;
        vertex(fold2x, fold2y);

        //left basepoint
        vertex(184, 145);
    endShape(CLOSE);

    //layer 2.5 - big tie folded down
    beginShape();
        rightcornerx = fold1x + (verticalflip/2)*Math.sin(0.05);
        rightcornery = fold1y + (verticalflip/2)*Math.cos(0.05);
        leftcornerx = fold2x - (verticalflip/2)*Math.sin(0.05);
        leftcornery = rightcornery;
        tipx = (leftcornerx+rightcornerx)/2;
        tipy = rightcornery+25;

        vertex(fold1x,fold1y);
        vertex(rightcornerx,rightcornery);
        vertex(tipx,tipy);
        vertex(leftcornerx,leftcornery);
        vertex(fold2x, fold2y);

    endShape(CLOSE);

    //layer 3 - loop
    beginShape();
    vertex(175,140);
    vertex(225,140);
    vertex(218,170);
    vertex(182,174);
    endShape(CLOSE);

    if(active)
    {
        window.currenttietip = [tipx, tipy];
        
    }


}


smalltiecoords = [[12, -90], [156, -4.5], [170, 0], [156, 4.5], [12, 90]];
function smalltie(angle)
{
    beginShape();
    for(var i = 0; i < 5; i++)
    {
        coord = smalltiecoords[i];
        var polar = coord[1]*Math.PI/180;
        vertex(200+coord[0]*Math.cos(angle+polar),140+coord[0]*Math.sin(angle+polar));
    }
    endShape(CLOSE);
}
function shirt()
{
    beginShape();
    vertex(0,140);
    vertex(162,140);
    vertex(162,110);
    vertex(190,110);
    vertex(190,140);
    vertex(210,140);
    vertex(210,110);
    vertex(242,110);
    vertex(242,140);
    vertex(400,140);
    vertex(400,230);
    vertex(300,230);
    vertex(300,400);
    vertex(100,400);
    vertex(100,230);
    vertex(0,230);
    
    endShape(CLOSE);
    stroke(220);
    line(200,100,200,400); 

}