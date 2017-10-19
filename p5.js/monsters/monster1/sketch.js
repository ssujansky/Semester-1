
var xLoc, yLoc;
var xSpeed, ySpeed;

function setup() {
  createCanvas(1000,1000);
  xLoc=15;
  yLoc=200;
  xSpeed=10;
  ySpeed=30;
}

function draw() {
  background(200,250,200);
  
  makeMonster(xLoc,yLoc);
  xLoc = xLoc+xSpeed;
  yLoc = yLoc+ySpeed
  if(xLoc > 1000){
    
    xSpeed = -1*xSpeed
  }
  
  if(xLoc < 0){
    
    xSpeed = -1*xSpeed
  }
  if(yLoc > 1000){
    
    ySpeed = -1*ySpeed
  }
  
  if(yLoc < 0){
    
    ySpeed = -1*ySpeed
  }
}

function makeMonster(varX,varY){
  makeHorns(varX,varY);
  makeLeg(varX - 20,varY+20);
  makeLeg(varX +15,varY + 20);
  makeBody(varX,varY);
  makeEye(varX,varY);
  makeEye(varX - 50,varY);
  makeEye(varX + 50,varY)
}

function makeBody(x,y){
fill(150,0,0);
ellipse(x,y,200,70);
}

function makeLeg(x,y){
  fill(0,150,150)
  rect(x,y,10,40)
}

function makeEye(x,y){
  fill(250)
  ellipse(x,y,30,30)
  fill(1)
  ellipse(x,y,10,10)
}
 function  makeHorns(x,y){
 fill(255,0,0)
 triangle(x,y,x + 15,y - 70,x + 30, y);
 triangle(x,y,x - 15,y - 70,x - 30, y);
}
