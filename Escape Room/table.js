function Table(x, y){
    this.x = x;
    this.y = y;
    this.width = 120;
    this.height = 70;
}

var tableI = new Image();
tableI.src = "table.png";

Table.prototype.draw = function(){
    ctx.drawImage(tableI, this.x, this.y, this.width, this.height);
}