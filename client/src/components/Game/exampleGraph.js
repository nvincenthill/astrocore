import Graph from './Graph';

const exampleGraph = () => {
  const newGraph = new Graph.Graph();
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
  //   const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const num = 10;
  const height = [
    window.innerHeight * 0.1,
    window.innerHeight * 0.1,
    window.innerHeight * 0.3,
    window.innerHeight * 0.3,
    window.innerHeight * 0.4,
    window.innerHeight * 0.5,
    window.innerHeight * 0.6,
    window.innerHeight * 0.7,
    window.innerHeight * 0.8,
    window.innerHeight * 0.8,
  ];
  const width = [
    window.innerWidth * 0.5,
    window.innerWidth * 0.1,
    window.innerWidth * 0.2,
    window.innerWidth * 0.8,
    window.innerWidth * 0.9,
    window.innerWidth * 0.3,
    window.innerWidth * 0.6,
    window.innerWidth * 0.4,
    window.innerWidth * 0.7,
    window.innerWidth * 0.2,
  ];

  const points = [100, 30, 20, 10, 0, 0, 10, 20, 30, 100];
  for (let i = 0; i < num; i += 1) {
    const color = points[i] === 0 ? 'white' : i > 4 ? 'red' : 'yellow';

    newGraph.addNode(i, width[i], height[i], points[i], color, i > 4 ? 'Player1' : 'Player2');
  }

  for (let i = 0; i < num; i += 1) {
    for (let j = 0; j < adjacencyMatrix.length; j += 1) {
      if (adjacencyMatrix[i][j] && i !== j) {
        // newGraph.addEdge(i, j);
      }
    }
  }
  return newGraph;
};

module.exports = {
  exampleGraph,
};
