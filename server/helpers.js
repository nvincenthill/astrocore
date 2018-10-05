const validateNodeClicked = (node, x, y) => {
  const clickRadius = 0.1;
  if (
    y < node.y + clickRadius
    && y > node.y - clickRadius
    && (x < node.x + clickRadius && x > node.x - clickRadius)
  ) {
    console.log('node was clicked');
    return true;
  }
  return false;
};

module.exports = { validateNodeClicked };
