import React from 'react';
import Game from '../Game';
// import FontAwesome from 'react-fontawesome';

class Applet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: {
        isGamePlaying: true,
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
    return (
      <div className="game">
        <Game gameState={gameState} />
        {gameState.isGamePlaying ? null : startButton}
        <div className="stars" />
        <div className="twinkling" />
        {/* <div className="clouds" /> */}
      </div>
    );
  }
}

export default Applet;
