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

var door = false;
var door2 = false;
var door3 = false;

var paperShown = false;
var arrowShown = false;
var appleShown = false;
var wrenchShown = false;

var arrowShow = false;
var goRight1 = false;
var L1 = document.createElement("li");
var noteChange = false;
var L2 = document.createElement("li");
var arrowShow1 = false;
var paperShow = false;

/*real*/
var next1 = false;
var next2 = true;
var next3 = true;

/*test level 3
var next1 = true;
var next2 = true;
var next3 = false;*/

var inputPush = document.getElementById("#push");
var TextPush = document.getElementById("#pushT");
var pushSubmit = document.getElementById("#submit");

var answer;

var clickYN = false;