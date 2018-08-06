import React from 'react';
import { Graph } from './Graph';
import { drawNode } from './drawHelpers';

class Game extends React.Component {
  componentDidMount() {
    const canvas = document.getElementsByClassName('gameboard');
    const ctx = canvas[0].getContext('2d');
    const newGraph = new Graph();
    const newNode = newGraph.addNode(0);
    drawNode(canvas, ctx, newNode);
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
