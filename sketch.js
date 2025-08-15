//write a p5js sketch that draws a painting in the style of wassily kandinsky, add animation.
let angle = 0;
let t = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(240);
  
  // Animate base rotation
  push();
  translate(width / 2, height / 2);
  rotate(angle);
  drawComposition();
  pop();
  
  // Update rotation angle
  angle += 0.2;
  t += 0.01;
}

function drawComposition() {
  // Static bold circle
  fill(255, 100, 100, 180);
  ellipse(-150, -150, 200, 200);

  // Pulsating circle
  fill(100, 200, 255, 180);
  let pulse = 60 + sin(t * 2) * 20;
  ellipse(200, 100, pulse, pulse);

  // Rotating triangle
  push();
  translate(-200, 200);
  rotate(-angle * 2);
  fill(255, 220, 0, 200);
  triangle(0, -50, 43, 25, -43, 25);
  pop();

  // Oscillating line
  stroke(0);
  strokeWeight(3);
  let offset = sin(t * 3) * 100;
  line(-300, offset, 300, -offset);
  noStroke();

  // Grid of small rotating squares
  for (let x = -200; x <= 200; x += 100) {
    for (let y = -200; y <= 200; y += 100) {
      push();
      translate(x, y);
      rotate(angle * 2 + (x + y));
      fill(0, 150, 0, 180);
      rectMode(CENTER);
      rect(0, 0, 20, 20);
      pop();
    }
  }

  // Thin diagonal black line
  stroke(0);
  strokeWeight(2);
  line(-350, -350, 350, 350);
  noStroke();
}
