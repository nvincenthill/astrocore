import React from 'react';
import Game from '../Game';
import socket from '../socket';

class Applet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: {
        isGamePlaying: false,
      },
    };
  }

  handleGameStart() {
    this.toggleGamePlaying();
  }

  toggleGamePlaying() {
    const { gameState } = this.state;
    gameState.isGamePlaying = !gameState.isGamePlaying;
    this.setState({ gameState });
    const playerInformation = {};
    playerInformation.name = 'Nick';
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
    const game = <Game gameState={gameState} />;

    return (
      <div className="game">
        {gameState.isGamePlaying ? game : startButton}
        <div className="stars" />
        {/* <div className="twinkling" />
        <div className="clouds" /> */}
      </div>
    );
  }
}

export default Applet;
