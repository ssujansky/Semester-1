var board = [];

function setup() {
  createCanvas(800, 800)
  background(240,150,150);
  loadBoard(8);
  makeRows();
}



function loadBoard(numBoard) {
for (var i = 0; i < numBoard; i++){  
  
  for (var j = 0; j < numBoard; j++) {
  
    board.push(new Square(j * 100, i*100));
  }
}
}

function makeRows() {
  for (var i = 0; i < board.length; i++) {
    board[i].render(i);
  }
  
}

function Square(a, b) {
  this.x = a;
  this.y = b;
  this.side = 100;
  this.clr1 = color(240, 50, 100);
  this.clr2 = color(50, 240, 100);
  this.sum =( this.x + this.y)/(100);


}
Square.prototype.render = function(i){
  
    if(this.sum%2 === 0){
      fill(this.clr1);
    }else{
      fill(this.clr2);
      }
    rect(this.x, this.y, this.side, this.side);
  }
