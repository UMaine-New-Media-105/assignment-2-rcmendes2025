function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
}

function draw() {
  // "Romania" (Ryan)
  background(220);
  noStroke();
  fill("maroon");
  rect(0, 0, 200, 400);
  fill("gold");
  rect(200, 0, 200, 400);
  fill("darkblue");
  rect(400, 0, 600, 400);
  
  
  
// "Macedonia" (Mendes)
  fill("yellow");
  triangle(width - width / 1.8, 0, width / 2, height / 2, width - width / 2.2, 0);
  triangle(width - width / 1.8, height, width / 2, height / 2, width - width / 2.2, height);
  triangle(0, 0, width / 2, height / 2, width - width / 1.2, 0);
  triangle(width, 0, width / 2, height / 2, width - width / 4.8, 0);
  triangle(width, height, width / 2, height / 2, width - width / 4.8, height);
  triangle(0, height, width / 2, height / 2, width - width /
    1.2, height);
  triangle(0, height - height / 1.6, width / 2, height / 2, 0, height - height / 2.4);
  triangle(width, height - height / 1.6, width / 2, height / 2, width, height - height / 2.4);

  fill("white")
  ellipse(300, 196, 150, 150)
}
