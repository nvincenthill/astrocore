import { Fighter } from './Fighter';

class Node {
  constructor(id, x, y, score, color, owner) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.score = score;
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

  halfScore() {
    if (this.score !== 0) {
      this.score = Math.floor(this.score / 2);
    }
  }

  addToScore(num) {
    this.score += num;
  }

  captureNode(owner) {
    console.log('node captured');
    console.log('this');
    this.owner = owner;
    this.color = owner === 'Player1' ? 'red' : 'goldenRod';
    console.log('this');
  }

  toggleSelectNode() {
    if (!this.isSelected) {
      this.color = 'blue';
      this.isSelected = true;
    } else {
      this.color = this.owner === 'Player1' ? 'red' : 'goldenRod';
      this.isSelected = false;
    }
  }

  createFighter(destinationNode) {
    const fighter = new Fighter(1, this.x, this.y, destinationNode, this.color, this.owner);
    this.fighters.push(fighter);
  }

  createFighters(n, destinationNode) {
    for (let i = 0; i < n; i += 1) {
      setTimeout(() => {
        this.createFighter(destinationNode);
      }, i * 100);
    }
  }
}

module.exports = {
  Node,
};
