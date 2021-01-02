import React, { useRef, useState, useEffect, useCallback } from 'react';
import Component from './component'
import controlls from './controlls'
import everyInterval from './everyInterval'


function Game() {
  const canvasRef = useRef(null);
  let myObstacles = [];
  let myDiamonds = [];
  let score = 0;
  let frame = 0;

  let penguin = new Component(20, 20, '#FF0000', 240, 450);
  let myScore = new Component('30px', 'Consolas', 'black', 300, 40, 'text');
  let finishLine = new Component(500, 5, 'black', 0, -20);

  controlls(penguin);

  const render = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    for (let i = 0; i < myObstacles.length; i += 1) {
      if (penguin.meet(myObstacles[i])) {
        cancelAnimationFrame(render);
        return;
      }
    }
    for (let i = 0; i < myDiamonds.length; i += 1) {
      if (penguin.meet(myDiamonds[i])) {
        score += 10;
        (myDiamonds[i].width = null),
          (myDiamonds[i].height = null),
          (myDiamonds[i].x = null),
          (myDiamonds[i].y = null);
      }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    penguin.newPosition();
    penguin.draw(ctx);
    frame += 2;
    if (frame == 1 || everyInterval(frame, 200)) {
      let minWidth = 50;
      let maxWidth = 350;
      let width = Math.floor(
        Math.random() * (maxWidth - minWidth + 1) + minWidth
      );
      let minGap = 40;
      let maxGap = 100;
      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
      myObstacles.push(new Component(width, 20, 'green', 0, -20));
      myObstacles.push(
        new Component(500 - width - gap, 20, 'green', width + gap, -20)
      );
    }
    for (let i = 0; i < myObstacles.length; i += 1) {
      myObstacles[i].y += +2;
      myObstacles[i].draw(ctx);
    }
    if (frame == 100 || everyInterval(frame + 100, 200)) {
      let minWidth = 100;
      let maxWidth = 300;
      let width = Math.floor(
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
      cancelAnimationFrame(render);
      return;
    }

    myScore.text = 'SCORE: ' + score;
    myScore.draw(ctx);
    requestAnimationFrame(render);
  }; 

  useEffect(() => {
    render();
  }, []);

  return (
    <div>
      <h1>GAME</h1>
      <canvas ref={canvasRef} width={500} height={500} />
    </div>
  );
}

export default Game;
