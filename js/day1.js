var phase = 0;
var lightBlue = "#adf";
var darkBlue = "#469";
var rotation = 2;

var rectangles = [
  { x: 400, y: 50,  rotation: rotation,  color: lightBlue },
  { x: 400, y: 150, rotation: -rotation,  color: darkBlue },
  { x: 400, y: 250, rotation: rotation,  color: lightBlue },
  { x: 400, y: 350, rotation: -rotation,  color: darkBlue },
  { x: 400, y: 450, rotation: rotation,  color: lightBlue },
  { x: 400, y: 550, rotation: -rotation,  color: darkBlue },
  { x: 400, y: 650, rotation: rotation,  color: lightBlue },
  { x: 400, y: 750, rotation: -rotation,  color: darkBlue },
  { x: 400, y: 850, rotation: rotation,  color: lightBlue },
  { x: 400, y: 950, rotation: -rotation,  color: darkBlue },
  { x: 400, y: 1050, rotation: rotation,  color: lightBlue },
  { x: 400, y: 1150, rotation: -rotation,  color: darkBlue },
]

function setup() {
  createCanvas(800, 800);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  background(255);

  rectangles.forEach(function(rectangle) {
    push();
    translate(rectangle.x, rectangle.y);
    rotate(rectangle.rotation);
    fill(rectangle.color);
    rect(-1000, -200, 2000, 400);
    pop();
  })
}
