const resetCanvas = (ctx) => {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
};

const drawNode = (ctx, node) => {
  const {
    radius, color, x, y, score,
  } = node;
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowBlur = 20;
  ctx.shadowColor = color;
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = 'black';
  ctx.shadowBlur = 0;
  ctx.fillText(Math.floor(score), x, y);
  ctx.closePath();
};

const drawFighter = (ctx, fighter) => {
  const { radius } = fighter;
  ctx.beginPath();

  ctx.shadowBlur = 40;

  // color based on fighter owner
  if (fighter.owner === 'Player1') {
    ctx.fillStyle = 'red';
    ctx.shadowColor = 'red';
  } else {
    ctx.fillStyle = 'yellow';
    ctx.shadowColor = 'yellow';
  }

  ctx.arc(fighter.x, fighter.y, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
};

const drawEdge = (ctx, startNode, endNode) => {
  ctx.beginPath();
  ctx.setLineDash([10, 10]);
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.shadowBlur = 5;
  ctx.shadowColor = 'white';
  ctx.moveTo(startNode.x, startNode.y);
  ctx.lineTo(endNode.x, endNode.y);
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
