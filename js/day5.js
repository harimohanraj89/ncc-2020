var WIDTH = 800;
var HEIGHT = 800;

var size = 50;
var base = 22.5;
var offset = 22.5;
var variation = 2.5;
var phase = 0;
var oscillation = 60;
var bg = "#aa2211";
var lightRed = "#ffdd7722";
var darkRed = "#aa221122";

function setup() {
  createCanvas(WIDTH, HEIGHT);
  noStroke();
  angleMode(DEGREES);

}

function draw() {
  background(darkRed);
  for(var x = -50, col = 0; x < WIDTH; x += offset, col++) {
    for(var y = -50, row = 0; y < HEIGHT; y += offset, row++) {
      var color = ((col + row) % 2 === 0) ? lightRed : darkRed;

      push();
      translate(x, y);
      fill(color);
      rect(0, 0, size, size);
      pop();
    }
  }

  phase += oscillation * deltaTime / 1000;
  offset = base + variation * sin(phase);
}
