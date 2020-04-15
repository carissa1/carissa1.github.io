function Book(x, y, w, h, I){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.I = I;
}

Book.prototype.draw = function(){
    ctx.drawImage(this.I, this.x, this.y, this.width, this.height);
}