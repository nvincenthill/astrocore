const validateNodeClicked = (node, x, y) => {
  const clickRadius = 0.05;
  if (
    y < node.y + clickRadius
    && y > node.y - clickRadius
    && (x < node.x + clickRadius && x > node.x - clickRadius)
  ) {
    return true;
  }
  return false;
};

module.exports = { validateNodeClicked };
