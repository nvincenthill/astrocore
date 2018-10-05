class Fighter {
  constructor(fighterProps) {
    this.radius = 10;
    this.x = fighterProps.x;
    this.y = fighterProps.y;
    this.originId = fighterProps.originId;
    this.target = fighterProps.target;
    this.targetNodePts = fighterProps.targetNodePts;
    [this.originNodeX, this.originNodeY] = fighterProps.originNodePts;
    [this.destX, this.destY] = fighterProps.targetNodePts;
    this.owner = fighterProps.owner;
    this.color = fighterProps.color;
    this.velocity = 5; // graph.hasEdge(originNode.id, targetNode.id) ? 5 : 3
    [this.velocityX, this.velocityY] = this.calcVelocityVectors();
    this.isAlive = true;
  }

  calcVelocityVectors() {
    const xDiff = this.destX - this.x;
    const yDiff = this.destY - this.y;
    const speedDelimiter = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    return [this.velocity * (xDiff / speedDelimiter), this.velocity * (yDiff / speedDelimiter)];
  }

  move() {
    if (this.isAlive) {
      // TODO: Refactor for responsive velocity adjustment
      this.x += this.velocityX / 1500;
      this.y += this.velocityY / 1500;
    }
  }

  validateCollisions(gameState) {
    if (Math.abs(this.x - this.destX) < 0.01 && Math.abs(this.y - this.destY) < 0.01) {
      this.kill();
      this.mutateTargetNode(gameState);
    }
  }

  mutateTargetNode(gameState) {
    gameState.nodes.forEach((node) => {
      if (this.target.id === node.id) {
        if (Math.floor(node.score) === 0) {
          node.captureNode(this.owner);
        }
        if (this.owner === node.owner || this.owner === null) {
          if (node.score < 100) {
            node.incrementScoreByOne();
          }
        } else {
          node.decrementScoreByOne();
        }
      }
    });
  }

  handleUpdate(gameState) {
    this.move();
    this.validateCollisions(gameState);
    if (!this.isAlive) {
      delete this;
    }
  }

  kill() {
    this.isAlive = false;
  }
}

module.exports = {
  Fighter,
};
