class Client {
  constructor(name, id) {
    this.name = name;
    this.selectedNode = null;
    this.id = id;
  }

  selectNode(node) {
    if (node.owner === this.id) {
      this.selectedNode = node;
    }
  }

  deselectNode() {
    this.selectedNode = null;
  }
}

module.exports = Client;
