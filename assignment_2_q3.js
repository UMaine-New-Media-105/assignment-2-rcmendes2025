function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("navy");
  
  superLogo(-200, -200, 2);
  
}

function superLogo(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  fill("red");
  noStroke();
  
  translate(200,100);
  beginShape();
  vertex (60, 50);
  vertex (90, 80);
  vertex (0, 150);
  vertex (-90, 80);
  vertex (-60, 50);
  endShape(CLOSE);
  pop(0);
}
