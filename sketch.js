let circles = [];

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 15; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(20, 50),
      sizeChange: random(0.5, 2), 
      color: color(random(255), random(255), random(255)),
      ySpeed: random(1, 3),   
    });
  }
}


