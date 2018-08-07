import { Node } from './Node';

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }

  addNode(id, x, y, score, color) {
    const newNode = new Node(id, x, y, score, color);
    this.nodes.push(newNode);
    this.edges[newNode.id] = [];
    return newNode;
  }

  removeNode(id) {
    this.nodes.forEach((element) => {
      if (id === element.id) {
        this.nodes.pop(element);
      }
    });
  }

  hasNode(id) {
    let isFound = false;
    this.nodes.forEach((element) => {
      if (id === element.id) {
        isFound = true;
      }
    });
    return isFound;
  }

  addEdge(fromNodeID, toNodeID) {
    this.edges[fromNodeID].push(toNodeID);
    this.edges[toNodeID].push(fromNodeID);
  }

  removeEdge(fromNodeID, toNodeID) {
    this.edges[fromNodeID].pop(toNodeID);
    this.edges[toNodeID].pop(fromNodeID);
  }

  hasEdge(fromNodeID, toNodeID) {
    return this.edges[toNodeID].includes(fromNodeID);
  }

  forEachNode(cb) {
    this.nodes.forEach(cb);
  }

  forEachEdge(cb) {
    this.edges.forEach(cb);
  }
}

const randomGraph = () => {
  const newGraph = new Graph();
  const adjacencyMatrix = [
    [false, true, false, false, false, false, false, false, false, false],
    [false, false, true, false, false, false, false, false, false, false],
    [false, false, false, true, false, false, false, false, false, false],
    [false, false, false, false, true, false, false, false, false, false],
    [false, false, false, false, false, true, true, false, false, false],
    [false, false, false, false, false, false, true, false, false, false],
    [true, false, false, false, false, false, false, true, false, false],
    [false, false, false, false, false, false, false, false, true, false],
    [false, false, false, false, false, false, false, false, false, true],
    [false, false, true, false, false, false, false, false, false, false],
  ];
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const num = 10;
  for (let i = 0; i < num; i += 1) {
    // addNode(id, x, y, score, color)
    newGraph.addNode(
      i,
      getRandomInt(window.innerWidth * 0.1, window.innerWidth - window.innerWidth * 0.1),
      getRandomInt(window.innerHeight * 0.1, window.innerHeight - window.innerHeight * 0.1),
      getRandomInt(20, 100),
      '#ff0000',
    );
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
  Graph,
  randomGraph,
};
