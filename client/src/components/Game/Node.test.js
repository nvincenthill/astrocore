import { Node } from './Node';

describe('Node', () => {
  test('should have properties "x","y","score", and "id"', () => {
    const node = new Node(5);
    expect(node).toHaveProperty('id');
  });
});
