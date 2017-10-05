
let canvas =  document.getElementById("test"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

let shapes = [],
    numOfShapes = 100,
    zRad = 150,
    rotationSpeed = 0.01,
    baseAngle = 0,
    pressedDown = false;

for (let i = 0; i < numOfShapes; i++) {
  let shape = {
    y: 10 *i,
    angle: (Math.PI * 2 / numOfShapes) * i * 4
  };
  shape.x = Math.cos(shape.angle + baseAngle) * zRad;
  shape.z = Math.sin(shape.angle + baseAngle) * zRad;
  shapes.push(shape);
}

//home




let f = 500;
//trasnalte the canvas to the center
context.translate(width/2, height/2);
document.body.addEventListener("mousedown", function(event) {
  pressedDown = true;
})

document.body.addEventListener("mouseup", function(event) {
  pressedDown = false;
})

function update() {
  console.log(pressedDown)
  baseAngle += rotationSpeed
  
  context.clearRect(-width/2, -height/2, width, height);
  context.fillRect(-width/2, -height/2, width, height);
  for(let i= 0; i < numOfShapes; i++) {
    
    
    let shape = shapes[i];
    let perspective = f / (f + shape.z)
    context.save();
    context.scale(perspective, perspective);
    context.translate(shape.x, shape.y)
    context.beginPath()
    context.fillStyle = 'rgba(0, 200, 0, 1)'
    
    context.arc(0, 0, 7, 0, Math.PI * 2 );
    context.fill();
    context.closePath();
    context.restore();
  //calculate the x and the z position of the shape
    shape.x = Math.cos(shape.angle + baseAngle) * zRad; 
    shape.z = Math.sin(shape.angle + baseAngle) * zRad;
    if (pressedDown) {
      baseAngle += 0.001
      
    }
    
    shape.y -= 3
    if (shape.y < -height/2 - 100) {
        shape.y = height
    }
    
    
    
  }
  //calculate the 
  
  
  requestAnimationFrame(update)  
}


let i  = 0;
update();

  
