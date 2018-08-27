const validateNodeClicked = (node, x, y) => {
  const clickRadius = 20 + node.radius;
  if (
    y < node.y + clickRadius
    && y > node.y - clickRadius
    && (x < node.x + clickRadius && x > node.x - clickRadius)
  ) {
    return true;
  }
  return false;
};

const validateClicks = (game, x, y) => {
  // game.gameState.nodes.forEach((node) => {
  //   if (validateNodeClicked(node, x, y)) {
  //     const { firstNodeClicked } = game;
  //     if (firstNodeClicked) {
  //       if (node.id === firstNodeClicked.id) {
  //         return;
  //       }
  //       firstNodeClicked.toggleSelectNode();
  //       game.firstNodeClicked = null;
  //       firstNodeClicked.createFighters(firstNodeClicked.score / 2, node);
  //     } else if (node.score !== 0) {
  //       game.firstNodeClicked = node;
  //       node.toggleSelectNode();
  //     }
  //   }
  // });
};

module.exports = {
  validateNodeClicked,
  validateClicks,
};
