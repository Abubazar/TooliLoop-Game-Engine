const canvas = document.getElementById("blocks")
const ctx = canvas.getContext('2d')


function drawBlock(x,y,width,height,color,text){
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, 10);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fillText("fgjhdkgf",x+5,y+10)
}

drawBlock(100,100,90,30,"#4C97FF")