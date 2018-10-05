const { validateNodeClicked } = require('../helpers');
const Client = require('./Client');

class Game {
  constructor(initialGameState) {
    this.playerOne = null;
    this.playerTwo = null;
    this.state = initialGameState;
  }

  // TODO: separate concerns and refactor code
  handleGameLoop() {
    this.state.nodes.forEach((node) => {
      node.incrementScore();
      node.fighters.forEach((fighter) => {
        if (fighter.isAlive) {
          fighter.handleUpdate(this.state);
        }
      });
    });

    // check for victory conditions
  }

  addPlayer(name) {
    if (!this.playerOne) {
      this.playerOne = new Client(name, 'PlayerOne');
    } else if (!this.playerTwo) {
      this.playerTwo = new Client(name, 'PlayerTwo');
    } else {
      console.log('Game is full - cannot add player');
    }
  }

  validateClick(x, y, clicker) {
    console.log('validating click');
    this.state.nodes.forEach((node) => {
      if (validateNodeClicked(node, x, y)) {
        this.handleNodeClick(node, clicker);
      }
    });
  }

  handleNodeClick(node, clicker) {
    let player;
    if (clicker === this.playerOne.name) {
      player = this.playerOne;
    } else if (clicker === this.playerTwo.name) {
      player = this.playerTwo;
    }

    if (player.selectedNode && node.id !== player.selectedNode.id) {
      const numberOfFighters = player.selectedNode.score / 2;
      player.selectedNode.createFighters(numberOfFighters, node);
      player.deselectNode();
    } else {
      player.selectNode(node);
    }
  }
}

module.exports = Game;
