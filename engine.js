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
    ctx.globalAlpha = op/100;
    ctx.drawImage(img, -width / 2, -height / 2, width, height);
    ctx.globalAlpha = 1;
    ctx.restore();
  }
}

const tooli = new Image()
tooli.src = "tuli.png"



const FPS = 60
const timestep = 1000/FPS
let lastTime = 0

class KeyboardManager {
    constructor() {
        this.keys = {}

        window.addEventListener('keydown', e => {
            this.keys[e.key.toLowerCase()] = true
        })

        window.addEventListener('keyup', e => {
            this.keys[e.key.toLowerCase()] = false
        })
    }

    isDown(key) {
        return !!this.keys[key.toLowerCase()]
    }
}

class Sprite{
    constructor(name,x,y,skins){
        this.name = name
        this.x = x
        this.y = y
        this.angle = 0
        this.opacity = 100
        this.scaleX = 1
        this.scaleY = 1
        this.skins = skins
        this.currentSkin = Object.keys(skins)[0];
    }

    render(){
        UpDrawImg(this.skins[this.currentSkin],this.x, this.y, this.angle, this.opacity, this.scaleX, this.scaleY,70,70)
    }
}









keyboard = new KeyboardManager()

let coco = 0
const player = new Sprite("Daniel",100,100,{'skin1':tooli})

function update(delta){
    if(keyboard.isDown('arrowleft')){
        player.x-=delta*100
    }
    else if(keyboard.isDown('arrowright')){
        player.x+=delta*100
    }

    if(keyboard.isDown('arrowup')){
        player.y-=delta*100
    }
    else if(keyboard.isDown('arrowdown')){
        player.y+=delta*100
    }
}

function render(){
    ctx.fillStyle="white"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.render()
}



function gameLoop(currentTime) {
  const deltaTime = (currentTime - lastTime) / 1000

  if (currentTime - lastTime >= timestep) {
    update(deltaTime)
    render();
    lastTime = currentTime
  }

  requestAnimationFrame(gameLoop)
}
requestAnimationFrame(gameLoop)