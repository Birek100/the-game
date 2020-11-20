import React, {useRef, useState, useEffect} from 'react';

function Game () {
  const canvasRef = useRef(null);
  let [penguinx, setPenguinx] = useState(50);
  let [penguiny, setPenguiny] = useState(250);
  console.log(canvasRef);
  let move = () => {setPenguinx(prevpenguinx => prevpenguinx + 1); console.log(penguinx)};
  let penguin = (ctx) => {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(penguinx,penguiny,20,20);
  }

  useEffect(() => { 
    const render = () => {
    move();
    requestAnimationFrame(render);
    }
     const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    penguin(ctx);
    render();
  }, []);

  return (
      <div>
      <h1>GAME</h1>
      <button onClick={move}>Move</button>
      <canvas ref={canvasRef} width={500} height={500} />
      </div>
    )
}

export default Game

