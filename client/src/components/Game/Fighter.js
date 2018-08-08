class Fighter {
  constructor(id, x, y, velocity, color, owner) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.color = color;
    this.owner = owner;
    this.isAlive = true;
  }

  move() {
    console.log('moving fighter', this);
    this.x += this.velocity;
    this.y += this.velocity;
  }

  kill() {
    console.log('killing fighter', this);
    this.isAlive = false;
  }
}

module.exports = {
  Fighter,
};
