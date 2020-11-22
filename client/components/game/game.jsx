import React, {useRef, useState, useEffect, useCallback} from 'react';

const penguin = (ctx, penguinx, penguiny) => {
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(penguinx, penguiny, 20, 20);
}

function Game () {
  const canvasRef = useRef(null);
  let [penguinx, setPenguinx] = useState(50);
  let [penguiny, setPenguiny] = useState(250);

  setTimeout(() => {
    setPenguinx(prevpenguinx => ++prevpenguinx);  
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext('2d');
      penguin(ctx, penguinx, penguiny);
    }
  }, 1000);

  return (
      <div>
      <h1>GAME</h1>
      <canvas ref={canvasRef} width={500} height={500} />
      </div>
    )
}

export default Game

