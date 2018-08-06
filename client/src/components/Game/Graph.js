import { Node } from './Node';

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }

  addNode(id) {
    const newNode = new Node(id);
    this.nodes.push(newNode);
    this.edges[newNode] = [];
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

  addEdge() {
    return this.nodes;
  }

  removeEdge() {
    return this.nodes;
  }

  hasEdge() {
    return this.nodes;
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
