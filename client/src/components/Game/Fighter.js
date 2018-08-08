class Fighter {
  constructor(id, x, y, score, color, owner) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.score = score;
    this.color = color;
    this.owner = owner;
  }
}

module.exports = {
  Fighter,
};
