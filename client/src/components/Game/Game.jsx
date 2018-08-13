import React from 'react';
// import Graph from './Graph';
import randomGraph from './exampleGraph';
import Draw from './drawHelpers';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      graph: null,
      firstNodeClicked: null,
    };
  }

  componentDidMount() {
    const canvas = document.getElementsByClassName('gameboard');
    const sampleGraph = randomGraph.exampleGraph();
    const canvasLeft = canvas[0].offsetLeft;
    const canvasTop = canvas[0].offsetTop;
    // Add event listener for `click` events.
    canvas[0].addEventListener(
      'click',
      (e) => {
        const x = e.pageX - canvasLeft;
        const y = e.pageY - canvasTop;

        // Collision detection between clicked offset and element.
        sampleGraph.nodes.forEach((node) => {
          if (this.validateNodeClicked(node, x, y)) {
            const { firstNodeClicked } = this.state;

            if (firstNodeClicked && node.id !== firstNodeClicked.id) {
              firstNodeClicked.toggleSelectNode();
              this.setState({ firstNodeClicked: null });
              firstNodeClicked.createFighters(firstNodeClicked.score / 2, node);
            } else {
              this.setState({ firstNodeClicked: node });
              node.toggleSelectNode();
            }
          }
        });
      },
      false,
    );

    this.setState({ graph: sampleGraph });

    setInterval(() => {
      this.handleGraphUpdate();
    }, 13);
  }

  componentDidUpdate() {
    const canvas = document.getElementsByClassName('gameboard');
    const ctx = canvas[0].getContext('2d');
    this.drawGraph(ctx);
  }

  validateNodeClicked(node, x, y) {
    const radius = 20 + node.score / 1.6;
    if (
      y < node.y + radius
      && y > node.y - radius
      && (x < node.x + radius && x > node.x - radius)
    ) {
      return true;
    }
    return false;
  }

  drawGraph(ctx) {
    const { graph } = this.state;
    Draw.drawAllEdges(graph, ctx);
    Draw.drawAllNodes(graph, ctx);
    Draw.drawAllFighters(graph, ctx);
  }

  handleGraphUpdate() {
    const { graph } = this.state;
    for (let i = 0; i < graph.nodes.length; i += 1) {
      graph.nodes[i].incrementScore();
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
