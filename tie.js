
class Tie{
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getters
  get area() {
    return this.calcArea();
  }
  // Methods
  section1() {
    
    line(240,100,tieTipx1,tieTipy1);
    line(266,90,tieTipx2,tieTipy2);
    line(tieTipx1,tieTipy1,tieTipx3,tieTipy3);
    line(tieTipx2,tieTipy2,tieTipx3,tieTipy3);
  }
}


var tieTipx3=255;
var tieTipy3=330;
var tieTipx1=tieTipx3-20;
var tieTipy1=tieTipy3-30;
var tieTipx2=tieTipx3+20;
var tieTipy2=tieTipy3-30;


var tie

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 40,100);

}

function mouseDragged(){
  tieTipx3=mouseX;
  tieTipy3=mouseY;
  tieTipx1=tieTipx3-20;
  tieTipy1=tieTipy3-30;
  tieTipx2=tieTipx3+20;
  tieTipy2=tieTipy3-30;

}