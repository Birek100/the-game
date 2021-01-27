import React, { useRef, useEffect } from 'react';
import Component from './component';
import controlls from './controlls';
import everyInterval from './everyInterval';
import buttonBack from '../../scripts/buttonback';

function Game() {
  const canvasRef = useRef(null);

  function restart() {
    document.location.href = '';
  }

  const myObstacles = [];
  const myDiamonds = [];
  let score = 0;
  let frame = 0;

  const penguin = new Component(20, 20, '#FF0000', 240, 450);
  const myScore = new Component('30px', 'Consolas', 'black', 300, 40, 'text');
  const finishLine = new Component(500, 5, 'black', 0, -20);
  controlls(penguin);

  const render = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    for (let i = 0; i < myObstacles.length; i += 1) {
      if (penguin.meet(myObstacles[i])) {
        const gameOver = window.confirm('YOU LOOSE. TRY ONCE MORE??');
        if (gameOver === true) {
          restart();
        }
        cancelAnimationFrame(render);
        return;
      }
    }
    for (let i = 0; i < myDiamonds.length; i += 1) {
      if (penguin.meet(myDiamonds[i])) {
        score += 10;
        myDiamonds[i].width = null;
        myDiamonds[i].height = null;
        myDiamonds[i].x = null;
        myDiamonds[i].y = null;
      }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    penguin.newPosition();
    penguin.draw(ctx);
    frame += 2;
    if (frame === 1 || everyInterval(frame, 200)) {
      const minWidth = 50;
      const maxWidth = 350;
      const width = Math.floor(
        Math.random() * (maxWidth - minWidth + 1) + minWidth
      );
      const minGap = 40;
      const maxGap = 100;
      const gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
      myObstacles.push(new Component(width, 20, 'green', 0, -20));
      myObstacles.push(
        new Component(500 - width - gap, 20, 'green', width + gap, -20)
      );
    }
    for (let i = 0; i < myObstacles.length; i += 1) {
      myObstacles[i].y += +2;
      myObstacles[i].draw(ctx);
    }
    if (frame === 100 || everyInterval(frame + 100, 200)) {
      const minWidth = 100;
      const maxWidth = 300;
      const width = Math.floor(
        Math.random() * (maxWidth - minWidth + 1) + minWidth
      );
      myDiamonds.push(
        new Component(20, 20, '/static/diamond-small.jpg', width, -20, 'image')
      );
    }
    for (let i = 0; i < myDiamonds.length; i += 1) {
      myDiamonds[i].y += +2;
      myDiamonds[i].draw(ctx);
    }

    if (frame > 1050) {
      finishLine.y += 2;
      finishLine.draw(ctx);
    }
    if (penguin.meet(finishLine)) {
      const gameOver = window.confirm(
        `YOU WIN AND SCORE ${score} TRY ONCE MORE??`
      );
      if (gameOver === true) {
        restart();
      }
      cancelAnimationFrame(render);
      return;
    }

    myScore.text = `SCORE: ${score}`;
    myScore.draw(ctx);
    requestAnimationFrame(render);
  };

  useEffect(() => {
    render();
  }, []);

  return (
    <div className="game">
      <canvas id="canvas" ref={canvasRef} width={500} height={500} />

      <button
        type="button"
        className="menu__button"
        onClick={() => buttonBack()}>
        BACK
      </button>
    </div>
  );
}

export default Game;
