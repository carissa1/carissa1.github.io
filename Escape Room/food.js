function Food(x, y){
    this.x = x;
    this.y = y;
    this.width = 35;
    this.height = 20;
}

var foodI = new Image();
foodI.src = "food1.png";

Food.prototype.draw = function(){
    ctx.drawImage(foodI, this.x, this.y, this.width, this.height);
}