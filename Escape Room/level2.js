function Bed(x, y){
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 120;
}

var bedI = new Image();
bedI.src = "bed.png";

Bed.prototype.draw = function(){
    ctx.drawImage(bedI, this.x, this.y, this.width, this.height);
}

function BedTable(x, y){
    this.x = x;
    this.y = y;
    this.width = 160;
    this.height = 110;
}

var bedTableI = new Image();
bedTableI.src = "bedsideForNow.png";

BedTable.prototype.draw = function(){
    ctx.drawImage(bedTableI, this.x, this.y, this.width, this.height);
}

function Box(x, y){
    this.x = x;
    this.y = y;
    this.width = 35;
    this.height = 20;
}

var boxI = new Image();
boxI.src = "box.png";

Box.prototype.draw = function(){
    ctx.drawImage(boxI, this.x, this.y, this.width, this.height);
}

function BedPlant(x, y){
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 60;
}

var bedPlantI = new Image();
bedPlantI.src = "plantBed.png";

BedPlant.prototype.draw = function(){
    ctx.drawImage(bedPlantI, this.x, this.y, this.width, this.height);
}

function Wrench(x, y){
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 30;
}

var wrenchI = new Image();
wrenchI.src = "wrench.png";

Wrench.prototype.draw = function(){
    ctx.drawImage(wrenchI, this.x, this.y, this.width, this.height);
}

function Note(x, y){
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 40;
}

var noteI = new Image();
noteI.src = "note1.png";

Note.prototype.draw = function(){
    ctx.drawImage(noteI, this.x, this.y, this.width, this.height);
}

function Pillow(x, y){
    this.x = x;
    this.y = y;
    this.width = 90;
    this.height = 40;
}

var pillowI = new Image();
pillowI.src = "pillow.png";

Pillow.prototype.draw = function(){
    ctx.drawImage(pillowI, this.x, this.y, this.width, this.height);
}

function Dresser(x, y){
    this.x = x;
    this.y = y;
    this.width = 350;
    this.height = 450;
}

var dresserI = new Image();
dresserI.src = "dresser.png";

Dresser.prototype.draw = function(){
    ctx.drawImage(dresserI, this.x, this.y, this.width, this.height);
}

function Sack(x, y){
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 80;
}

var bagI = new Image();
bagI.src = "bag.png";

Sack.prototype.draw = function(){
    ctx.drawImage(bagI, this.x, this.y, this.width, this.height);
}

function Apple(x, y){
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
}

var appleI = new Image();
appleI.src = "apple.png";

Apple.prototype.draw = function(){
    ctx.drawImage(appleI, this.x, this.y, this.width, this.height);
}
var num1 = 9;

var bed = new Bed(50, 440);
var bedTable = new BedTable(200, 460);
var bedPlant = new BedPlant(255, 424);
var box = new Box(263, 530)
var wrench = new Wrench(270, 520);
var note = new Note(80, 465);
var pillow = new Pillow(65, 460);
var dresser = new Dresser(280, 130);
var apple = new Apple(530, 490);

var bag = new Sack(325, 480);
var bag1 = new Sack(430, 470);
var bag2 = new Sack(525, 480);
var bag3 = new Sack(350, 120);
var bag4 = new Sack(460, 120);
var bags = [bag, bag1, bag2, bag3, bag4];

var level2 = [bed, note, pillow, wrench, bedPlant, bedTable, box, dresser, apple];