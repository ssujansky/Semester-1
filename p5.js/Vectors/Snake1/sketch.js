var x = [],
  y = [],
  segNum = 20,
  segLength = 18;

for (var i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function setup() {
  createCanvas(1000, 1000);
  strokeWeight(20);
  stroke(255, 100);
  
}

function draw() {
  background(0);
  dragSegment(0, mouseX, mouseY);
  for( var i=0; i<x.length-1; i++) {
    dragSegment(i+1, x[i], y[i]);
  }
}

function dragSegment(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  var angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

function callPlanet(){
  this.render();
  this.update();
}
  
function planet(a,b) {
  this.loc = createVector(a, b);
  this.vel = createVector(random(-5,5),random(-5,5));
  this.acc = createVector(random(-0.25,0.25), random(-0.25,0.25));
  this.clr = color(0,0,0,0);
}

this.render = function(){
  fill(this.clr);
  ellipse(a,b,5,5);
}

this.update = function(){
  this.loc.add(this.vel);
  this.vel.add(this.acc);
}

this.checkEdges = function()  {
    if(this.id < 0){
      if (this.loc.x > width) this.loc.x = 0;
      if (this.loc.x <0 ) this.loc.x = width;
      if (this.loc.y > height) this.loc.y = 0;
      if (this.loc.y <0) this.loc.y = height;
      
    }else{
      if (this.loc.x > width  || this.loc.x < 0) this.vel.x  = -this.vel.x
      if (this.loc.y > height  || this.loc.y < 0) this.vel.y =  -this.vel.y;
    }
}
