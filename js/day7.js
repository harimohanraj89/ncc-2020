var WIDTH = 800;
var HEIGHT = 800;
var FOCUS = {x: 400, y: 400};

var offset = 20;
var phase = 0;
var lightGreen = "#ddff7711";
var darkGreen = "#053302";

function setup() {
  createCanvas(WIDTH, HEIGHT);
  noStroke();
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(darkGreen);

  var y = HEIGHT;
  for (var x = 0; x <=WIDTH; x += offset) { focalCircleFrom(x, y);}

  var y = 0;
  for (var x = 0; x <=WIDTH; x += offset) { focalCircleFrom(x, y);}

  var x = WIDTH;
  for (var y = 0; y <=HEIGHT; y += offset) { focalCircleFrom(x, y);}

  var x = 0;
  for (var y = 0; y <=HEIGHT; y += offset) { focalCircleFrom(x, y);}
}

function focalCircleFrom(x, y) {
  var d = 2 * dist(x, y, FOCUS.x, FOCUS.y);
  push();
  noFill();
  stroke(lightGreen);
  circle(x, y, d);
  pop();
}
