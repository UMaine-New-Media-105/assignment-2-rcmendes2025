//Variables
  var x = 55;
  var y = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#0057DF");
  random("rect 100,100,100,100,100");
  fill("#EB3900");
  
//Letter "R"
  noStroke();
  rect(305, 300, 50, 50);
  rect(255, 250, 50, 50);
  rect(55, 100, 50, 250);
  rect(55, 50, 300, 50);
  rect(55, 200, 290, 50);
  rect(305, 100, 50, 150);

//Run Variables
  stroke(0);
  strokeWeight(1.2);
  
//X
  line(x, 0, x, height);
  line(50 + x, 0, 50 + x, height);
  line(100 + x, 0, 100 + x, height);
  line(150 + x, 0, 150 + x, height);
  line(200 + x, 0, 200 + x, height);
  line(250 + x, 0, 250 + x, height);
  line(300 + x, 0, 300 + x, height);
  line(350 + x, 0, 350 + x, height);
//Y
  line(0, y, width, y);
  line(0, y, width, y);
  line(0, 50 + y, width, 50 + y);
  line(0, 100 + y, width, 100 + y);
  line(0, 150 + y, width, 150 + y);
  line(0, 200 + y, width, 200 + y);
  line(0, 250 + y, width, 250 + y);
  line(0, 300 + y, width, 300 + y);
  line(0, 350 + y, width, 350 + y);
}
