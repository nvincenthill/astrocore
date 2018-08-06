import React from 'react';
import { example } from '../../helpers';
import { Graph } from './Graph';
import { drawNode } from './drawHelpers';

class Game extends React.Component {
  componentDidMount() {
    const canvas = document.getElementsByClassName('gameboard');
    const ctx = canvas[0].getContext('2d');
    const newGraph = new Graph();
    const newNode = newGraph.addNode(0);
    drawNode(canvas, ctx, newNode);
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
