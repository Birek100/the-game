function controlls (obj) {

document.onkeyup = function(e) {
    clearmove(obj);
  };

  document.onkeydown = function(e) {
    if (e.keyCode == 37) {
      moveLeft(obj);
    }
    if (e.keyCode == 39) {
      moveRight(obj);
    }
  };

  const moveRight = (obj) => {
    obj.speedX = +3;
  };
  const moveLeft = (obj) => {
    obj.speedX = -3;
  };

  const clearmove = (obj) => {
    obj.speedX = 0;
    obj.speedY = 0;
  }; 
}

export default controlls