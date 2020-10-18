var WIDTH = 800;
var HEIGHT = 800;

class Rectangle {
  constructor(options) {
    this.x = options.x
    this.y = options.y
    this.phase = options.index * 10
    this.rotation = options.rotation
    this.direction = options.direction
    this.color = options.color
  }

  update(dt) {
    this.phase += oscillation * 360 * dt / 1000;
  }

  draw() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation * this.direction * cos(this.phase) * cos(this.phase) * cos(this.phase));
    fill(this.color);
    rect(-1000, -50, 2000, rectHeight * 2);
    pop();
  }
}

var phase = 0;
var lightBlue = "#adf";
var darkBlue = "#469";
var rectangles = [];
var colors = [lightBlue, darkBlue];
var oscillation = 0.2;
var rectHeight = 40;
var rotation = 3;
var color = 0;
var direction = 1;
var index = 1;

for (var y = -150; y < 1000; y += rectHeight) {
  rectangles.push(new Rectangle({
    index: index,
    x: 400,
    y: y,
    phase: index * 10,
    rotation: rotation,
    direction: direction,
    color: colors[color]
  }));

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
    rectangle.draw();
    rectangle.update(deltaTime);
  });
}
