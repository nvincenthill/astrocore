const resetCanvas = (ctx) => {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
};

const drawNode = (ctx, node) => {
  const {
    color, x, y, score,
  } = node;
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowBlur = 20;
  ctx.shadowColor = color;
  ctx.arc(window.innerWidth * x, window.innerHeight * y, 20 + score / 3 , 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = 'black';
  ctx.shadowBlur = 0;
  ctx.fillText(Math.floor(score), window.innerWidth * x, window.innerHeight * y);
  ctx.closePath();
};

const drawFighter = (ctx, fighter) => {
  const { radius } = fighter;
  ctx.beginPath();
  ctx.shadowBlur = 40;
  ctx.fillStyle = fighter.color;
  ctx.shadowColor = fighter.color;
  ctx.arc(fighter.x * window.innerWidth, fighter.y * window.innerHeight, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
};

const drawEdge = (ctx, startNode, endNode) => {
  ctx.beginPath();
  // ctx.setLineDash([10, 10]);
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.shadowBlur = 5;
  ctx.shadowColor = 'white';
  ctx.moveTo(startNode.x * window.innerWidth, startNode.y * window.innerHeight);
  ctx.lineTo(endNode.x * window.innerWidth, endNode.y * window.innerHeight);
  ctx.stroke();
  ctx.closePath();
};

const drawAllNodes = (graph, ctx) => {
  graph.nodes.forEach((element) => {
    drawNode(ctx, element);
  });
};

const drawAllEdges = (graph, ctx) => {
  graph.edges.forEach((edgeList, startNodeId) => {
    const startNode = graph.nodes[startNodeId];
    edgeList.forEach((endNodeId) => {
      if (endNodeId > startNodeId) {
        drawEdge(ctx, startNode, graph.nodes[endNodeId]);
      }
    });
  });
};

const drawAllFighters = (graph, ctx) => {
  graph.nodes.forEach((node) => {
    node.fighters.forEach((fighter) => {
      if (fighter.isAlive) {
        drawFighter(ctx, fighter);
      }
    });
  });
};

const drawGraph = (graph, canvas) => {
  const ctx = canvas[0].getContext('2d');
  resetCanvas(ctx);
  drawAllEdges(graph, ctx);
  drawAllFighters(graph, ctx);
  drawAllNodes(graph, ctx);
};

module.exports = {
  drawAllNodes,
  drawAllEdges,
  drawAllFighters,
  resetCanvas,
  drawGraph,
};
