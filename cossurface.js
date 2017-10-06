let canvas = document.createElement('canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;
let c = document.querySelector("#color")
document.body.appendChild(canvas);

let tileWidth = 50,
    tileHeight = 25;
context.translate(width/2, 50)
draw();
function draw() {
  

  
  let val = 0;
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      let dx = 15 - i;
      let dy = 15 - j;
      let z = Math.sin(Math.sqrt(dx * dx + dy * dy) * 0.75) * 2 + 3;
      
      drawBlock(i, j,z, c.value)
      
    }
    
    
  }
  
  requestAnimationFrame(draw)

  
}
//context.fill()
function drawBlock(x, y, z, color) {

    
    context.save()
    context.translate((x-y) * tileWidth / 2, (x +y) * tileHeight/2);
    //draw the top
    context.beginPath();
    context.moveTo(0, -z * tileHeight);
    context.lineTo(tileWidth / 2, tileHeight / 2 - z * tileHeight);
    context.lineTo(0, tileHeight - z * tileHeight);
    context.lineTo(-tileWidth / 2, tileHeight / 2 - z * tileHeight);
    context.closePath();
    context.fillStyle = shadeColor(-10, color);
    context.fill();

    //draw the left
    context.beginPath();
    context.moveTo(-tileWidth / 2, tileHeight / 2 - z * tileHeight);
    context.lineTo(0, tileHeight - z * tileHeight);
    context.lineTo(0, tileHeight);
    context.lineTo(-tileWidth/2, tileHeight/2);
    context.closePath();
    context.fillStyle = shadeColor(10, color);
    context.fill();

    //draw the left
    context.beginPath();
    context.moveTo(tileWidth / 2, tileHeight / 2 - z * tileHeight);
    context.lineTo(0, tileHeight - z * tileHeight);
    context.lineTo(0, tileHeight);
    context.lineTo(tileWidth/2, tileHeight/2);
    context.closePath();
    context.fillStyle = shadeColor(20, color);
    context.fill();

    context.restore();
  }

function shadeColor(percent, color) {
  color = color.substr(1);
  var num = parseInt(color, 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = (num >> 8 & 0x00FF) + amt,
    B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

