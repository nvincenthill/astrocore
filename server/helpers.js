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

// TODO: Refactor to handle clicks dynamically by owner of node and click
const validateClick = (game, x, y, owner) => {
  console.log('validating clicks');
  game.state.nodes.forEach((node) => {
    if (validateNodeClicked(node, x, y)) {
      console.log('node was clicked');
      if (game.playerOne.selectedNode === null) {
        game.selectNode(node, owner);
      } else {
        console.log('launching fighters');
        const numberOfFighters = node.score / 2;
        game.playerOne.selectedNode.createFighters(numberOfFighters, node);
        game.deselectNode(owner);
      }
    }
  });
};

module.exports = {
  validateNodeClicked,
  validateClick,
};
