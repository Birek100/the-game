import React, {useRef, useState, useEffect, useCallback} from 'react';

const penguin = (ctx, penguinx, penguiny) => {
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(penguinx, penguiny, 20, 20);
}



function Game () {
  const canvasRef = useRef(null);
  let [penguinx, setPenguinx] = useState(240);
  let [penguiny, setPenguiny] = useState(450);

  const penguinRight = () => {
  setPenguinx(prevpenguinx => ++prevpenguinx);
}

const penguinLeft = () => {
  setPenguinx(prevpenguinx => --prevpenguinx);
}

document.onkeyup = function(e) {
  if(e.keyCode == 37) { penguinLeft() }
  if(e.keyCode == 39) { penguinRight() }
}

function obstacle(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.draw = function(ctx){
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

  
/*
 useEffect(() => {
  const canvas = canvasRef.current;
       const ctx = canvas.getContext('2d');
       penguin(ctx, penguinx, penguiny)
       setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    setPenguinx(prevpenguinx => ++prevpenguinx);
    console.log(penguinx)
    }, 1000, ctx) 
    }, [penguinx, penguiny]);
*/

//setTimeout((ctx) => {
//    setPenguinx(prevpenguinx => ++prevpenguinx);
//    ctx.clearRect(0, 0, canvas.width, canvas.height)
//    }, 1000) 



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



  return (
      <div>
      <h1>GAME</h1>
      <canvas ref={canvasRef} width={500} height={500} />
      </div>
    )
}

export default Game

