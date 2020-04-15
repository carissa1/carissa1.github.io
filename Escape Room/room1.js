function Hidden(x, y){
    this.x = x;
    this.y = y;
    this.width = 5;
    this.height = 15;
}

var hiddenPaper = new Image();
hiddenPaper.src = "paper1.png";

Hidden.prototype.draw = function(){
    ctx.drawImage(hiddenPaper, this.x, this.y, this.width, this.height);
}

function Shelf(x, y){
    this.x = x;
    this.y = y;
    this.width = 240;
    this.height = 390;
}

var shelfI = new Image();
shelfI.src = "shelf.png"

Shelf.prototype.draw = function(){
    ctx.drawImage(shelfI, this.x, this.y, this.width, this.height);
}

function Shelf(x, y){
    this.x = x;
    this.y = y;
    this.width = 250;
    this.height = 400;
}

var shelfI = new Image();
shelfI.src = "shelf.png"

Shelf.prototype.draw = function(){
    ctx.drawImage(shelfI, this.x, this.y, this.width, this.height);
}

function Food(x, y){
    this.x = x;
    this.y = y;
    this.width = 35;
    this.height = 20;
}

var foodI = new Image();
foodI.src = "food1.png";

Food.prototype.draw = function(){
    ctx.drawImage(foodI, this.x, this.y, this.width, this.height);
}

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

function Arrow(x, y){
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 100;
}

Arrow.prototype.draw = function(){
    ctx.drawImage(arrowI, this.x, this.y, this.width, this.height);
}

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
