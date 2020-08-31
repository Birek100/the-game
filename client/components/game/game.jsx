import React, {useRef, useState, useEffect} from 'react';

function Game () {
  const canvasRef = useRef(null);
  const [penguinx, setPenguinx] = useState(50);
  const [penguiny, setPenguiny] = useState(250);
  console.log(canvasRef);
  
let penguin = (ctx) => {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(penguinx,250,20,20);
  }
function update () {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 500, 500);
  setPenguinx(prevpenguinx => prevpenguinx + 1);
  console.log(penguinx);
  requestAnimationFrame(update)
}

  function start (ctx) {
    const canvas = canvasRef.current;
    penguin(ctx);
    requestAnimationFrame(update)
  }

  useEffect(() => { 
    const canvas = canvasRef.current;
    console.log(canvas);
    console.log(canvasRef);
    const ctx = canvas.getContext('2d');
    start(ctx);
   
    //let interval = setInterval(loop, 30);
  }, [update])

  return (
      <div>
      <h1>GAME</h1>
      <canvas ref={canvasRef} width={500} height={500} />
      </div>
    )
}

export default Game

