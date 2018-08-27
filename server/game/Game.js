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
    // move fighters
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
    console.log('adding player', name);
    if (this.playerOne.name === null) {
      this.playerOne.name = name;
    } else if (this.playerTwo.name === null) {
      this.playerTwo.name = name;
    } else {
      console.log('Game is full - cannot add player');
    }
  }

  selectNode(node, owner) {
    console.log(owner, this.playerOne.name);
    if (owner === this.playerOne.name) {
      console.log('selecting node for playerOne');
      this.playerOne.selectedNode = node;
    } else {
      console.log('selecting node for playerTwo');
      this.playerTwo.selectedNode = node;
    }
    node.toggleSelectNode();
  }

  deselectNode(owner) {
    if (owner === this.playerOne.name) {
      this.playerOne.selectedNode.toggleSelectNode();
      this.playerOne.selectedNode = null;
    } else {
      this.playerTwo.selectedNode.toggleSelectNode();
      this.playerTwo.selectedNode = null;
    }
  }
}

module.exports = Game;
