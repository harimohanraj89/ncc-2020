var WIDTH = 800;
var HEIGHT = 800;
var FOCUS = {x: 400, y: 400};

var offset = 20;
var phase = 0;
var breathSpeed = 0.1;
var breathSize = 50;
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

  var size = 400 + breathSize * sin(phase);
  var x1 = FOCUS.x - size;
  var x2 = FOCUS.x + size;
  var y1 = FOCUS.y - size;
  var y2 = FOCUS.y + size;

  var y = y1;
  for (var x = x1; x <= x2; x += offset) { focalCircleFrom(x, y);}

  var y = y2;
  for (var x = x1; x <= x2; x += offset) { focalCircleFrom(x, y);}

  var x = x1;
  for (var y = y1; y <= y2; y += offset) { focalCircleFrom(x, y);}

  var x = x2;
  for (var y = y1; y <= y2; y += offset) { focalCircleFrom(x, y);}

  phase += breathSpeed * 360 * deltaTime / 1000;
}

function focalCircleFrom(x, y) {
  var d = 2 * dist(x, y, FOCUS.x, FOCUS.y);
  push();
  noFill();
  stroke(lightGreen);
  circle(x, y, d);
  pop();
}
