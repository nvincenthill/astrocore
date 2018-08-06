import { Graph } from './Graph';

describe('Graph', () => {
  test('should have methods named "addNode", "contains", "removeNode", "addEdge", "hasEdge", "removeEdge" and "forEachNode"', () => {
    const graph = new Graph('example');
    expect(typeof graph.addNode).toBe('function');
    expect(typeof graph.hasNode).toBe('function');
    expect(typeof graph.removeNode).toBe('function');
    expect(typeof graph.hasEdge).toBe('function');
    expect(typeof graph.addEdge).toBe('function');
    expect(typeof graph.removeEdge).toBe('function');
    expect(typeof graph.forEachNode).toBe('function');
    expect(typeof graph.forEachEdge).toBe('function');
  });

  test('should store ids as nodes that were inserted', () => {
    const graph = new Graph('example');
    graph.addNode(1);
    expect(graph.hasNode(1)).toBe(true);
  });

  test('should be able to remove nodes', () => {
    const graph = new Graph('example');
    graph.addNode(2);
    graph.removeNode(2);
    expect(graph.hasNode(2)).toBe(false);
  });
});

/*
describe('graph', function() {
  var graph;

  beforeEach(function() {
    graph = new Graph();
    //invisible two lines in Graph function
    //this = Object.create(Graph.prototype)
    //...
    //return this
  });

  it('should have methods named "addNode", "contains", "removeNode", "addEdge", "hasEdge", "removeEdge" and "forEachNode"', function() {
    expect(graph.addNode).toBe('function');
    expect(graph.contains).toBe('function');
    expect(graph.removeNode).toBe('function');
    expect(graph.hasEdge).toBe('function');
    expect(graph.addEdge).toBe('function');
    expect(graph.removeEdge).toBe('function');
    expect(graph.forEachNode).toBe('function');
  });

  it('should store values as nodes that were inserted', function() {
    graph.addNode(1);
    expect(graph.contains(1)).to.equal(true);
  });

  it('should remove nodes that were inserted', function() {
    graph.addNode(2);
    expect(graph.contains(2)).to.equal(true);
    graph.removeNode(2);
    expect(graph.contains(2)).to.equal(false);
  });

  it('should create edges between two nodes', function() {
    graph.addNode(2);
    graph.addNode(1);
    graph.addNode(3);
    graph.addEdge(3, 2);
    expect(graph.hasEdge(3, 2)).to.equal(true);
    expect(graph.hasEdge(3, 1)).to.equal(false);
  });

  it('should remove edges between nodes', function() {
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(true);
    graph.removeEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(false);
  });

  it('should remove edges between nodes when a node is removed', function() {
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(true);
    graph.removeNode(5);
    expect(graph.hasEdge(4, 5)).to.equal(false);
  });

  it('should execute a callback on each node in the graph', function() {
    var connectToFive = function(item) {
      graph.addEdge(item, 5);
    };
    graph.addNode(5);
    graph.addNode(2);
    graph.addNode(1);
    graph.addNode(3);
    graph.forEachNode(connectToFive);
    expect(graph.hasEdge(2, 5)).to.equal(true);
    expect(graph.hasEdge(1, 5)).to.equal(true);
    expect(graph.hasEdge(3, 5)).to.equal(true);
    expect(graph.hasEdge(5, 5)).to.equal(true);
  });

  it('NEW TEST: should not throw error when adding nonintegers as node values', function() {
    expect(graph.addNode(null)).to.equal(undefined);
    expect(graph.addNode('')).to.equal(undefined);
    expect(graph.addNode(true)).to.equal(undefined);
  });
});
*/
