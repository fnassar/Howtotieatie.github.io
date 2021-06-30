
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
    yoffset=40;
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
    //check if win
    if(Math.abs(window.vertical-140) < 5)
    {
        console.log("win");
    }

}


bigtiecoords = [[12, -90], [227, -5], [250, 0], [227, 5], [12, 90]];
bigtiepart1 = [[12, -90], [227, -5], [250, 0], [227, 5], [12, 90]]
smalltiecoords = [[12, -90], [156, -4.5], [170, 0], [156, 4.5], [12, 90]];

p.mouseDragged = function() {
    if(Math.abs(p.mouseX - window.currenttietip[0]) < 20 && Math.abs(p.mouseY - window.currenttietip[1]) < 20)
    {
        //another equation reached by a regrettable amount of hard trigonometry
        window.vertical = (p.mouseY-125.7-yoffset)/-0.984;
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
    corner3polar = -3*Math.PI/180;
    corner3x = corner2x + horizontal*Math.cos(corner3polar);
    corner3y = corner2y + horizontal*Math.sin(corner3polar);
    corner4x = corner3x;
    corner4y = corner1y - horizontal*Math.sin(corner3polar);
    corner3y = corner3y + flip/2*Math.sin(0.05)
    corner4y = corner4y - flip/2*Math.sin(0.05)

    corner5x = (corner3x-flip/2+25)-flip/2*Math.cos(-0.05);
    corner5y = corner3y+flip/2*Math.sin(-0.05)
    corner6x = (corner4x-flip/2+25)-flip/2*Math.cos(-0.05)
    corner6y = corner4y-flip/2*Math.sin(-0.05)
    difference = corner6y-corner5y;

    corner5x = corner5x + (vertical-25)*Math.cos(-0.05);
    corner5y = corner5y - (vertical-25)*Math.sin(-0.05);

    corner7x = corner5x + vertical*Math.sin(-0.05);
    corner7y = corner5y - (vertical-25)*Math.cos(-0.05);
    uppertipx = corner7x + 20;
    uppertipy = corner7y - 25;
    corner9x = corner7x + difference;
    corner9y = corner7y;
    corner6x = corner9x + (difference + vertical -25)*Math.sin(-0.05);

    //build y based on x
    corner6y = corner4y;
    
   

    //part 4 - fold to above
    p.beginShape();
    //connection down
    p.vertex(corner5x, corner5y+yoffset);

    //tip itself
    p.vertex(corner7x, corner7y+yoffset);
    p.vertex(uppertipx, uppertipy+yoffset);
    p.vertex(corner9x, corner9y+yoffset);

    //todo corner6
    p.vertex(corner6x,corner6y+yoffset);

    endShape(p.CLOSE);
    
    // part 2 - from fold to the right
    p.beginShape();
    p.vertex(corner1x, corner1y+yoffset);
    p.vertex(corner2x, corner2y+yoffset);
    
    p.vertex(corner3x-flip/2+25, corner3y+yoffset);
    p.vertex(corner4x-flip/2+25, corner4y+yoffset);
    
    p.endShape(p.CLOSE);
    

    smalltie(1.2);

    // part 1 of the tie - fron neck to fold

    p.beginShape();
    p.vertex(base1x,base1y+yoffset);
    p.vertex(corner1x,corner1y+yoffset);
    p.vertex(corner2x,corner2y+yoffset);
    p.vertex(base2x,base2y+yoffset)
    p.endShape(p.CLOSE);

    //part 3 - overfold
    p.beginShape();
    p.vertex(corner3x-flip/2+25, corner3y+yoffset);
    //3 degree diagonal
    p.vertex(corner5x, corner5y+yoffset)
    //3 degree diagonal
    p.vertex(corner6x, corner6y+yoffset)
    p.vertex(corner4x-flip/2+25, corner4y+yoffset);
    p.endShape(p.CLOSE);

    if(active)
    {
        window.currenttietip = [uppertipx, uppertipy+yoffset];
        
    }


}



function smalltie(angle)
{
    p.beginShape();
    for(var i = 0; i < 5; i++)
    {
        coord = smalltiecoords[i];
        var polar = coord[1]*Math.PI/180;
        p.vertex(180+coord[0]*Math.cos(angle+polar),yoffset+100+coord[0]*Math.sin(angle+polar));
    }
    p.endShape(p.CLOSE);
}
function shirt()
{
    p.beginShape();
    p.vertex(0,yoffset+100);
    p.vertex(162,yoffset+100);
    p.vertex(162,yoffset+70);
    p.vertex(190,yoffset+70);
    p.vertex(190,yoffset+100);
    p.vertex(210,yoffset+100);
    p.vertex(210,yoffset+70);
    p.vertex(242,yoffset+70);
    p.vertex(242,yoffset+100);
    p.vertex(400,yoffset+100);
    p.vertex(400,yoffset+190);
    p.vertex(300,yoffset+190);
    p.vertex(300,yoffset+400);
    p.vertex(100,yoffset+400);
    p.vertex(100,yoffset+190);
    p.vertex(0,yoffset+190);
    
    p.endShape(p.CLOSE);
    p.stroke(220);
    p.line(200,100,200,400); 

}