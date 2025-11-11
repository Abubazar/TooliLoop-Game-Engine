const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


function UpDrawImg(img, x, y, deg = 0, op = 1, flipX = 1, flipY = 1, width, height, ...args) {
  if(img instanceof HTMLImageElement){
    if (!img.complete) return;

    const angle = deg * Math.PI / 180;
    const scaleX = flipX;
    const scaleY = flipY;

    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scaleX, scaleY);
    ctx.rotate(angle);
    ctx.globalAlpha = op;

    if (args.length === 4) {
      const [sx, sy, sw, sh] = args;
      ctx.drawImage(img, sx, sy, sw, sh, -width / 2, -height / 2, width, height);
    } else {
      ctx.drawImage(img, -width / 2, -height / 2, width, height);
    }

    ctx.globalAlpha = 1;
    ctx.restore();
  }
}

const tooli = new Image()
tooli.src = "tuli.png"

tooli.onload = () => {
    UpDrawImg(tooli, 90, 90, 0, 1, 1, 1, 70, 70);
};
