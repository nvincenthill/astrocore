const validateNodeClicked = (node, x, y) => {
  const radius = 20 + node.score / 1.6;
  if (y < node.y + radius && y > node.y - radius && (x < node.x + radius && x > node.x - radius)) {
    return true;
  }
  return false;
};

const validateClicks = (game, x, y) => {
  game.gameState.nodes.forEach((node) => {
    if (validateNodeClicked(node, x, y)) {
      const { firstNodeClicked } = game;
      if (firstNodeClicked) {
        if (node.id === firstNodeClicked.id) {
          return;
        }
        firstNodeClicked.toggleSelectNode();
        game.firstNodeClicked = null;
        firstNodeClicked.createFighters(firstNodeClicked.score / 2, node);
      } else if (node.score !== 0) {
        game.firstNodeClicked = node;
        node.toggleSelectNode();
      }
    }
  });
};

module.exports = {
  validateNodeClicked,
  validateClicks,
};
