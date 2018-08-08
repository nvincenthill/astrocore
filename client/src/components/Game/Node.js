class Node {
  constructor(id, x, y, score, color, owner) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.score = score;
    this.color = color;
    this.owner = owner;
  }

  addOneToScore() {
    if (this.score < 100 && this.score !== 0) {
      this.score += 1;
    }
  }
}

module.exports = {
  Node,
};
