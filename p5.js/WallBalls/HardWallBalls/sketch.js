var balls = [];

function setup() {
  createCanvas(1000, 800)
  loadBalls(10);
}

function draw(){
  background(130,200,250)
  callBalls();
}

function loadBalls(numBalls){
  print(balls);
  for(var i =0; i < numBalls; i++){
    var x = random(width);
    var y = random(height);
    balls.push(new Ball(x,y) );
  }
}
  
function callBalls(){
  for(var i =0; i < balls.length; i++){
    balls[i].update();
    balls[i].render();
  }
}  
  
function Ball(a, b){ 
    this.x = a;
    this.y = b;
    this.dx = random(15)+10;
    this.dy = random(15)+10;
    this.rad = random(150)+50;
    this.clr = color(random(255),random(255),random(255));
    
    this.update = function(){
    this.x += this.dx;
    this.y += this.dy;
    if (this.x > width - this.rad/2 || this.x < this.rad/2){ this.dx = -this.dx};
    if (this.y > width - this.rad/2 || this.y < this.rad/2){ this.dy = -this.dy};
    };
    
    this.render = function(){
      fill(this.clr);
      ellipse(this.x, this.y, this.rad, this.rad);
    }
  }
