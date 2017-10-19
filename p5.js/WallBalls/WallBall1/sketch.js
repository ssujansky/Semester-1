//var xLoc, yLoc;
//var xSpeed, ySpeed;
var b1, b2;

function setup() {
  createCanvas(1000,1000)
  
  b1 = {
  xLoc: random(1000),
  yLoc: random(1000),
  xSpeed: random(15)+5,
  ySpeed: random(15)+5,
  radius: random(150)+40
}

 b2 = {
  xLoc: random(1000),
  yLoc: random(1000),
  xSpeed: random(15)+10,
  ySpeed: random(15)+10,
  radius: random(150)+40
}

}



function draw() {
  background(200,250,200);
  b1.xLoc = b1.xLoc + b1.xSpeed;
  b1.yLoc = b1.yLoc + b1.ySpeed;
  if (b1.xLoc > 1000 - b1.radius/2){
    b1.xSpeed = -1*b1.xSpeed;
    
  }
  if (b1.xLoc < b1.radius/2){ 
    b1.xSpeed = -1*b1.xSpeed;
    
  }
  if (b1.yLoc > 1000 - b1.radius/2){
    b1.ySpeed = -1*b1.ySpeed;
    
  }
  if (b1.yLoc < b1.radius/2){ 
    b1.ySpeed = -1*b1.ySpeed;
    
  }
  
  b2.xLoc = b2.xLoc + b2.xSpeed;
  b2.yLoc = b2.yLoc + b2.ySpeed;
  
  if (b2.xLoc > 1000 - b2.radius/2){
    b2.xSpeed = -1*b2.xSpeed;
    
  }
  if (b2.xLoc < b2.radius/2){ 
    b2.xSpeed = -1*b2.xSpeed;
    
  }
  if (b2.yLoc > 1000 - b2.radius/2){
    b2.ySpeed = -1*b2.ySpeed;
    
  }
  if (b2.yLoc < b2.radius/2){ 
    b2.ySpeed = -1*b2.ySpeed;
    
  }
  
  
  
  if (b1.xLoc > 500){
    fill
  }
  ellipse(b1.xLoc,b1.yLoc,b1.radius,b1.radius);
  fill(random(255),random(255),random(255));
  ellipse(b2.xLoc,b2.yLoc,b2.radius,b2.radius);

  
}

