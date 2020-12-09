import React, {useRef, useState, useEffect, useCallback} from 'react';
/*
const penguin = (ctx, penguinx, penguiny) => {
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(penguinx, penguiny, 20, 20);
}
*/
function Game () {
  const canvasRef = useRef(null);
  //let [score, setScore] = useState(10);
  let [penguinx, setPenguinx] = useState(240);
  let [penguiny, setPenguiny] = useState(450);
  let score = 0;
  let myObstacles = [];
  let myDiamonds = [];
  let frame = 0;
  


function component(width, height, color, x, y, type) {
  if (type == "image") {
    this.image = new Image();
    this.image.src = color;
  }
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;    
    this.draw = function(ctx){
      if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } 
      else if (type == "text") {
          ctx.font = this.width + " " + this.height;
          ctx.fillStyle = color;
          ctx.fillText(this.text, this.x, this.y);
      }
      else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }
    this.newPosition = function() {
        this.x += this.speedX;
        this.y += this.speedY;
          if (this.x < 0) {
            this.x = 0
          }
          if (this.x + this.width > 500) {
            this.x = 500 - this.width
          }         
    }    
    this.meet = function(otherobj) {
        const myleft = this.x;
        const myright = this.x + (this.width);
        const mytop = this.y;
        const mybottom = this.y + (this.height);
        const otherleft = otherobj.x;
        const otherright = otherobj.x + (otherobj.width);
        const othertop = otherobj.y;
        const otherbottom = otherobj.y + (otherobj.height);
        let meet = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            
            meet = false;

        }
        return meet;
    }
}

function everyinterval(frame, n) {
  if ((frame / n) % 1 == 0) {return true;}
  return false;
}

let penguin = new component(20, 20, "#FF0000", 240, 450)
let myScore = new component("30px", "Consolas", "black", 300, 40, "text");

const render = () => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');
    for (let i = 0; i < myObstacles.length; i += 1) {
      if (penguin.meet(myObstacles[i])) {
        console.log('crash')
     //   cancelAnimationFrame(render);  
      //  return; 
      }
    }
    for (let i = 0; i < myDiamonds.length; i += 1) {
    if (penguin.meet(myDiamonds[i])) { score += 10; myDiamonds[i].width=null, myDiamonds[i].height=null, myDiamonds[i].x=null, myDiamonds[i].y=null }
    };
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    penguin.newPosition();
    penguin.draw(ctx);
    frame += 2;
      if (frame == 1 || everyinterval(frame, 200)) {
        let minWidth = 50;
        let maxWidth = 350;
        let width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
        let minGap = 40;
        let maxGap = 100;
        let gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap) 
        myObstacles.push(new component(width, 20, "green", 0, -50));
        myObstacles.push(new component(500-width-gap, 20, "green", width+gap, -50));
      }
      for (let i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].y += +2;
        myObstacles[i].draw(ctx);
      }
      if (frame == 100 || everyinterval(frame - 100, 200)) {
        let minWidth = 100;
        let maxWidth = 300;
        let width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
        myDiamonds.push(new component(20, 20, "/static/diamond-small.jpg", width, -50, "image"));
        
      }
      for (let i = 0; i < myDiamonds.length; i += 1) {
        myDiamonds[i].y += +2;
        myDiamonds[i].draw(ctx);
      }
      myScore.text = "SCORE: " + score;
      myScore.draw(ctx);
    requestAnimationFrame(render) 
}

 useEffect(() => {
      render();
    }, []);

document.onkeyup = function(e) {
  clearmove();
    }

document.onkeydown = function(e) {
      if(e.keyCode == 37) { penguinLeft() }
      if(e.keyCode == 39) { penguinRight() }
    }

const penguinRight = () => {
  penguin.speedX = +3;
}
    const penguinLeft = () => {
  penguin.speedX = -3;
} 

const clearmove = () => {
    penguin.speedX = 0; 
    penguin.speedY = 0; 
}
//setTimeout((ctx) => {
//    setPenguinx(prevpenguinx => ++prevpenguinx);
//    ctx.clearRect(0, 0, canvas.width, canvas.height)
//    }, 1000) 

/*
  setTimeout(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    console.log(penguinx)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    penguin(ctx, penguinx, penguiny);
    let blueGamePiece = new obstacle(75, 75, "blue", 10, 10);
    blueGamePiece.draw(ctx);
    //setPenguinx(prevpenguinx => ++prevpenguinx);  
    
    if (canvas) {
      
      //penguin(ctx, penguinx, penguiny);

    } 
  }, 1000, penguinx, penguiny); 
*/


  return (
      <div>
      <h1>GAME</h1>
      <canvas ref={canvasRef} width={500} height={500} />
      </div>
    )
}

export default Game

