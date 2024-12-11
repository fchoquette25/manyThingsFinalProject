let circles = [];

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 15; i++) {
    circles.push({
     
      size: random(20, 50),
      sizeChange: random(0.5, 2), 
      color: color(random(255), random(255), random(255)),
      ySpeed: random(1, 3),   
    });
  }
}
function draw() {
  background(30); 

  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];

    circle.y += circle.ySpeed; 
    circle.size += circle.sizeChange; 

    if (circle.size > 100 || circle.size < 10) {
      circle.sizeChange *= -1;
    }

    if (circle.y > height) {
      circle.y = 0;
    }

    for (let j = i + 1; j < circles.length; j++) {
      let other = circles[j];
      let distance = dist(circle.x, circle.y, other.x, other.y);

      if (distance < (circle.size + other.size) / 2) {

        circle.color = color(random(255), random(255), random(255));
        other.color = color(random(255), random(255), random(255));

        circle.ySpeed *= -1;
        other.ySpeed *= -1;
      }
    }

    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size);
  }
}

function mousePressed() {
  for (let circle of circles) {
    circle.color = color(random(255), random(255), random(255));
    circle.size = random(20, 50);
    circle.ySpeed = random(1, 3);
  }
}

