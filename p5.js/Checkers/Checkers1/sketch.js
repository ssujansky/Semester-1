var board = []

function setup() {
  createCanvas(800,800)
  loadBoard(64);
}

function draw() {
  background(150,240,150)
  //rect(0,0,100,100)
  //rect(100,0,100,100)
  
  makeRows();
}



function loadBoard(numBoard){
  print(board);
  for(var i=0; i< numBoard; i++){
    var x = 0;
    var y = 0;
    board.push( new Square(x + 100, y + 100))
  }
}

function makeRows(){
for( var i = 0; i < board.length; i++){  
  board[i].update();
  board[i].render();
}
}

function Square(a,b){
  this.x = 0;
  this.y = 0;
  this.wide = 100;
  this.tall = 100;
  this.clr = color(240, 100, 100);
  
  this.update = function(){
    this.x = this.x + 100;
    this.y = this.y + 100;
    
    if (this.clr = color(240, 100, 100)){ this.clr = color (100,100,240)};
    if (this.clr = color(100, 100, 240)){ this.clr = color (240,100,100)};
  }
  this.render = function(){
    fill(this.clr);
    rect(this.x, this.y, this.tall, this.wide)
  }
  
  
}
