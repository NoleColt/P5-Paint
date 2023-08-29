let brushSizeX = 20;
let brushSizeY = 20;
let increaseSize = false;
let decreaseSize = false;
let brushColor = 0; // Default color is black (0, 0, 0)
let backgroundColor = 0; // Default background is black (0)
let backgroundToggled = false; // Flag to track if background has been toggled

let customColorPicker; // Input for custom color

function setup() {
  createCanvas(1920, 1080);
  background(backgroundColor);

  // Create the custom color picker input
  customColorPicker = createInput('#FFFFFF'); // Initial color is white
  customColorPicker.position(225, height - 35);
  customColorPicker.size(60);
  customColorPicker.input(updateCustomColor);
}

function draw() {
  noStroke();

  // Determine the color of the toggle square based on the background
  let toggleColor = (backgroundColor === 0) ? 255 : 0;

  // Draw background toggle square
  fill(toggleColor);
  rect(10, height - 80, 30, 30); // Positioned above the color control boxes

  // Draw "Background Color" text next to the background toggle square
  fill(toggleColor);
  textSize(12);
  text("Background Color", 50, height - 62);

  // Draw color control boxes at the bottom
  fill(255, 0, 0);
  rect(10, height - 40, 30, 30);
  fill(0, 128, 0);
  rect(50, height - 40, 30, 30);
  fill(0, 0, 255);
  rect(90, height - 40, 30, 30);
  fill(255);
  stroke(0);
  rect(130, height - 40, 30, 30);
  fill(0);
  stroke(255);
  rect(170, height - 40, 30, 30);
  noStroke();

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
    if (mouseY < height - 40) {
      fill(brushColor); // Set the brush color
      ellipse(mouseX, mouseY, brushSizeX, brushSizeY);
    }

    // Check if the mouse is within the background toggle square
    if (!backgroundToggled && mouseX >= 10 && mouseX <= 40 && mouseY >= height - 80 && mouseY <= height - 50) {
      toggleBackground();
      backgroundToggled = true; // Set the flag
    }
  } else {
    backgroundToggled = false; // Reset the flag when mouse is released
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
  if (mouseY > height - 40) {
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

  // Check if the mouse is within the background toggle square
  if (!backgroundToggled && mouseX >= 10 && mouseX <= 40 && mouseY >= height - 80 && mouseY <= height - 50) {
    toggleBackground();
    backgroundToggled = true; // Set the flag
  }
}

function updateCustomColor() {
  brushColor = color(customColorPicker.value()); // Set custom color
}

function toggleBackground() {
  backgroundColor = (backgroundColor === 0) ? 255 : 0; // Toggle between black and white
  background(backgroundColor); // Apply the new background color
}
