function Chair(x, y){
    this.x = x;
    this.y = y;
    this.width = 90;
    this.height = 100;
}

var chairI = new Image();
chairI.src = "chair.png"

Chair.prototype.draw = function(){
    ctx.drawImage(chairI, this.x, this.y, this.width, this.height);
}