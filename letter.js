window.onload = function() {
 let canvas = document.getElementById("test"),
     context = canvas.getContext("2d"),
     width = canvas.width = window.innerWidth,
     height = canvas.height = window.innerHeight;
 
 let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
 let shapes = []
 for (let i=0; i < 150; i++) {
   shapes.push({
     x: Math.random() * width * (Math.random() < 0.5 ? -1: +1),
     y: Math.random() * height * (Math.random() < 0.5? +1: -1),
     z: Math.random() * 4000,
     
     letter: letters[parseInt(Math.random() * letters.length)],
     color: `rgba(20, ${parseInt(Math.random() * 200)}, 0, 0.8)`
   })
 }   
  
  
 let focalLength = 300;
 console.log(shapes)
 //calculate the perspective
 
 context.translate(width/2, height/2);
 context.fillStyle='rgba(0, 200, 45, 0.8)'
 
 
 function update() {
   context.clearRect(-width/2, -height/2, width, height);
   context.fillStyle='rgba(0, 0, 0, 0.99)'
   context.fillRect(-width/2, -height/2, width, height)
   shapes.forEach(shape => {
     
     shape.z -= 20;
     let perspective = focalLength / (focalLength + shape.z)
     context.save()
     context.translate(shape.x * perspective, shape.y * perspective);
     context.scale(perspective, perspective);
     
     context.fillStyle = shape.color
     context.font = '140px mono-space';
     context.fillText(shape.letter, 10, 50);
     context.restore()
     if (shape.z < 0) {
        shape.z = 5000
     }  
     })

    requestAnimationFrame(update)
 }
 update();
 
}
