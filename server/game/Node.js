const { Fighter } = require('./Fighter');

class Node {
  constructor(id, x, y, score, color, owner) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.score = score;
    this.radius = 20 + this.score / 3;
    this.initialColor = color;
    this.color = color;
    this.owner = owner;
    this.selected = false;
    this.fighters = [];
  }

  incrementScore() {
    if (this.score < 100 && this.score !== 0) {
      this.score += 0.025;
      this.radius = 20 + this.score / 3;
    }
  }

  captureNode(owner) {
    this.owner = owner;
    this.color = owner === 'Player1' ? 'red' : 'yellow';
  }

  toggleSelectNode() {
    if (!this.isSelected) {
      this.color = 'blue';
      this.isSelected = true;
    } else {
      this.color = this.initialColor;
    }
  }

  createFighter(destinationNode) {
    const fighter = new Fighter(1, this.x, this.y, this, destinationNode, this.owner);
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
