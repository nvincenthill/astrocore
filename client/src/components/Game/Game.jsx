import React from 'react';
import Graph from './Graph';
import Draw from './drawHelpers';

class Game extends React.Component {
  componentDidMount() {
    const canvas = document.getElementsByClassName('gameboard');
    const ctx = canvas[0].getContext('2d');
    const sampleGraph = Graph.randomGraph();
    Draw.drawAllEdges(sampleGraph, canvas, ctx);
    Draw.drawAllNodes(sampleGraph, canvas, ctx);
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
