import React from 'react';
// import Graph from './Graph';
import randomGraph from './exampleGraph';
import Draw from './drawHelpers';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      graph: null,
    };
  }

  componentDidMount() {
    const canvas = document.getElementsByClassName('gameboard');
    const ctx = canvas[0].getContext('2d');
    const sampleGraph = randomGraph.randomGraph();
    this.setState({ graph: sampleGraph });
    Draw.drawAllEdges(sampleGraph, ctx);
    Draw.drawAllNodes(sampleGraph, ctx);
    setInterval(
      () => {
        this.handleGraphUpdate();
      },

      250,
    );
  }

  componentDidUpdate() {
    const canvas = document.getElementsByClassName('gameboard');
    const ctx = canvas[0].getContext('2d');
    const { graph } = this.state;
    console.log('updating');
    Draw.drawAllEdges(graph, ctx);
    Draw.drawAllNodes(graph, ctx);
  }

  handleGraphUpdate() {
    const { graph } = this.state;
    for (let i = 0; i < graph.nodes.length; i += 1) {
      graph.nodes[i].addOneToScore();
    }
    this.setState({ graph });
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
