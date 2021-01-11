/* eslint-disable no-param-reassign */
function controlls(obj) {
  const moveRight = (x) => {
    obj.speedX = +x;
  };
  const moveLeft = (x) => {
    obj.speedX = -x;
  };
  const clearmove = (x) => {
    obj.speedX = x;
    obj.speedY = x;
  };
  document.onkeyup = function () {
    clearmove(0);
  };
  document.onkeydown = function (e) {
    if (e.keyCode === 37) {
      moveLeft(3);
    }
    if (e.keyCode === 39) {
      moveRight(3);
    }
  };
}

export default controlls;
