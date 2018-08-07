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
    [true, true, true, true],
    [false, false, false, false],
    [false, false, true, true],
    [true, true, true, true],
  ];
  const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
  for (let i = 0; i < 4; i += 1) {
    // addNode(id, x, y, score, color)
    newGraph.addNode(i, getRandomInt(window.innerWidth), getRandomInt(window.innerHeight), getRandomInt(40), '#ff0000');
  }

  for (let i = 0; i < 4; i += 1) {
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
