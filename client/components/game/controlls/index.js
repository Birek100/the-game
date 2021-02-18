/* eslint-disable no-param-reassign */

export const moveRight = (playerObject, x) => {
  playerObject.speedX = +x;
};
export const moveLeft = (playerObject, x) => {
  playerObject.speedX = -x;
};
export const clearMove = (playerObject, x) => {
  playerObject.speedX = x;
  playerObject.speedY = x;
};
