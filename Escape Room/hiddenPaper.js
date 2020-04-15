function Hidden(x, y){
    this.x = x;
    this.y = y;
    this.width = 15;
    this.height = 20;
}

Hidden.prototype.draw = function(){
    ctx.drawImage(hiddenPaper, this.x, this.y, this.width, this.height);
}