import { Node } from './Node';

describe('Node', () => {
  test('should have properties "x","y","score", and "id"', () => {
    const node = new Node();
    expect(node).toHaveProperty('x');
    expect(node).toHaveProperty('y');
    expect(node).toHaveProperty('score');
    expect(node).toHaveProperty('id');
  });
});
