class Fighter {
  constructor(id, x, y, destinationNode, color, owner) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.velocityX = (-1 * (this.x - destinationNode.x)) / destinationNode.x;
    this.velocityY = (-1 * (this.y - destinationNode.y)) / destinationNode.y;
    this.color = color;
    this.owner = owner;
    this.isAlive = true;
  }

  move() {
    this.x += this.velocityX;
    this.y += this.velocityY;

    // kill if off screen
    if (this.x > window.innerWidth || this.y > window.innerHeight) {
      this.kill();
    }
  }

  kill() {
    this.isAlive = false;
  }
}

module.exports = {
  Fighter,
};
