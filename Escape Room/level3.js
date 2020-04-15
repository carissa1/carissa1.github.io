function Couch(x, y){
    this.x = x;
    this.y = y;
    this.width = 250;
    this.height = 120;
}

var couchI = new Image();
couchI.src = "couch.png";

Couch.prototype.draw = function(){
    ctx.drawImage(couchI, this.x, this.y, this.width, this.height);
}

var couch = new Couch(50, 450);
