function BadGuy(x, y, speed){
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.speed = speed;
}

BadGuy.prototype.move = function(){
    this.y+=this.speed;
    if(this.y > canvas.height){
        this.y = 0;
        
    }
}

BadGuy.prototype.draw = function(){
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.width, this.height);
}