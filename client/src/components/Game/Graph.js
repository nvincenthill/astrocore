import { Node } from './Node';

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }

  addNode() {
    const newNode = new Node();
    this.nodes.push(newNode);
  }

  removeNode() {
    return this.nodes;
  }

  hasNode() {
    return this.nodes;
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
    return cb(this.nodes);
  }

  forEachEdge(cb) {
    return cb(this.nodes);
  }
}

module.exports = {
  Graph,
};
