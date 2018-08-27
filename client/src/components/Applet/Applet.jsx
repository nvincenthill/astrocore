import React from 'react';
import Game from '../Game';
import socket from '../socket';

class Applet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: {
        isGamePlaying: false,
        playerName: 'PlayerOne',
      },
    };

    this.setName = this.setName.bind(this);
    this.initialServerHandShake = this.initialServerHandShake.bind(this);
  }

  setName(name) {
    const { gameState } = this.state;
    gameState.playerName = name;
    this.setState({ gameState });
  }

  handleGameStart() {
    this.toggleGamePlaying();
  }

  toggleGamePlaying() {
    const { gameState } = this.state;
    gameState.isGamePlaying = !gameState.isGamePlaying;
    this.setState({ gameState });
  }

  initialServerHandShake() {
    const name = prompt('Enter your name');
    this.setName(name);
    const playerInformation = {};
    playerInformation.name = name;
    socket.emit('new player', playerInformation);
  }

  render() {
    const startButton = (
      <React.Fragment>
        <h1 className="game-title">
AstroCore
        </h1>
        <button type="button" className="game-button-start" onClick={() => this.handleGameStart()}>
          Start
        </button>
      </React.Fragment>
    );
    const { gameState } = this.state;
    const game = (
      <Game gameState={gameState} initialServerHandShake={this.initialServerHandShake} />
    );

    return (
      <div className="game">
        {/* <div className="clouds" /> */}
        {gameState.isGamePlaying ? game : startButton}
        <div className="stars" />
        {/* <div className="twinkling" /> */}
      </div>
    );
  }
}

export default Applet;
