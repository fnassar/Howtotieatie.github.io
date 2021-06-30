
p.setup = function() {
    p.createCanvas(400, 400);
    assignValue();
}

function noop() {

}

function assignValue() {
    window.horizontal= 40;
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
    bigtie(190, false);
    p.stroke(220)
    p.fill(0);
    //small tie is static, called between two layers of big tie
    
    bigtie(window.horizontal, true);
    //check if win
    if(Math.abs(window.horizontal-190) < 10)
    {
        console.log("win");
    }
}


bigtiecoords = [[12, -90], [227, -5], [250, 0], [227, 5], [12, 90]];
bigtiepart1 = [[12, -90], [227, -5], [250, 0], [227, 5], [12, 90]]
smalltiecoords = [[12, -90], [156, -4.5], [170, 0], [156, 4.5], [12, 90]];

p.mouseDragged = function() {
    if(Math.abs(p.mouseX - window.currenttietip[0]) < 20 && Math.abs(p.mouseY - window.currenttietip[1]) < 20 && horizontal >= 25)
    {
        // this equation was the result of a lot of hard trigonometry i dont want to repeat ever
        window.horizontal = (p.mouseX-38.71)/1.768;
    }
}

function bigtie(horizontal, active) {
    angle = 2.38;
    tielength = 280;
    //calculate base points
    coord = bigtiecoords[0];
    var polar = coord[1]*Math.PI/180;
    base1x = 230+coord[0]*Math.cos(angle+polar);
    base1y = 100+coord[0]*Math.sin(angle+polar);
    coord = bigtiecoords[4];
    polar = coord[1]*Math.PI/180;
    base2x = 230+coord[0]*Math.cos(angle+polar);
    base2y = 100+coord[0]*Math.sin(angle+polar);

    // calculate the points of fold based on horizontal value
    corner1 = [tielength-13-horizontal, -3];
    corner1polar = corner1[1]*Math.PI/180;
    corner1x = base1x+corner1[0]*Math.cos(angle+corner1polar);
    corner1y = base1y+corner1[0]*Math.sin(angle+corner1polar);
    corner2 = [tielength-13-horizontal, 3];
    corner2polar = corner2[1]*Math.PI/180;
    corner2x = base2x+corner2[0]*Math.cos(angle+corner2polar);
    corner2y = base2y+corner2[0]*Math.sin(angle+corner2polar);

    // part 2 - from fold to the right
    p.beginShape();
    corner3polar = -3*Math.PI/180;
    p.vertex(corner1x, corner1y);
    p.vertex(corner2x, corner2y);
    corner3x = corner2x + horizontal*Math.cos(corner3polar);
    corner3y = corner2y + horizontal*Math.sin(corner3polar);
    corner4x = corner3x;
    corner4y = corner1y - horizontal*Math.sin(corner3polar);
    p.vertex(corner3x, corner3y);
    p.vertex(corner3x+25,(corner3y+corner4y)/2);
    p.vertex(corner4x, corner4y);
    
    p.endShape(p.CLOSE);
    

    smalltie(1.2);

    // part 1 of the tie - fron neck to fold

    p.beginShape();
    p.vertex(base1x,base1y);
    p.vertex(corner1x,corner1y);
    p.vertex(corner2x,corner2y);
    p.vertex(base2x,base2y)
    p.endShape(p.CLOSE);

    if(active)
    {
        window.currenttietip = [corner3x+25, (corner3y+corner4y)/2];
    }
}



function smalltie(angle)
{
    p.beginShape();
    for(var i = 0; i < 5; i++)
    {
        coord = smalltiecoords[i];
        var polar = coord[1]*Math.PI/180;
        p.vertex(180+coord[0]*Math.cos(angle+polar),100+coord[0]*Math.sin(angle+polar));
    }
    p.endShape(p.CLOSE);
}
function shirt()
{
    p.beginShape();
    p.vertex(0,100);
    p.vertex(162,100);
    p.vertex(162,70);
    p.vertex(190,70);
    p.vertex(190,100);
    p.vertex(210,100);
    p.vertex(210,70);
    p.vertex(242,70);
    p.vertex(242,100);
    p.vertex(400,100);
    p.vertex(400,190);
    p.vertex(300,190);
    p.vertex(300,400);
    p.vertex(100,400);
    p.vertex(100,190);
    p.vertex(0,190);
    
    p.endShape(p.CLOSE);
    p.stroke(220);
    line(200,100,200,400); 

}
