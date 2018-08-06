import React from 'react';
import Game from '../Game';
// import FontAwesome from 'react-fontawesome';

class Applet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: {
        isGamePlaying: false,
      },
    };
  }

  render() {
    const { gameState } = this.state;
    return (
      <div className="game">
        <Game gameState={gameState} />
        <h1 className="game-title">
AstroCore
        </h1>
        <div className="stars" />
        <div className="twinkling" />
        <div className="clouds" />
      </div>
    );
  }
}

export default Applet;
