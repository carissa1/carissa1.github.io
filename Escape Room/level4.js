function Door(x,y){
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 300;
}

Door.prototype.draw = function(){
    ctx.drawImage(doorI, this.x, this.y, this.width, this.height);
}

function Safe(x,y){
    this.x = x;
    this.y = y;
    this.width = 120;
    this.height = 90;
}

var safeI = new Image();
safeI.src = "safe.png";

Safe.prototype.draw = function(){
    ctx.drawImage(safeI, this.x, this.y, this.width, this.height);
}

function Code(x,y){
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 300;
}

var codeI = new Image();
codeI.src = "new.png";

Code.prototype.draw = function(){
    ctx.drawImage(codeI, this.x, this.y, this.width, this.height);
}

var Door123 = new Door(300, 280);
var safe = new Safe(100, 405);
var table = new Table(100, 480);
var code = new Code(100, 300);

var level4 = [table, safe];

