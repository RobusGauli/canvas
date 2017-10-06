let canvas = document.getElementById('home'),
    pointCanvas = document.getElementById('line'),
    pointContext = pointCanvas.getContext('2d')
    context = canvas.getContext('2d'),
    width = canvas.width = pointCanvas.width = window.innerWidth,
    height = canvas.height = pointCanvas.height = window.innerHeight;
let rotateAngle = 0,
    rotationSpeed = 0.1;
    
let circleRotationAngle = 0,
    circleRotationSpeed = 0.03,
    circleRad = 60;



context.translate(width/2, height/2)
pointContext.translate(width/2, height/2)


function draw() {
  context.clearRect(-width/2, -height/2, width, height);
  context.save();
  let xPos = circleRad * Math.cos(circleRotationAngle);
  let yPos = circleRad * Math.sin(circleRotationAngle);
  
  context.translate(xPos, yPos);
  pointContext.translate(xPos, yPos)
  
  context.rotate(rotateAngle)
  pointContext.rotate(rotateAngle)
  context.beginPath()
  context.arc(0, 0, circleRad, 0, Math.PI * 2, false)
  context.moveTo(0, 0);
  
  context.lineTo(circleRad + 20, 0);
  pointContext.moveTo(0, 0);
  pointContext.fillRect(circleRad + 20, 0, 2, 2);
  context.closePath()
  context.stroke()
  
  context.restore();
  rotateAngle += rotationSpeed;
  circleRotationAngle += circleRotationSpeed;
  requestAnimationFrame(draw)
  
}
draw();
