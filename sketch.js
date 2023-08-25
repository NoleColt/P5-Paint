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
  rect(5, height - 30, 30, 30); // Moved 20 pixels to the right
  fill(0, 128, 0);
  rect(45, height - 30, 30, 30); // Moved 20 pixels to the right
  fill(0, 0, 255);
  rect(85, height - 30, 30, 30); // Moved 20 pixels to the right
  fill(255);
  rect(125, height - 30, 30, 30); // Moved 20 pixels to the right
  fill(0);
  rect(165, height - 30, 30, 30); // Moved 20 pixels to the right
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
    // Check if the mouse is within the color control boxes
    if (mouseY < height - 30) {
      fill(brushColor); // Set the brush color
      ellipse(mouseX, mouseY, brushSizeX, brushSizeY);
    }
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
    if (mouseX < 50) {
      brushColor = color(255, 0, 0); // Red
    } else if (mouseX < 90) {
      brushColor = color(0, 128, 0); // Green
    } else if (mouseX < 130) {
      brushColor = color(0, 0, 255); // Blue
    } else if (mouseX < 170) {
      brushColor = color(255); // White
    } else if (mouseX < 210) {
      brushColor = color(0); // Black
    }
  }
}
