function Couch(x, y){
    this.x = x;
    this.y = y;
    this.width = 250;
    this.height = 120;
}

Couch.prototype.draw = function(){
    ctx.drawImage(couchI, this.x, this.y, this.width, this.height);
}

function Board(x, y){
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 50;
}

var boardI = new Image();
boardI.src = "wood2.png";

Board.prototype.draw = function(){
    ctx.drawImage(boardI, this.x, this.y, this.width, this.height);
}

function Nail(x, y){
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
}

var nailI = new Image();
nailI.src = "nail3.png";

Nail.prototype.draw = function(){
    ctx.drawImage(nailI, this.x, this.y, this.width, this.height);
}

function Flashlight(x, y){
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
}

Flashlight.prototype.draw = function(){
    ctx.drawImage(flashI, this.x, this.y, this.width, this.height);
}

function SideTable(x, y){
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 90;
}

var sTableI = new Image();
sTableI.src = "SideTable.png";

SideTable.prototype.draw = function(){
    ctx.drawImage(sTableI, this.x, this.y, this.width, this.height);
}

function BookO(x, y){
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 30;
}

BookO.prototype.draw = function(){
    ctx.drawImage(BookOCI, this.x, this.y, this.width, this.height);
}

function Knife(x, y){
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 80;
}

var knifeI = new Image();
knifeI.src = "knife.png";

Knife.prototype.draw = function(){
    ctx.drawImage(knifeI, this.x, this.y, this.width, this.height);
}

function Key(x, y){
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 80;
}

var keyI = new Image();
keyI.src = "key.png";

Key.prototype.draw = function(){
    ctx.drawImage(keyI, this.x, this.y, this.width, this.height);
}


var couch = new Couch(50, 450);
var board = new Board(100, 500);
var nail = new Nail(115, 500);
var nail2 = new Nail(165, 530);
var FL = new Flashlight(115, 505)
var ST = new SideTable(300, 470)
var BO = new BookO(310, 465)
var knife = new Knife(280, 190) 
var key = new Key(280, 190);

var L3S = [board, nail, nail2];
var L3 = [ST, BO]
