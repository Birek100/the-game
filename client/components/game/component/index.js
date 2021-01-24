class Component {
  constructor(width, height, color, x, y, type) {
    if (type === 'image') {
      this.image = new Image();
      this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.draw = function(ctx) {
      if (type === 'image') {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      } else if (type === 'text') {
        ctx.font = `${this.width} ${this.height}`;
        ctx.fillStyle = color;
        ctx.fillText(this.text, this.x, this.y);
      } else {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    };
    this.newPosition = function() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0) {
        this.x = 0;
      }
      if (this.x + this.width > 500) {
        this.x = 500 - this.width;
      }
    };
    this.meet = function(otherobj) {
      const myleft = this.x;
      const myright = this.x + this.width;
      const mytop = this.y;
      const mybottom = this.y + this.height;
      const otherleft = otherobj.x;
      const otherright = otherobj.x + otherobj.width;
      const othertop = otherobj.y;
      const otherbottom = otherobj.y + otherobj.height;
      let meet = true;
      if (
        mybottom < othertop ||
        mytop > otherbottom ||
        myright < otherleft ||
        myleft > otherright
      ) {
        meet = false;
      }
      return meet;
    };
  }
}

export default Component;
