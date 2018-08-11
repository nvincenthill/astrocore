import { Fighter } from './Fighter';

class Node {
  constructor(id, x, y, score, color, owner, graph) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.score = score;
    this.color = color;
    this.owner = owner;
    this.selected = false;
    this.fighters = [];
    this.graph = graph;
  }

  incrementScore() {
    if (this.score < 100 && this.score !== 0) {
      this.score += 0.025;
    }
  }

  addToScore(num) {
    this.score += num;
  }

  captureNode(owner) {
    console.log('node captured');
    this.owner = owner;
    this.color = owner === 'Player1' ? 'red' : 'goldenRod';
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
    const fighter = new Fighter(
      1,
      this.x,
      this.y,
      this,
      destinationNode,
      this.color,
      this.owner,
      this.graph,
    );
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
