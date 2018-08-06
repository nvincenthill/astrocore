class Node {
  constructor() {
    this.x = null;
    this.y = null;
    this.score = null;
    this.id = null;
  }

  eat() {
    return this.x;
  }
}

module.exports = {
  Node,
};
