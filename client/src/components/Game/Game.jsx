import React from 'react';
import { example } from '../../helpers';

class Game extends React.Component {
  componentDidMount() {
    const canvas = document.getElementsByClassName('gameboard');
    console.log(canvas[0]);
    const ctx = canvas[0].getContext('2d');
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(0, 0, 150, 75);
    example();
  }

  render() {
    return (
      <canvas
        width={window.innerWidth - 16}
        height={window.innerHeight - 16}
        className="gameboard"
      />
    );
  }
}

export default Game;
