
function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent("tie3");
    assignValue();
}

function noop()
{

}

function assignValue()
{
    window.bigtieangle = Math.PI/2;
    window.smalltieangle = Math.PI/2;
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
    smalltie(0.78);
    bigtie(2.35);
    stroke(220)
    fill(0);
    smalltie(window.smalltieangle);
    bigtie(window.bigtieangle);
    //check if win
    if(Math.abs(smalltieangle-0.78) < 0.05 && Math.abs(bigtieangle-2.35) < 0.05)
    {
        console.log("win");
    }
    
}

//coordinates in this case are r, angle (polar) from the base of the tie
bigtiecoords = [[12,-90],[227,-5],[250,0],[227,5],[12,90]];
smalltiecoords = [[12,-90],[156,-4.5],[170 ,0],[156,4.5],[12,90]];

function bigtie(angle)
{   
    beginShape();
    for(var i = 0; i < 5; i++)
    {
        coord = bigtiecoords[i];
        var polar = coord[1]*Math.PI/180;
        vertex(250+coord[0]*Math.cos(angle+polar),100+coord[0]*Math.sin(angle+polar));
    }
    endShape(CLOSE);
}

function mouseDragged()
{
    var mouseAngleToBigTie = Math.atan((mouseY-100)/(mouseX-250)); 
    if(mouseAngleToBigTie < 0 && mouseY > 100)
    {
        mouseAngleToBigTie = Math.PI + mouseAngleToBigTie;
    }
    if(mouseAngleToBigTie > 0 && mouseY < 100)
    {
        mouseAngleToBigTie = 0 - Math.PI + mouseAngleToBigTie;
    } 
    if(Math.abs(mouseAngleToBigTie-window.bigtieangle) < 0.14)
    {
        window.bigtieangle = mouseAngleToBigTie;
    }

    var mouseAngleToSmallTie = Math.atan((mouseY-100)/(mouseX-150));
    if(mouseAngleToSmallTie < 0 && mouseY > 100)
    {
        mouseAngleToSmallTie = Math.PI + mouseAngleToSmallTie;
    }
    if(mouseAngleToSmallTie > 0 && mouseY < 100)
    {
        mouseAngleToSmallTie = 0 - Math.PI + mouseAngleToSmallTie;
    }
    if(Math.abs(mouseAngleToSmallTie-window.smalltieangle) < 0.12)
    {
        window.smalltieangle = mouseAngleToSmallTie;
    }
    
}

function smalltie(angle)
{
    beginShape();
    for(var i = 0; i < 5; i++)
    {
        coord = smalltiecoords[i];
        var polar = coord[1]*Math.PI/180;
        vertex(150+coord[0]*Math.cos(angle+polar),100+coord[0]*Math.sin(angle+polar));
    }
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
