let brushSizeX = 20;
let brushSizeY = 20;
let increaseSize = false;
let decreaseSize = false;

function setup() {
  createCanvas(1920, 1080);
  background(0);
}

function draw() {
  noStroke();

  if (keyIsPressed) {
    if (key == 'r') {
      fill(255, 0, 0);
    } else if (key == 'g') {
      fill(0, 128, 0);
    } else if (key == 'l') {
      fill(0, 255, 0);
    } // Add other color cases here...
  }

  if (increaseSize) {
    brushSizeX += 1;
    brushSizeY += 1;
  }

  if (decreaseSize) {
    brushSizeX = max(brushSizeX - 1, 1);
    brushSizeY = max(brushSizeY - 1, 1);
  }

  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, brushSizeX, brushSizeY);
  }
}

function keyPressed() {
  if (key === '+' || key === '=') {
    increaseSize = true;
  } else if (key === '-') {
    decreaseSize = true;
  }
}

function keyReleased() {
  if (key === '+' || key === '=') {
    increaseSize = false;
  } else if (key === '-') {
    decreaseSize = false;
  }
}
