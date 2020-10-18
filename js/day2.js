var WIDTH = 800;
var HEIGHT = 800;

var phase = 0;
var lightBlue = "#adf";
var darkBlue = "#469";
var rectangles = [];
var colors = [lightBlue, darkBlue];
var oscillation = 0.5;

class Rectangle {
  constructor(options) {
    this.x = 400
    this.y = options.height
    this.phase = options.index * 10
    this.rotation = options.rotation
    this.direction = options.direction
    this.color = options.color
  }
}

// var rectangles = [
//   { x: 400, y: 50,  rotation: rotation,  color: lightBlue },
//   { x: 400, y: 150, rotation: -rotation,  color: darkBlue },
//   ...
// ]
var rectHeight = 40;
var rotation = 3;
var color = 0;
var direction = 1;
var index = 1;
for (var height = -150; height < 1000; height += rectHeight) {
  rectangles.push({
    index: index,
    x: 400,
    y: height,
    phase: index * 10,
    rotation: rotation,
    direction: direction,
    color: colors[color]
  });

  index += 1;
  direction *= -1;
  color = (color + 1) % colors.length;
}



function setup() {
  createCanvas(WIDTH, HEIGHT);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  background(255);

  rectangles.forEach(function(rectangle) {
    push();
    translate(rectangle.x, rectangle.y);
    rotate(rectangle.rotation * rectangle.direction * cos(rectangle.phase));
    fill(rectangle.color);
    rect(-1000, -50, 2000, rectHeight * 2);
    pop();
    rectangle.phase += oscillation * 360 * deltaTime / 1000;
  });
}
