var movers = []
var attractor;
function setup() {
  createCanvas(1000, 900);
  loadMovers(2);

}

function draw() {
  fill(255, 255, 255, 20);
  rect(0, 0, width, height);
  callMovers();

}

function loadMovers(numMovers) {

  for (var i = 0; i < numMovers; i++) {
    var x = random(width);
    var y = random(height);
    movers.push(new Mover(x, y));
  }
  
  attractor = new Mover(width/2, height/2);

}

function callMovers() {
  for (var i = 0; i < movers.length; i++) {
    movers[i].update();
  }
  attractor.update();
}

function Mover(a, b) {
  this.loc = createVector(a, b);
  this.vel = createVector(1,1);
  this.acc = createVector(random(-0.25,0.25), random(-0.25,0.25));
  this.clr = color(random(255), random(255), random(255));

  this.update = function() {
    // change acceleration based on mouse location
    var mouseVector = createVector(mouseX, mouseY);
    
    var dir = p5.Vector.sub(mouseVector, this.loc );
    dir.normalize();
    dir.mult(.75);
    this.acc = dir;
    this.loc.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(10)
    this.render();
    this.checkEdges();
  }

  this.render = function() {
    fill(this.clr);
    rect(this.loc.x, this.loc.y, 50, 50);
  }

  this.checkEdges = function()  {
    if (frameCount % 15 === 0) this.acc = createVector(random(-1,1), random(-1,1));
    if (this.loc.x > width) this.vel.x = -1 * this.vel.x;
    if (this.loc.x < 0) this.vel.x = -1 * this.vel.x;
    if (this.loc.y > height) this.vel.y = -1 * this.vel.y;
    if (this.loc.y < 0) this.vel.y = -1 * this.vel.y;

  }
}