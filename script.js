const canvas = document.getElementById("blocks")
const ctx = canvas.getContext('2d')

blockGroups ={
    'control': ['#ff8400ff','#dd7200ff'],
    'event': ['#e8e000ff','#bfb901ff'],
    'motion': ['#006affff','#0057d0ff'],
    'looks': ['#ff0062ff','#bd0048ff'],
    'sound': ['#bb00ffff','#a400e0ff'],
    'input': ['#00ff84ff','#00dc71ff'],
    'operator': ['#71fc00ff','#63db00ff'],
    'variable': ['#f1551cff','#d93a00ff'],
    'function': ['#d02121ff','#b61717ff'],
}

function drawBlock(x,y,group,text,size){
    ctx.font = size+"px monospace"
    const txtWidth = ctx.measureText(text).width
    ctx.beginPath()
    ctx.roundRect(x, y, txtWidth+(size/2), size+(size/4), size/4)
    ctx.fillStyle = blockGroups[group][0]
    ctx.fill()
    ctx.lineWidth = size/10
    ctx.strokeStyle = blockGroups[group][1]
    ctx.stroke()
    ctx.fillStyle = "white"
    ctx.fillText(text,x+(size/4),y+(size/1.2))
}

drawBlock(100,100,"control","yodzho",16)




class CodeBlock{
    constructor(dd){

    }
}