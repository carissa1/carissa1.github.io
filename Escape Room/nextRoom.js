function checkDoor(){
    if(paperShown == true && arrowShown == true){
        door = true;
        door2 = false;
    }
    if(wrenchShown == true && appleShown == true){
        door2 = true;
        door = false;
        door3 = false;
    }
    if(player.x > 530 && door2 == true){
        New2();
        door2 = false;
        door = false;
        door3 = false;
    }
    if(player.x > 530 && door == true){
        New1();
        door2 = false;
        door = false;
        door3 = false;
    }
}

function New1(){
    next1 = true;
    next2 = false;
    next3 = true;
    player.x = 10;
    player.y = 10;
}

function New2(){
    next1 = true;
    next2 = true;
    next3 = false;
    player.x = 10;
    player.y = 10;
    console.log(next3)
}