var WIDTH = 800;
var HEIGHT = 800;
var SUPERTOP = -150;
var SUPERBOTTOM = 1050;

class Rectangle {
  constructor(options) {
    this.x = options.x
    this.y = options.y
    this.phase = options.index * 10
    this.rotation = options.rotation
    this.direction = options.direction
    this.color = options.color
  }

  backOfTheLine() {
    var index = rectangles.indexOf(this);
    rectangles.splice(index, 1);
    rectangles.push(this);
  }

  update(dt) {

    this.y -= ascent * dt / 1000;
    if (this.y < SUPERTOP) {
      this.y += (SUPERBOTTOM - SUPERTOP);
      this.backOfTheLine();
    }

    this.phase = 90 * (1 - (this.y - SUPERTOP) / (SUPERBOTTOM - SUPERTOP));
  }

  draw() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation * this.direction * sin(this.phase));
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
var ascent = 200;
var oscillation = 0.2;
var rectHeight = 20;
var rotation = 3;
var color = 0;
var direction = 1;
var index = 1;

for (var y = SUPERTOP; y <= SUPERBOTTOM; y += rectHeight) {
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
  background(lerpColor(color(lightBlue), color(darkBlue), 0.5));

  for (var i = rectangles.length - 1; i >= 0; i--) {
    var rectangle = rectangles[i];
    rectangle.draw();
    rectangle.update(deltaTime);
  }
}
