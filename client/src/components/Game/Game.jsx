import React from 'react';
import randomGraph from './exampleGraph';
import Draw from './drawHelpers';
import { validateNodeClicked } from '../../helpers';

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
          if (validateNodeClicked(node, x, y)) {
            const { firstNodeClicked } = this.state;
            if (firstNodeClicked) {
              if (node.id === firstNodeClicked.id) {
                return;
              }
              firstNodeClicked.toggleSelectNode();
              this.setState({ firstNodeClicked: null });
              firstNodeClicked.createFighters(firstNodeClicked.score / 2, node);
            } else if (node.score !== 0) {
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
      this.animateLoop(canvas);
    }, 1000 / 60);
  }

  animateLoop(canvas) {
    const { graph } = this.state;
    for (let i = 0; i < graph.nodes.length; i += 1) {
      graph.nodes[i].incrementScore();
    }
    const ctx = canvas[0].getContext('2d');
    Draw.drawGraph(graph, ctx);
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
