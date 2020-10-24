var WIDTH = 800;
var HEIGHT = 800;

var size = 50;
var offset = 20;
var phase = 0;
var bg = "#aa2211";
var lightRed = "#ffdd7722";
var darkRed = "#aa221122";

function setup() {
  createCanvas(WIDTH, HEIGHT);
  noStroke();
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(darkRed);
  for(var x = -50, col = 0; x < WIDTH + 2*size; x += offset, col++) {
    for(var y = -50, row = 0; y < HEIGHT + 2*size; y += offset, row++) {
      var color = ((col + row) % 2 === 0) ? lightRed : darkRed;
      var localPhase = phase - (row + col);
      push();
      translate(x, y);
      if (localPhase > 0 && int(localPhase / 90) % 2 == 0) {
        rotate(localPhase);
      }
      fill(color);
      rect(0, 0, size, size);
      pop();
    }
  }

  phase += 36 * deltaTime / 1000;
}
