function Drink(x, y){
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 25;
}

var drinkI = new Image();
drinkI.src = "drink1.png";

Drink.prototype.draw = function(){
    ctx.drawImage(drinkI, this.x, this.y, this.width, this.height);
}
