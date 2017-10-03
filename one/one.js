
class Vector {
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
     }
    
    add(vec) {
      this.x += vec.x;
      this.y += vec.y;
    }
    
    mult(scalar) {
      this.x = this.x * scalar;
      this.y = this.y * scalar;
    }
    
  } 
  
  function createVector(x, y) {
    return (new Vector(x, y));
  }
  
  let canvas = document.getElementById('test'),
      context = canvas.getContext("2d"),
      width = canvas.width = window.innerWidth,
      height = canvas.height = window.innerHeight;
  let particles = [];
  
  function setup() {
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle(Math.random() * width, Math.random() * height, 40, 40));  
    }
    
    
    
  }
  
  function draw() {
    //context.fillRect(0, 0, width, height);
    particles.forEach(particle => {
      
    particle.show();
    particle.update();
    particle.bounce();
    })
  }
  
  
  class Particle{
    constructor(x, y, height, width) {
      this.pos = createVector(x, y);
      this.height = height;
      this.width = width;
      this.velocity = createVector(0, 0);
      this.acc = createVector(0, 4);
      
      
      }
    
    show() {
      context.save();
      context.fillStyle = 'rgba(0, 200, 200, 0.8)';
      context.translate(this.pos.x, this.pos.y);
      context.beginPath();
      context.arc(0, 0, 7, 0, Math.PI * 2, false);
      context.fill();
      context.closePath();
      context.restore();
      
    }
    
    update() {
      this.pos.add(this.velocity)
      this.velocity.add(this.acc)
      
     
      this.acc.mult(0)
    }
    
    bounce() {
      if (this.pos.x > width || this.pos.x < 0){
        this.velocity.x *= -1;
        
      }
      
      if (this.pos.y > height || this.pos.y < 0) {
          this.velocity.y *= -1;
      }
    }
    
    addForce(vec) {
      //this will add to the acceleration
      
      this.acc.add(vec) //
    }
  }
  
  
  function mouseDown() {
    particles.forEach(particle => {
      particle.addForce(createVector(Math.random() * 10, 0))
    })
    //console.log("mouse down");
  }
  
  window.addEventListener("mousedown", mouseDown);
    
  
  
  
  
  
  
  function run() {
    context.clearRect(0, 0, width, height);
    draw();
    requestAnimationFrame(run);
  }
  
  
  setup();
  run();
  
  