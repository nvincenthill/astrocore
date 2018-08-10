import { Fighter } from './Fighter';

class Node {
  constructor(id, x, y, score, color, owner) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.score = score;
    this.color = color;
    this.owner = owner;
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
