const { Graph } = require('./Graph');

const exampleGraph = (width, height) => {
  const newGraph = new Graph();
  const adjacencyMatrix = [
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
  ];
  const num = 10;
  const heights = [
    height * 0.1,
    height * 0.1,
    height * 0.3,
    height * 0.3,
    height * 0.4,
    height * 0.5,
    height * 0.6,
    height * 0.7,
    height * 0.8,
    height * 0.8,
  ];
  const widths = [
    width * 0.5,
    width * 0.1,
    width * 0.2,
    width * 0.8,
    width * 0.9,
    width * 0.3,
    width * 0.6,
    width * 0.4,
    width * 0.7,
    width * 0.2,
  ];

  const points = [100, 30, 20, 10, 0, 0, 10, 20, 30, 100];
  for (let i = 0; i < num; i += 1) {
    let color;

    const owner = i > 4 ? 'Player1' : 'Player2';
    if (points[i] === 0) {
      color = 'white';
    } else {
      color = owner === 'Player1' ? 'red' : 'yellow';
    }

    newGraph.addNode(i, widths[i], heights[i], points[i], color, owner);
  }

  for (let i = 0; i < num; i += 1) {
    for (let j = 0; j < adjacencyMatrix.length; j += 1) {
      if (adjacencyMatrix[i][j] && i !== j) {
        newGraph.addEdge(i, j);
      }
    }
  }
  return newGraph;
};

module.exports = {
  exampleGraph,
};
