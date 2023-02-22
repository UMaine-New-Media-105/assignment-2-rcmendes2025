function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("navy");
  
  push();
  fill("red");
  noStroke();
  push();
  
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
