window.onload = main

function main() {
  let canvas = document.getElementById('home'),
      context = canvas.getContext('2d'),
      width = canvas.width = window.innerWidth,
      height = canvas.height = window.innerHeight;
  //translate the canvas to the center of the screen
  context.translate(width/2, height/2);
  let f =500,
      zDelta = 100,
      zDistance = 1000;
  
  
  let squares = [],
      numSquares = Math.floor(zDistance/zDelta);  
  for (let i = 0; i < 20; i++) {
    let s = {
      x: 0  ,
      y: 0 , 
      z: i * 100,
      radius: 50
    }
    squares.push(s);
  }
  
  function draw() {
    context.clearRect(-width/2, -height/2, width, height)
    context.fillRect(-width/2, -height/2, width, height)
    squares.forEach(shape  => {
      shape.z -= 5  
      if (shape.z <= -f) {
        shape.z = f
        
      }  
      context.save();
      let perspective = f / (f + shape.z)
      context.scale(perspective, perspective)
      context.translate(shape.x, shape.y)
      context.beginPath()
      context.fillStyle='rgba(0, 200, 0, 1)'
      context.arc(0, 0, shape.radius, 0, Math.PI * 2 )
      context.fill()
  
      context.beginPath()
      context.fillStyle='rgba(255, 255, 255,1 )'
      context.arc(0, 0, shape.radius * 0.8, 0, Math.PI * 2)
      context.fill()
     
      context.restore();
      
      })
    
    requestAnimationFrame(draw)
  }
  
  draw();
  
  
}
