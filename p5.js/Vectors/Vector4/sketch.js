var movers = [];
var attractor;
var repeller;//  ++++++  add a repellor

var toggleClicked;

function setup() {
  createCanvas(1000, 900);

  loadMovers(100);
  toggleClicked = true;

}

function draw() {
  fill(255, 255, 255, 20);
  //rect(0, 0, width, height);
    background(50);
  callMovers();

}

function loadMovers(numMovers) {

  for (var i = 0; i < numMovers; i++) {
    var x = random(width);
    var y = random(height);
    var id = i%3
    movers.push(new Mover(x, y, id));
  }
  
  attractor = new Mover(width/2, height/2,-2 );
  repeller = new Mover(width/2, height/2, -1);
  predator = new Mover(width/2, height/2, -3)

}

function callMovers() {
  for (var i = movers.length - 1; i > 0; i--) {
    movers[i].update();
  }
  attractor.update();
  repeller.update();
}

function mouseClicked(){
  toggleClicked = !toggleClicked;
}









