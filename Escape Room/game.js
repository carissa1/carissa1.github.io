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

function Clickey(){
    console.log("hi")
    answer = prompt("What do you want to do to the couch?");
    if(answer == "push" || answer == "Push"){
        couch.x = couch.x + 200;
        alert("right")
        return;
    }
    else{
        alert("That is not the answer.")
        return;
    }
}
function OpenSafe(){
    answer1 = prompt("what is the code to open the safe?");
    if(answer1 == "65792"){
        doorShow = true;
        clicked1 = true;
    }
    else{
        alert("That is not the answer");
        clicked1 = true;
        window.setTimeout(function(){
            clicked1 = false;
        }, 2000)
    }
}
// initialize our variables and start our game loop
function startGame()
{
    canvas = document.getElementById("gc");
    ctx = canvas.getContext("2d");

    var fps = 1000 / 30;
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
    // setInterval(function(){
    //     roar.play();
    // }, 5000)
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
            P6.innerHTML = "Paper, 5(level 4)";
            document.body.appendChild(P6);
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
            P1.innerHTML = "Wrench, 1";
            noteChange = true;
            note.y = 455;
            document.body.appendChild(P1);
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
                    P2.innerHTML = "Apple, 3";
                    document.body.appendChild(P2);
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
    function Clicked(){
        couch.draw();
        //couch.style.draggable = "true";
        document.addEventListener("click", Clickey)
        click = true;
    }
    if(next3 == false){
        document.getElementById("gc").style.filter = "brightness(20%)";
        couchI.src = "couch2.png";
        for(i = 0; i<2; i++){
            L3[i].draw();
        }
        if(FLShow == true){
            FL.draw();
        }
        if(yesL3 == true){
            for(i = 0; i<3; i++){
                L3S[i].draw();
            }
        }
        if(KShow == true){
            knife.draw();
        }
        Clicked();
        if(keys["1"] && click == true){
            document.body.removeChild(P1);
            wrenchShow = true;
            wrench.x = board.x+20;
            wrench.y = board.y+20;
            wrench.width = 50;
            wrench.height = 40;
            window.setTimeout(function(){
                yesL3 = false;
                wrenchShow = false;
                FLShow = true;
            }, 1000);
        }
        if(checkCollisions(player, FL) && yesL3 == false){
            FLShow = false;
            FLShown = true;
            P3.innerHTML = "Flashlight, 2";
            document.body.appendChild(P3)
            window.setTimeout(function(){
                couch.x = 50;
                // window.setTimeout(function(){
                //     document.getElementById("gc").style.background = "url('darkRoom.jpg')";
                //     document.getElementById("gc").style.backgroundSize = "cover";
                //     couchI.style.filter = "brightness(20%)";
                // }, 2000)
            }, 2000)
        }
        if(yesL3 == false && keys["2"]){
            flashI.src = "FL2.png";
            FLShow = true;
            FL.x = player.x + 10;
            FL.y = player.y + 50;
            document.getElementById("gc").style.filter = "brightness(50%)";
            if(checkCollisions(FL, couch)){
                couchI.src = "couch.png";
            }
            // if(checkCollisions(player, BO)){
            //     BO.x = 200;
            //     BO.y = 150;
            //     BookOCI.src = "bookOpen.png";
            // }
        }
        if(checkCollisions(player, BO) && KShown == false){
            BO.x = 200;
            BO.y = 150;
            BO.width = 240;
            BO.height = 180; 
            BookOCI.src = "bookOpen.png";
            KShow = true;
            if(checkCollisions(player, knife)){
                P4.innerHTML = "knife, 3";
                document.body.appendChild(P4);
                KShown = true;
                KShow = false;
            }
            window.setTimeout(function(){
                BO.x = 310;
                BO.y = 465;
                BO.width = 40;
                BO.height = 30; 
                BookOCI.src = "bookC.png";
                KShow = false;
            }, 3000);
        }
        if(keys["3"] && KAShown == false && FLShown == true){
            appleShow = true;
            KShow = true;
            apple.x = knife.x - 80;
            apple.y = knife.y;
            apple.width = 100;
            apple.height = 100;
            document.body.removeChild(P2);
            document.body.removeChild(P4);
            window.setTimeout(function(){
                KShow = false;
                appleShow = false;
                keyShow = true;
                KAShown = true;
            }, 2000)
        }
        if(appleShow == true){
            apple.draw();
        }
        if(keyShow == true){
            key.draw();
        }
        if(checkCollisions(player, key) && KAShown == true){
            P5.innerHTML = "Key, 4";
            document.body.appendChild(P5);
            keyShow = false;
            keyShown = true;
            // door3 = true;
        }
    }
    function OpenSafeCheck(){
        OpenSafe();
    }
    if(next4 == false){
        for(var i = 0; i<2; i++){
            level4[i].draw();
        }
        if(pageShow == true){
            code.draw();     
        }
        if(keys["2"]){
            flashI.src = "FL2.png";
            FLShow = true;
            FL.x = player.x + 10;
            FL.y = player.y + 50;
            document.getElementById("gc").style.filter = "brightness(50%)";
        }
        if(keys["5"]){
            pageShow = true;
            window.setTimeout(function(){
                pageShow = false;
            }, 2000)
        }
        if(keys[" "]){
            if(clicked1 == false){
                OpenSafeCheck();
            }
        //         answer1 = prompt("what is the code to open the safe?");
        //         if(answer1 == "65792"){
        //             doorShow = true;
        //             clicked1 = true;
        //         }
        //         else{
        //             alert("That is not the answer");
        //             clicked1 = true;
        //             document.setTimeout(function(){
        //                 clicked1 = false;
        //             }, 2000)
        //         }
        //     }
        }
        if(doorShow == true){
            Door123.draw();
        }
        if(keys["4"]){
            doorI.src = "DoorO.png";
            doorShow = true;
            document.body.removeChild(P5);
        }
    }

    player.draw();  
}
