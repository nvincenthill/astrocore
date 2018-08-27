import React from 'react';
import Draw from './drawHelpers';
import socket from '../socket';

class Game extends React.Component {
  componentDidMount() {
    const { initialServerHandShake } = this.props;
    initialServerHandShake();
    this.addEventListenerForClickEvents();
    this.handleServerTransmissions();
  }

  handleServerTransmissions() {
    const self = this; // remove this
    socket.on('gamestate', (clientPacket) => {
      const canvas = document.getElementsByClassName('gameboard');

      window.requestAnimationFrame(() => {
        Draw.drawGraph(clientPacket.gameState, canvas);
      });
    });
  }

  addEventListenerForClickEvents() {
    const { gameState } = this.props;
    const canvas = document.getElementsByClassName('gameboard')[0];

    // Add event listener for `click` events.
    canvas.addEventListener(
      'click',
      (e) => {
        socket.emit('click', { x: e.x, y: e.y, player: gameState.playerName });
      },
      false,
    );
  }

  render() {
    const width = window.innerWidth - window.innerWidth * 0.05;
    const height = window.innerHeight - window.innerHeight * 0.05;
    return <canvas width={width} height={height} className="gameboard" />;
  }
}

export default Game;
