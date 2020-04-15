function Shelf(x, y){
    this.x = x;
    this.y = y;
    this.width = 250;
    this.height = 400;
}

var shelfI = new Image();
shelfI.src = "shelf.png"

Shelf.prototype.draw = function(){
    ctx.drawImage(shelfI, this.x, this.y, this.width, this.height);
}