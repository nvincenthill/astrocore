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

const drawAllNodes = (graph, canvas, ctx) => {
  graph.forEachNode((element) => {
    drawNode(canvas, ctx, element);
  });
};

module.exports = {
  drawNode,
  drawAllNodes,
};
