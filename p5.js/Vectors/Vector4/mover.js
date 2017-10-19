function Mover(a, b, id) {
  this.id = id;
  this.loc = createVector(a, b);
  this.vel = createVector(random(-5,5),random(-5,5));
  this.acc = createVector(random(-0.25,0.25), random(-0.25,0.25));
  this.clr = color(random(255), random(255), random(255));
  if(this.id < 0) this.clr  = color(255, 255, 255);

  this.update = function() {
    var dir;
    // change acceleration based on mouse location
    if(this.loc.dist(attractor.loc) < 400 && this.id > -1){
      dir = p5.Vector.sub( this.loc, attractor.loc );
      dir.normalize();
      dir.mult(.3);
    }
    if(this.loc.dist(attractor.loc) < 100 && this.id > -1){
      dir = p5.Vector.sub( this.loc, attractor.loc );
      dir.normalize();
      dir.mult(.8);
    }
    if(this.loc.dist(repeller.loc) < 200 && this.id > -1){
      dir = p5.Vector.sub(this.loc, attractor.loc );
      dir.normalize();
      dir.mult(.3);
    }
    
    this.acc = dir;
    this.vel.add(this.acc);
    this.vel.limit(3);
    if(this.id < 0) this.vel.limit(1);
    this.loc.add(this.vel);
    this.render();
    this.checkEdges();
  }

  this.render = function() {
    if (this.id === 0){
      applyMatrix();
    translate(this.loc.x, this.loc.y);
    fill(this.clr);
    rect(0,0, 30, 30);
    resetMatrix();
    }
    else if (this.id === 1){
      applyMatrix();
      translate(this.loc.x, this.loc.y);
      fill(this.clr);
      ellipse(0,0, 30, 30);
      resetMatrix();
    }
    else if (this.id === 2){
      applyMatrix();
      translate(this.loc.x, this.loc.y);
      rotate(this.vel.heading()-PI/2);
      fill(this.clr);
      triangle(10,0,-10,0,0,40);
      resetMatrix();
    }else {
      applyMatrix();
      translate(this.loc.x, this.loc.y);
      fill(this.clr);
      ellipse(0,0, 50, 50);
      resetMatrix();
    }
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
}