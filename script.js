const canvas = document.getElementById("blocks")
const ctx = canvas.getContext('2d')

function drawRoundedRect(x, y, width, height, radius, fillColor, strokeColor, lineWidth = 2) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();

  // Fill and stroke
  if (fillColor) {
    ctx.fillStyle = fillColor;
    ctx.fill();
  }

  if (strokeColor) {
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeColor;
    ctx.stroke();
  }
}

drawRoundedRect(50, 50, 150, 30, 10, "#4C97FF", "#1d72e9ff", 3);