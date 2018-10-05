const { Fighter } = require('./Fighter');

class Node {
  constructor(id, x, y, score, color, owner) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.score = score;
    this.initialColor = color;
    this.color = color;
    this.owner = owner;
    this.selected = false;
    this.fighters = [];
  }

  incrementScore() {
    if (this.score < 100 && this.score !== 0) {
      this.score += 0.025;
    }
  }

  incrementScoreByOne() {
    this.score += 1;
  }

  decrementScoreByOne() {
    this.score -= 1;
  }

  captureNode(owner) {
    this.owner = owner;
    this.color = owner === 'PlayerOne' ? 'red' : 'yellow';
  }

  toggleSelectNode() {
    if (!this.isSelected) {
      this.color = 'blue';
      this.isSelected = true;
    } else if (this.owner === null) {
      this.color = 'white';
    } else {
      this.color = this.owner === 'PlayerOne' ? 'red' : 'yellow';
    }
  }

  createFighter(destinationNode) {
    const oriXY = [this.x, this.y];
    const tarXY = [destinationNode.x, destinationNode.y];
    const fighterProps = {
      x: this.x,
      y: this.y,
      originNodePts: oriXY,
      targetNodePts: tarXY,
      originId: this.id,
      target: destinationNode,
      owner: this.owner,
      color: this.color,
    };
    const fighter = new Fighter(fighterProps);
    this.fighters.push(fighter);
  }

  createFighters(n, destinationNode) {
    for (let i = 0; i < n; i += 1) {
      setTimeout(() => {
        this.createFighter(destinationNode);
        this.score -= 1;
      }, i * 100);
    }
  }
}

module.exports = {
  Node,
};
