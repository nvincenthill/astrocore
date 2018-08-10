class Fighter {
  constructor(id, x, y, destinationNode, color, owner) {
    this.destinationNode = destinationNode;
    this.id = id;
    this.x = x;
    this.y = y;
    this.destX = destinationNode.x;
    this.destY = destinationNode.y;
    this.velocity = 1;
    this.velocityX = this.velocity;
    this.velocityY = this.velocity;
    this.color = color === 'goldenRod' ? 'yellow' : 'red';
    this.owner = owner;
    this.isAlive = true;
  }

  move() {
    if (this.isAlive) {
      this.x += this.velocity;
      this.y += this.velocity;

      // kill if off screen
      if (this.x > window.innerWidth || this.y > window.innerHeight) {
        this.kill();
      }

      // kill if it impact node
      if (Math.abs(this.x - this.destX) < 10 && Math.abs(this.y - this.destY) < 10) {
        this.kill();
        if (this.destinationNode.score === 0) {
          this.destinationNode.captureNode(this.owner);
        }
        if (this.owner === this.destinationNode.owner) {
          this.destinationNode.score += 1;
        } else {
          this.destinationNode.score -= 1;
        }
      }
    }
  }

  kill() {
    this.isAlive = false;
  }
}

module.exports = {
  Fighter,
};
