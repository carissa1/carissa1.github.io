function Arrow(x, y){
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 100;
}

Arrow.prototype.draw = function(){
    ctx.drawImage(arrowI, this.x, this.y, this.width, this.height);
}