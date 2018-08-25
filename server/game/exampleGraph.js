const { Graph } = require('./Graph');

const exampleGraph = (width, height) => {
  const newGraph = new Graph();
  const adjacencyMatrix = [
    [false, true, true, true, true, false, false, false, false, false],
    [true, false, false, false, false, false, false, false, false, false],
    [true, false, false, false, false, false, false, false, false, false],
    [true, false, false, false, false, false, false, false, false, false],
    [true, false, false, false, true, true, false, false, false, false],
    [false, false, false, false, true, false, false, false, false, true],
    [false, false, false, false, false, false, false, false, false, true],
    [false, false, false, false, false, false, false, false, false, true],
    [false, false, false, false, false, false, false, false, false, true],
    [false, false, false, false, false, true, true, true, true, false],
  ];
  const num = 10;
  const heights = [
    height * 0.15,
    height * 0.1,
    height * 0.3,
    height * 0.3,
    height * 0.4,
    height * (1 - 0.45),
    height * (1 - 0.35),
    height * (1 - 0.35),
    height * (1 - 0.15),
    height * (1 - 0.2),
  ];
  const widths = [
    width * 0.7,
    width * 0.2,
    width * 0.2,
    width * 0.5,
    width * 0.7,
    width * (1 - 0.7),
    width * (1 - 0.5),
    width * (1 - 0.2),
    width * (1 - 0.2),
    width * (1 - 0.7),
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
