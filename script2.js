/** @type {HTMLCanvasElement}*/

const canvas2 = document.getElementById("myCanvas2");
const ctx2 = canvas2.getContext("2d");
const CANVAS2_WIDTH = canvas2.width = 500;
const CANVAS2_HEIGHT = canvas2.height = 1000;
const numberOfEnemies2 = 10;
const enemiesArray2 = [];

let gameFrame2 = 0;

class Enemy2{
    constructor(){
        this.image = new Image();
        this.image.src = "_Images/enemy2.png";
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas2.width - this.width);
        this.y = Math.random() * (canvas2.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        //this.angle = Math.random() * 2;
        this.angle = 0;
        this.angleSpeed = Math.random() * 0.2;
        this.sinCurveConst = Math.random() * 10;
    }

    update(){
        this.x -= this.speed;
        if (this.x + this.width < 0) this.x = canvas2.width;
        this.y += this.sinCurveConst * Math.sin(this.angle);
        this.angle += 0.1;
        //this.x += Math.random() * 20 - 10;
        //this.y += Math.random() * 20 - 10;

        //animate Sprites
        if (gameFrame2 % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++;    
        }     

    }

    draw(){
        //ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx2.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

for (let i = 0; i < numberOfEnemies2; i++){
    enemiesArray2.push(new Enemy2());
}


function animate(){
    ctx2.clearRect(0, 0, CANVAS2_WIDTH, CANVAS2_HEIGHT);
    enemiesArray2.forEach(enemy =>{
        enemy.draw();
        enemy.update();
    });
    gameFrame2++;
    requestAnimationFrame(animate);
}
animate();
