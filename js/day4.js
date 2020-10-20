var WIDTH = 800;
var HEIGHT = 800;

var size = 50;
var offset = 20;
var lightRed = "#ffdd7722";
var darkRed = "#aa221122";

function setup() {
  createCanvas(WIDTH, HEIGHT);
  noStroke();
  angleMode(DEGREES);

}

function draw() {
  background(darkRed);
  for(var x = -2 * offset; x < WIDTH; x += offset) {
    for(var y = -2 * offset; y < HEIGHT; y += offset) {
      var col = x / offset;
      var row = y / offset;

      var color = ((col + row) % 2 === 0) ? lightRed : darkRed;

      push();
      translate(x, y);
      fill(color);
      rect(0, 0, size, size);
      pop();
    }
  }
}
