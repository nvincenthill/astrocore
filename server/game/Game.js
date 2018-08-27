class Game {
  constructor(initialGameState) {
    this.playerOne = {
      name: null,
      selectedNode: null,
    };
    this.playerTwo = {
      name: null,
      selectedNode: null,
    };
    this.selectedNode = null;
    this.state = initialGameState;
  }

  handleGameLoop() {
    this.state.nodes.forEach((node) => {
      node.incrementScore();
      node.fighters.forEach((fighter) => {
        if (fighter.isAlive) {
          fighter.move();
        }
      });
    });

    // check for victory conditions
  }

  addPlayer(name) {
    if (this.playerOne.name === null) {
      this.playerOne.name = name;
    } else if (this.playerTwo.name === null) {
      this.playerTwo.name = name;
    } else {
      console.log('Game is full - cannot add player');
    }
  }

  validateClick(x, y, clicker) {
    this.state.nodes.forEach((node) => {
      if (this.validateNodeClicked(node, x, y)) {
        this.handleNodeClick(node, clicker);
      }
    });
  }

  validateNodeClicked(node, x, y) {
    const clickRadius = 20 + node.radius;
    if (
      y < node.y + clickRadius
      && y > node.y - clickRadius
      && (x < node.x + clickRadius && x > node.x - clickRadius)
    ) {
      return true;
    }
    return false;
  }

  handleNodeClick(node, clicker) {
    console.log('handling node clicked');
    if (clicker === this.playerOne.name) {
      if (this.playerOne.selectedNode) {
        console.log('launching playerOne fighters');
        const numberOfFighters = this.playerOne.selectedNode.score / 2;
        this.playerOne.selectedNode.createFighters(numberOfFighters, node);
        this.deselectNode(clicker);
      } else {
        this.selectNode(node, clicker);
      }
    } else if (clicker === this.playerTwo.name) {
      if (this.playerTwo.selectedNode) {
        console.log('launching playerTwo fighters');
        const numberOfFighters = this.playerTwo.selectedNode.score / 2;
        this.playerTwo.selectedNode.createFighters(numberOfFighters, node);
        this.deselectNode(clicker);
      } else {
        this.selectNode(node, clicker);
      }
    }
  }

  selectNode(node, clicker) {
    console.log(clicker, this.playerOne.name);
    if (clicker === node.owner) {
      if (clicker === this.playerOne.name) {
        console.log('selecting node for playerOne');
        this.playerOne.selectedNode = node;
      } else if (clicker === this.playerTwo.name) {
        console.log('selecting node for playerTwo');
        this.playerTwo.selectedNode = node;
      }
      node.toggleSelectNode();
    }
  }

  deselectNode(clicker) {
    if (clicker === this.playerOne.name) {
      this.playerOne.selectedNode.toggleSelectNode();
      this.playerOne.selectedNode = null;
    } else {
      this.playerTwo.selectedNode.toggleSelectNode();
      this.playerTwo.selectedNode = null;
    }
  }
}

module.exports = Game;
