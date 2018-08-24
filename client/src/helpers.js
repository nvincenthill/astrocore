const validateNodeClicked = (node, x, y) => {
  const radius = 20 + node.score / 1.6;
  if (y < node.y + radius && y > node.y - radius && (x < node.x + radius && x > node.x - radius)) {
    return true;
  }
  return false;
};

module.exports = {
  validateNodeClicked,
};
