function Player(x, y) {
    this.x = x;
    this.y = y;
    this.width = 90;
    this.height = 95;
    this.speed = 1;
}

Player.prototype.HI = function () {
    if (keys["ArrowUp"]) {
        this.y -= this.speed
    }
    if (keys["ArrowDown"]) {
        this.y += this.speed
    }
    if (keys["ArrowRight"]) {
        this.x += this.speed
    }
    if (keys["ArrowLeft"]) {
        this.x -= this.speed;
    }
    if(this.x > 530 && door == true){
        door2 = false;
        door = false;
    }
    else if(this.x > 530 && door2 == true){
        door3 = false;
    }
    else if ((this.x > 530 && door == false) || (this.x > 530 && door2 == false) || (this.x > 530 && door3 == false)) {
        this.x = 530;
    }
    if (this.x < -10) {
        this.x = -10;
    }
    if (this.y > 510) {
        this.y = 500;
    }
    if (this.y < -10) {
        this.y = 10;
    }
}
//     function Now(event){
//         var x1 = event.pageX;
//         var y1 = event.clientY;
//         while(this.x < event.pageX){
// console.log(event.pageX)
//             this.x += 1;
//         }

//         var coords = "X coords: " + x1 + ", Y coords: " + y1;
//     }



var char = new Image();
char.src = "char.png";

Player.prototype.draw = function () {
    ctx.drawImage(char, this.x, this.y, this.width, this.height);
}