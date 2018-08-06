const drawNode = (canvas, ctx, node) => {
  ctx.beginPath();
  ctx.arc(node.x, node.y, node.score, 0, 2 * Math.PI);
  ctx.strokeStyle = node.color;
  ctx.stroke();
  ctx.fillStyle = node.color;
  ctx.fill();
  ctx.shadowBlur = 25;
  ctx.shadowColor = node.color;
  ctx.font = '10px Arial';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(node.score, node.x - 4.5, node.y + 4);
  ctx.closePath();
};

const drawEdge = (canvas, ctx, startNode, endNode) => {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(300, 150);
  ctx.stroke();
  ctx.strokeStyle = 'rgb(255, 255, 255)';
  ctx.closePath();
};

const drawAllNodes = (graph, canvas, ctx) => {
  graph.forEachNode((element) => {
    drawNode(canvas, ctx, element);
  });
};

const drawAllEdges = (graph, canvas, ctx) => {
  console.log(graph);
  graph.forEachNode((element) => {
    drawEdge(canvas, ctx, element);
  });
};

module.exports = {
  drawNode,
  drawAllNodes,
  drawAllEdges,
};
