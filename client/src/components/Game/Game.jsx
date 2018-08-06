import React from 'react';
import { Graph, randomGraph } from './Graph';
import { drawAllNodes } from './drawHelpers';

class Game extends React.Component {
  componentDidMount() {
    const canvas = document.getElementsByClassName('gameboard');
    const ctx = canvas[0].getContext('2d');
    drawAllNodes(randomGraph(), canvas, ctx);
  }

  render() {
    return (
      <canvas
        width={window.innerWidth - window.innerWidth * 0.05}
        height={window.innerHeight - window.innerHeight * 0.05}
        className="gameboard"
      />
    );
  }
}

export default Game;
