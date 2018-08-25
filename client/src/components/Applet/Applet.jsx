import React from 'react';
import Game from '../Game';
import socket from '../socket';

class Applet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: {
        isGamePlaying: false,
        playerName: 'Player One',
        fps: 1,
      },
    };
  }

  componentDidMount() {
    this.handleInputTransmissions();
    this.handleServerTransmissions();
  }

  handleGameStart() {
    this.toggleGamePlaying();
  }

  createNewPlayer() {
    socket.emit('new player', 'some unique client generated value');
    this.setState({ playerName: 'player one' });
  }

  handleServerTransmissions() {
    socket.on('gamestate', (data) => {
      // handle graph update
      console.log(data);
    });
  }

  handleInputTransmissions() {
    const { gameState } = this.state;
    setInterval(() => {
      socket.emit(`${gameState.playerName} input`, { width: window.innerWidth, height: window.innerHeight });
    }, 1000 / gameState.fps);
  }

  toggleGamePlaying() {
    const { gameState } = this.state;
    gameState.isGamePlaying = !gameState.isGamePlaying;
    this.setState({ gameState });
    this.createNewPlayer();
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
