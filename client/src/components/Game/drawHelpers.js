const resetCanvas = (ctx) => {
  // canvas.width, canvas.height
  ctx.clearRect(0, 0, 2000, 2000);
};

const drawNode = (ctx, node) => {
  const radius = 20 + node.score / 1.6;
  ctx.beginPath();
  ctx.fillStyle = node.color;
  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowBlur = 20;
  ctx.shadowColor = node.color;
  ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = 'black';
  ctx.shadowBlur = 0;
  ctx.fillText(node.score, node.x, node.y);
  ctx.closePath();
};

const drawEdge = (ctx, startNode, endNode) => {
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.shadowBlur = 20;
  ctx.shadowColor = 'white';
  ctx.moveTo(startNode.x, startNode.y);
  ctx.lineTo(endNode.x, endNode.y);
  ctx.stroke();
  ctx.closePath();
};

const drawAllNodes = (graph, ctx) => {
  graph.forEachNode((element) => {
    drawNode(ctx, element);
  });
};

const drawAllEdges = (graph, ctx) => {
  // TODO: understand clear canvas
  resetCanvas(ctx);
  graph.edges.forEach((edgeList, startNodeId) => {
    const startNode = graph.nodes[startNodeId];
    edgeList.forEach((endNodeId) => {
      if (endNodeId > startNodeId) {
        drawEdge(ctx, startNode, graph.nodes[endNodeId]);
      }
    });
  });
};

module.exports = {
  drawNode,
  drawAllNodes,
  drawAllEdges,
  resetCanvas,
};
