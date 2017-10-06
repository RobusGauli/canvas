window.onload = main

function main() {
  
  let canvas = document.getElementById('home'),
      context = canvas.getContext('2d'),
      width = canvas.width = window.innerWidth,
      height = canvas.height = window.innerHeight;
  let particle = {
    x: 0,
    y: 0,
    z: 100
  }
  let f= 500,
      speed = 3;
  let val = 0
  context.translate(width/2, height/2);
  function draw() {
    //context.clearRect(-width/2, -height/2, width, height);
    context.save();
    let perspective = f / (f + particle.z);
    context.scale(perspective, perspective);
    context.translate(particle.x -20, particle.y -20)
    context.fillRect(0, 0, 5, 5)
    
    context.restore();
    particle.x =  100 * Math.cos(val);
    particle.y = 10 * val;
    particle.z = 100 * Math.sin(val);
    //particle.z -= speed
    //particle.y += 5 * Math.sin(val)
    val += 0.1
    
    requestAnimationFrame(draw)
  }
  draw()
  
}
