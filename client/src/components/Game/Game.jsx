import React from 'react';
import Graph from './Graph';
import Draw from './drawHelpers';

class Game extends React.Component {
  componentDidMount() {
    const canvas = document.getElementsByClassName('gameboard');
    const ctx = canvas[0].getContext('2d');
    Draw.drawAllNodes(Graph.randomGraph(), canvas, ctx);
    Draw.drawAllEdges(Graph.randomGraph(), canvas, ctx);
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
