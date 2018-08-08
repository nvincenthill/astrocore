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

  addOneToScore() {
    if (this.score < 100 && this.score !== 0) {
      this.score += 1;
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

  createFighter() {
    const fighter = new Fighter(1, this.x, this.y, 1, this.color, this.owner);
    this.fighters.push(fighter);
  }
}

module.exports = {
  Node,
};
