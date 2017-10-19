var movers = [];
var attractor;
var repeller;
var eater;


function setup() {
  createCanvas(1000, 900);

  loadMovers(100);


}

function draw() {

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
  eater = new Mover(width/2, height/2, -3);

}

function callMovers() {
  for (var i = 0; i < movers.length; i++) {
    movers[i].update();
  }
  attractor.update();
  repeller.update();
  eater.update();
}









