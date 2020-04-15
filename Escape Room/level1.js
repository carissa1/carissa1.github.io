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

function Hidden(x, y){
    this.x = x;
    this.y = y;
    this.width = 15;
    this.height = 20;
}

Hidden.prototype.draw = function(){
    ctx.drawImage(hiddenPaper, this.x, this.y, this.width, this.height);
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

var paper = new Hidden(195, 465);
var drink = new Drink(195, 462);
var table = new Table(125, 480);
var food = new Food(160, 470);
var chair = new Chair(60, 455);
var shelf = new Shelf(300, 150);

var books = new Book(325, 225, 100, 50, bookI);
var booksA = new Book(425, 285, 100, 50, bookI);
var booksB = new Book(325, 345, 95, 45, bookI);
var booksC = new Book(435, 405, 90, 40, bookI);
var booksD = new Book(345, 460, 90, 40, bookI);
var book1 = [books, booksA, booksB, booksC, booksD];

var books1 = new Book(435, 230, 100, 50, bookI1);
var books1A = new Book(315, 290, 100, 50, bookI1);
var books1B = new Book(435, 345, 100, 50, bookI1);
var books1C = new Book(315, 400, 100, 50, bookI1);
var books1D = new Book(435, 455, 100, 50, bookI1);
var book2 = [books1, books1A, books1B, books1C, books1D];

var arrow = new Arrow(440, 480);

var level1 = [paper, table, drink, food, chair, shelf];