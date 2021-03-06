const { Graph } = require('./Graph');

const createInitialGameState = () => {
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
  const heights = [0.15, 0.1, 0.3, 0.3, 0.4, 1 - 0.45, 1 - 0.35, 1 - 0.35, 1 - 0.15, 1 - 0.2];
  const widths = [0.7, 0.2, 0.2, 0.5, 0.7, 1 - 0.7, 1 - 0.5, 1 - 0.2, 1 - 0.2, 1 - 0.7];

  const points = [100, 30, 20, 10, 0, 0, 10, 20, 30, 100].map(x => x / 3);
  for (let i = 0; i < num; i += 1) {
    let color;
    let owner;

    if (points[i] === 0) {
      color = 'white';
      owner = null;
    } else if (i < 4) {
      color = 'red';
      owner = 'PlayerOne';
    } else if (i > 5) {
      color = 'yellow';
      owner = 'PlayerTwo';
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

module.exports = createInitialGameState;
