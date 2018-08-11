import { Node } from './Node';

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }

  addNode(id, x, y, score, color, owner) {
    const newNode = new Node(id, x, y, score, color, owner, this);
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

module.exports = {
  Graph,
};
