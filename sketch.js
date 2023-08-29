let brushSizeX = 20;
let brushSizeY = 20;
let increaseSize = false;
let decreaseSize = false;
let brushColor = 0; // Default color is black (0, 0, 0)

let customColorPicker; // Input for custom color

function setup() {
  createCanvas(1920, 1080);
  background(0);

  // Create the custom color picker input
  customColorPicker = createInput('#FFFFFF'); // Initial color is white
  customColorPicker.position(225, height - 35);
  customColorPicker.size(60);
  customColorPicker.input(updateCustomColor);
}

function draw() {
  noStroke();

  // Draw color control boxes at the bottom
  fill(255, 0, 0);
  rect(10, height - 40, 30, 30); // Moved 20 pixels to the right
  fill(0, 128, 0);
  rect(50, height - 40, 30, 30); // Moved 20 pixels to the right
  fill(0, 0, 255);
  rect(90, height - 40, 30, 30); // Moved 20 pixels to the right
  fill(255);
  rect(130, height - 40, 30, 30); // Moved 20 pixels to the right
  fill(0);
  stroke(255); // Set stroke color to white
  rect(170, height - 40, 30, 30); // Moved 20 pixels to the right
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

function updateCustomColor() {
  brushColor = color(customColorPicker.value()); // Set custom color
}
