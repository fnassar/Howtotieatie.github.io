
p.setup = function() {
    p.createCanvas(400, 400);
    assignValue();
}

function noop() {

}

function assignValue() {
    window.vertical = 25;
    window.currenttietip = [0,0];
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
    bigtie(300, false);
    p.stroke(220)
    p.fill(0);
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



p.mouseDragged = function() {
    if(Math.abs(p.mouseX - window.currenttietip[0]) < 20 && Math.abs(p.mouseY - window.currenttietip[1]) < 20)
    {
        //another equation reached by a regrettable amount of hard trigonometry
        window.vertical = (p.mouseY-21.2)/0.998;
    }
}

function bigtie(verticalflip, active) {
    //this code is completely reworked from the last sequence
    //behind bottom - neck section
    p.beginShape();
    p.vertex(175,140);
    p.vertex(162,140);
    p.vertex(140,140);
    p.vertex(182,168);
    p.endShape(p.CLOSE);
    p.beginShape();
    p.vertex(225,140);
    p.vertex(250,140);
    p.vertex(218,165);
    p.endShape(p.CLOSE);

    //bottom - small tie
    smalltie(Math.PI/2);

    tielength = 140;
    //layer 2 - big tie
    p.beginShape();
        //right basepoint
        p.vertex(216, 145);

        //3degree slope
        fold1x = 216+(tielength-verticalflip/2)*Math.sin(0.05);
        fold1y = 145-(tielength-verticalflip/2)*Math.cos(0.05);
        p.vertex(fold1x, fold1y);


        //3degree slope
        fold2x = 184-(tielength-verticalflip/2)*Math.sin(0.05);
        fold2y = fold1y;
        p.vertex(fold2x, fold2y);

        //left basepoint
        p.vertex(184, 145);
        p.endShape(p.CLOSE);

    //layer 2.5 - big tie folded down
    p.beginShape();
        rightcornerx = fold1x + (verticalflip/2)*Math.sin(0.05);
        rightcornery = fold1y + (verticalflip/2)*Math.cos(0.05);
        leftcornerx = fold2x - (verticalflip/2)*Math.sin(0.05);
        leftcornery = rightcornery;
        tipx = (leftcornerx+rightcornerx)/2;
        tipy = rightcornery+25;

        p.vertex(fold1x,fold1y);
        p.vertex(rightcornerx,rightcornery);
        p.vertex(tipx,tipy);
        p.vertex(leftcornerx,leftcornery);
        p.vertex(fold2x, fold2y);

        p.endShape(p.CLOSE);

    //layer 3 - loop
    p.beginShape();
    p.vertex(175,140);
    p.vertex(225,140);
    p.vertex(218,170);
    p.vertex(182,174);
    p.endShape(p.CLOSE);

    if(active)
    {
        window.currenttietip = [tipx, tipy];
        
    }


}


smalltiecoords = [[12, -90], [156, -4.5], [170, 0], [156, 4.5], [12, 90]];
function smalltie(angle)
{
    p.beginShape();
    for(var i = 0; i < 5; i++)
    {
        coord = smalltiecoords[i];
        var polar = coord[1]*Math.PI/180;
        p.vertex(200+coord[0]*Math.cos(angle+polar),140+coord[0]*Math.sin(angle+polar));
    }
    p.endShape(p.CLOSE);
}
function shirt()
{
    p.beginShape();
    p.vertex(0,140);
    p.vertex(162,140);
    p.vertex(162,110);
    p.vertex(190,110);
    p.vertex(190,140);
    p.vertex(210,140);
    p.vertex(210,110);
    p.vertex(242,110);
    p.vertex(242,140);
    p.vertex(400,140);
    p.vertex(400,230);
    p.vertex(300,230);
    p.vertex(300,400);
    p.vertex(100,400);
    p.vertex(100,230);
    p.vertex(0,230);
    
    p.endShape(p.CLOSE);
    p.stroke(220);
    p.line(200,100,200,400); 

}