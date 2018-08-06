const drawNode = (canvas, ctx, node) => {
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.strokeStyle = 'white';
  ctx.stroke();
  ctx.fillStyle = '#eee';
  ctx.fill();
  ctx.closePath();
};

module.exports = {
  drawNode,
};
