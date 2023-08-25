let brushSizeX = 20;
let brushSizeY = 20;
let increaseSize = false;
let decreaseSize = false;
let brushColor = 0; // Default color is black (0, 0, 0)

function setup() {
  createCanvas(1920, 1080);
  background(0);
}

function draw() {
  noStroke();

  // Draw color control boxes at the bottom
  stroke(255); // Set stroke color to white
  fill(255, 0, 0);
  rect(0, height - 30, 30, 30);
  fill(0, 128, 0);
  rect(40, height - 30, 30, 30);
  fill(0, 0, 255);
  rect(80, height - 30, 30, 30);
  fill(255);
  rect(120, height - 30, 30, 30);
  fill(0);
  rect(160, height - 30, 30, 30);
  noStroke(); // Reset stroke

  if (increaseSize) {
    brushSizeX += 1;
    brushSizeY += 1;
  }

  if (decreaseSize) {
    brushSizeX = max(brushSizeX - 1, 1);
    brushSizeY = max(brushSizeY - 1, 1);
  }

  if (mouseIsPressed) {
    fill(brushColor); // Set the brush color
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

function mousePressed() {
  // Check if the mouse is within any color control box
  if (mouseY > height - 30) {
    if (mouseX < 30) {
      brushColor = color(255, 0, 0); // Red
    } else if (mouseX < 70) {
      brushColor = color(0, 128, 0); // Green
    } else if (mouseX < 110) {
      brushColor = color(0, 0, 255); // Blue
    } else if (mouseX < 150) {
      brushColor = color(255); // White
    } else if (mouseX < 190) {
      brushColor = color(0); // Black
    }
  }
}
