class Node {
  constructor(value) {
    this.x = null;
    this.y = null;
    this.value = value;
    this.id = null;
  }

  eat() {
    return this.x;
  }
}

module.exports = {
  Node,
};
