// import { Graph } from '../Graph';

// describe('Graph', () => {
//   test('should have methods named "addNode", "contains", "removeNode", "addEdge", "hasEdge", "removeEdge" and "forEachNode"', () => {
//     const graph = new Graph('example');
//     expect(typeof graph.addNode).toBe('function');
//     expect(typeof graph.hasNode).toBe('function');
//     expect(typeof graph.removeNode).toBe('function');
//     expect(typeof graph.hasEdge).toBe('function');
//     expect(typeof graph.addEdge).toBe('function');
//     expect(typeof graph.removeEdge).toBe('function');
//     expect(typeof graph.forEachNode).toBe('function');
//     expect(typeof graph.forEachEdge).toBe('function');
//   });

//   test('should store ids as nodes that were inserted', () => {
//     const graph = new Graph('example');
//     graph.addNode(1);
//     expect(graph.hasNode(1)).toBe(true);
//   });

//   test('should be able to remove nodes', () => {
//     const graph = new Graph('example');
//     graph.addNode(2);
//     graph.removeNode(2);
//     expect(graph.hasNode(2)).toBe(false);
//   });

//   test('should be able to add edges', () => {
//     const graph = new Graph('example');
//     graph.addNode(2);
//     graph.addNode(3);
//     graph.addEdge(2, 3);
//     expect(graph.hasEdge(2, 3)).toBe(true);
//   });

//   test('should be able to remove edges', () => {
//     const graph = new Graph('example');
//     graph.addNode(2);
//     graph.addNode(3);
//     graph.addEdge(2, 3);
//     graph.removeEdge(2, 3);
//     expect(graph.hasEdge(2, 3)).toBe(false);
//   });
// });
