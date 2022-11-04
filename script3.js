/** @type {HTMLCanvasElement}*/

const canvas3 = document.getElementById("myCanvas3");
const ctx3 = canvas3.getContext("2d");
const CANVAS3_WIDTH = canvas3.width = 500;
const CANVAS3_HEIGHT = canvas3.height = 1000;
const numberOfEnemies3 = 10;
const enemiesArray3 = [];

let gameFrame3 = 0;

class Enemy3{
    constructor(){
        this.image = new Image();
        this.image.src = "_Images/enemy3.png";
        this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 218;
        this.spriteHeight = 177;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas3.width - this.width);
        this.y = Math.random() * (canvas3.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = 0;
        this.angleSpeed = Math.random() * 2 + 0.5;
        this.sinCurveConst = Math.random() * 200 + 50;
    }

    update(){
        this.x = canvas3.width/2 * Math.sin(this.angle * Math.PI/90) + canvas3.width/2 - this.width/2;
        this.y = canvas3.height/2 * Math.cos(this.angle * Math.PI/360) + canvas3.height/2 - this.height/2;
        this.angle += this.angleSpeed;
        if (this.x + this.width < 0) this.x = canvas3.width;

        //animate Sprites
        if (gameFrame3 % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++;    
        }     

    }

    draw(){
        //ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx3.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

for (let i = 0; i < numberOfEnemies3; i++){
    enemiesArray3.push(new Enemy3());
}


function animate(){
    ctx3.clearRect(0, 0, CANVAS3_WIDTH, CANVAS3_HEIGHT);
    enemiesArray3.forEach(enemy =>{
        enemy.draw();
        enemy.update();
    });
    gameFrame3++;
    requestAnimationFrame(animate);
}
animate();
