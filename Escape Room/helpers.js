function checkCollisions(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.height + rect1.y > rect2.y) {
        return true;
    }
    else{
        return false
    }   
}

var bookI = new Image();
bookI.src = "book1.png"

var bookI1 = new Image();
bookI1.src = "book2.png"

var hiddenPaper = new Image();
hiddenPaper.src = "paper1.png";

var arrowI = new Image();
arrowI.src = "arrow.png"

var couchI = new Image();
couchI.src = "couch.png";

var flashI = new Image();
flashI.src = "flashlight.png";

var char = new Image();
char.src = "char.png";

var BookOCI = new Image();
BookOCI.src = "BookC.png";

var KShow = false;

var door = false;
var door2 = false;
var door3 = false;
var door4 = false;

var paperShown = false;
var arrowShown = false;
var appleShown = false;
var wrenchShown = false;

var arrowShow = false;
var goRight1 = false;
var noteChange = false;
var P1 = document.createElement("li");
var P2 = document.createElement("li");
var P3 = document.createElement("li");
var P4 = document.createElement("li");
var P5 = document.createElement("li");
var arrowShow1 = false;
var paperShow = false;
var click = false;
var yesL3 = true;
var FLShow = false;

var roar = new Audio()
roar.src = "creepy.mp3"
roar.load();

var appleShow = false;
var keyShow = false;
var KShown = false;
var KAShown = false;
var clickOnce = false;
var keyShown = false;
var FLShown = false;

/*real*/
var next1 = false;
var next2 = true;
var next3 = true;
var next4 = true;

/*test level 3
var next1 = true;
var next2 = true;
var next3 = false;*/