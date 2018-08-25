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

    // import graph
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
    const ctx = canvas[0].getContext('2d');
    Draw.drawGraph(graph, ctx);
  }

  render() {
    const width = window.innerWidth - window.innerWidth * 0.05;
    const height = window.innerHeight - window.innerHeight * 0.05;
    return <canvas width={width} height={height} className="gameboard" />;
  }
}

export default Game;
