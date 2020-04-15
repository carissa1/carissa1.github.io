// cache our canvas and context to draw
var canvas;
var ctx;

// cache inputs
var keys = [];


window.onkeydown = function (e)
{
    keys[e.key] = true;
};

window.onkeyup = function (e)
{
    keys[e.key] = false;
}; 
var wrenchShow = false;
keys[" "] = false;

var player = new Player(400, 50);
//var wall = new Wall(player.x-player.width/2, player.y-player.height/2, 100, 10);
var bad = new BadGuy(10, 300, 5);

// initialize our variables and start our game loop
function startGame()
{
    canvas = document.getElementById("gc");
    ctx = canvas.getContext("2d");

    var fps = 30 / 1000;
    window.setInterval(update, fps);
}

// game loop
function update()
{
    handleLogic();

    checkDoor();

    draw();
}
// handle inputs, handle player, handle enemies, etc
function handleLogic()
{
    if(checkCollisions(player, paper)){
        paperShow = true;
    }
    if(paperShow){
        paper.width = 300;
        paper.height = 400;
        paper.y = 10;
        paper.x = 10;
        paperShown = true;
        hiddenPaper.src = "paper12.png"
        window.setTimeout(function(){
            paperShow = false;
        }, 2000);
        arrowShow1 = true;
        arrowShow = false;
    }
    if(paperShow == false){
        paper.width = 15;
        paper.height = 20;
        paper.x = 195;
        paper.y = 465;
        hiddenPaper.src = "paper12.png"
    }
    drink.onclick = function(){
        drink.x += 20;
    }
    player.HI()
}
// draw our game to the canvas
function draw()
{
    // clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(!next1){
        for(var i = 0; i < 6; i++){
            level1[i].draw();
        }
        for(i = 0; i<5; i++){
            book1[i].draw();
        }
        for(i = 0; i<5; i++){
            book2[i].draw();
        }
        if(checkCollisions(player, book2[2])){
            arrowShow = true;
        }
        if(arrowShow && arrowShow1){
            arrowShown = true;
            arrow.draw();
            window.setTimeout(function(){
                arrowShow = false;
            }, 2000);
        }
    } 
    if(!next2){
        for(var i = 0; i < num1; i++){
            level2[i].draw();
        }
        for(var i = 0; i < 5; i++){
            bags[i].draw();
        }
        if(checkCollisions(player, wrench)){
            wrenchShow = true;
            L1.innerHTML = "a wrench";
            noteChange = true;
            note.y = 455;
            document.body.appendChild(L1);
            //Inventory();
        }
        if(wrenchShow){
            wrench.x = 250;
            wrench.y = 200;
            wrench.width = 90;
            wrench.height = 120;
            wrenchShown = true;
            window.setTimeout(function(){
                wrench.x = 270;
                wrench.y = 520;
                wrench.width = 20;
                wrench.height = 30;
                wrenchShow = false;
            }, 2000);
        }
        if(checkCollisions(player, note) && noteChange){
            note.x = 60;
            note.y = 20;
            note.width = 200;
            note.height = 400;
            window.setTimeout(function(){
                note.x = 80;
                note.y = 455;
                note.width = 50;
                note.height = 40;
            }, 2000);
        }
        if(keys[" "]){
            switch(checkCollisions(bags[2], player)){
                case false:
                    alert("There is nothing in this bag. Try another one!");
                    keys[" "] = false;
                    break;
                case true:
                    keys[" "] = false;
                    L2.innerHTML = "an apple";
                    document.body.appendChild(L2);
                    apple.x = 450;
                    apple.y = 200;
                    apple.width = 120;
                    apple.height = 120;
                    appleShown = true;
                    window.setTimeout(function(){
                        apple.x = 530;
                        apple.y = 490;
                        apple.width = 30;
                        apple.height = 30;
                    }, 2000);
                    clickYN = true
                    break;
            }
        } 
    }
    if(next3 == false){
        couch.draw();
    }
    if(clickYN){
        couch.addEventListener("click", Clickey());
        clickYN = false;
    }
        // if(checkCollisions(player, couch)){
        //     inputPush.style.display = "inline-block";
        //     TextPush.style.display = "inline-block";
        //     pushSubmit.style.display = "inline-block";
        // }

    

    player.draw();  
}

function Clickey(){
    console.log("hi")
    answer = prompt("What do you want to do to the couch?");
    if(answer == "push" || answer == "Push"){
        couch.x = couch.x + 100;
        alert("right")
        return;
    }
    else{
        alert("That is not the answer. Hint(push)")
        return;
    }
}

function Hi(){
    alert("hi")
}
