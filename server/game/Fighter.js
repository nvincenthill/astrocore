class Fighter {
  constructor(id, x, y, originNode, destinationNode, owner, color) {
    this.id = id;
    this.radius = 5;
    this.x = x;
    this.y = y;
    this.destinationNode = destinationNode;
    this.originNode = originNode;
    this.owner = owner;
    this.color = color;
    this.destX = destinationNode.x;
    this.destY = destinationNode.y;
    this.velocity = 5; // graph.hasEdge(originNode.id, destinationNode.id) ? 5 : 3
    [this.velocityX, this.velocityY] = this.calcVelocity();
    this.isAlive = true;
  }

  calcVelocity() {
    console.log('cal velocity');
    const xDiff = this.destX - this.x;
    const yDiff = this.destY - this.y;
    const speedDelimiter = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    return [this.velocity * (xDiff / speedDelimiter), this.velocity * (yDiff / speedDelimiter)];
  }

  move() {
    if (this.isAlive) {
      this.x += this.velocityX;
      this.y += this.velocityY;

      // kill if off screen
      // TODO: refactor for dynamic screen widths
      if (this.x > 375 || this.y > 812) {
        this.kill();
      }

      // kill if it impact node
      if (Math.abs(this.x - this.destX) < 10 && Math.abs(this.y - this.destY) < 10) {
        this.kill();
        if (Math.floor(this.destinationNode.score) === 0) {
          this.destinationNode.captureNode(this.owner);
        }
        if (this.owner === this.destinationNode.owner || this.owner === null) {
          if (this.destinationNode.score < 100) {
            this.destinationNode.score += 1;
          }
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
