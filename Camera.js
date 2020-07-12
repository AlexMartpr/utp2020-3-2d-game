'use strict'

class Camera {
  constructor(initX, initY) {
    this.x = initX;
    this.y = initY;
  }

  drawVisibleMap() {
    ctx.drawImage(img, this.x, this.y,
                  200, 200,
                  0, 0,
                  canvas.width, canvas.height);
  }

  updateCoordinates(){
    if (leftPressed) {
      this.x--;
    } else if (rightPressed) {
      this.x++;
    }

    if (downPressed){
      this.y++;
    } else if (upPressed) {
      this.y--;
    }

    if (this.x < 0) {
      this.x = 0;
    } else if (this.x + 200 > img.naturalWidth) {
      this.x = img.naturalWidth - 200;
    }

    if (this.y < 0) {
      this.y = 0;
    } else if (this.y + 200 > img.naturalHeight){
      this.y = img.naturalHeight - 200;
    }

  }

}
