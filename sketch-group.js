function setup() {
  createCanvas(windowWidth, windowHeight);

  // Set up the background color
  background(229, 228, 240); 
  
  // Calculate positions based on the 
  let yPosArray = calculatePositions([10, 50, 120, 150, 220, 250, 280, 340, 440], windowHeight);
  let xPosArray = calculatePositions([10, 30, 70, 140, 300, 330, 420, 440, 480, 500], windowWidth);
  
  horizontalStreets(yPosArray);
  verticalStreets(xPosArray);
  
  // Create the blue blocks
  createBlock(windowWidth * 0.1, windowHeight * 0.16, windowWidth * 0.06, windowHeight * 0.06, color(0, 0, 255));
  createBlock(windowWidth * 0.1, windowHeight * 0.7, windowWidth * 0.08, windowHeight * 0.08, color(0, 0, 255));
  createBlock(windowWidth * 0.32, windowHeight * 0.52, windowWidth * 0.06, windowHeight * 0.1, color(0, 0, 255));
  createBlock(windowWidth * 0.76, windowHeight * 0.32, windowWidth * 0.1, windowHeight * 0.2, color(0, 0, 255));
  createBlock(windowWidth * 0.82, windowHeight * 0.7, windowWidth * 0.08, windowHeight * 0.08, color(0, 0, 255));
  
  // Create the red blocks
  createBlock(windowWidth * 0.16, windowHeight * 0.04, windowWidth * 0.04, windowHeight * 0.18, color(255, 0, 0));
  createBlock(windowWidth * 0.26, windowHeight * 0.04, windowWidth * 0.08, windowHeight * 0.12, color(255, 0, 0));
  createBlock(windowWidth * 0.16, windowHeight * 0.54, windowWidth * 0.12, windowHeight * 0.08, color(255, 0, 0));
  createBlock(windowWidth * 0.58, windowHeight * 0.4, windowWidth * 0.12, windowHeight * 0.1, color(255, 0, 0));
  createBlock(windowWidth * 0.68, windowHeight * 0.6, windowWidth * 0.1, windowHeight * 0.14, color(255, 0, 0));
  
  // Create the grey blocks
  createBlock(windowWidth * 0.28, windowHeight * 0.08, windowWidth * 0.06, windowHeight * 0.06, color(169));
  createBlock(windowWidth * 0.46, windowHeight * 0.22, windowWidth * 0.1, windowHeight * 0.14, color(169));
  createBlock(windowWidth * 0.46, windowHeight * 0.74, windowWidth * 0.06, windowHeight * 0.1, color(169));
  createBlock(windowWidth * 0.74, windowHeight * 0.62, windowWidth * 0.08, windowHeight * 0.04, color(169));
  createBlock(windowWidth * 0.8, windowHeight * 0.04, windowWidth * 0.1, windowHeight * 0.06, color(169));
}

function calculatePositions(positionArray, canvasSize) {
  
  // Adjust the position into the suitable size
  let adjustedPositions = [];
  for (let pos of positionArray) {
    adjustedPositions.push((pos / 500) * canvasSize);
  }
  return adjustedPositions;
}

function createBlock(x, y, w, h, c) {
  fill(c);
  rect(x, y, w, h);
}

function horizontalStreets(yPosArray) {
  for (let yPos of yPosArray) {
    for (let i = 0; i < width; i += 20) {
      let num = floor(random(101));
      let c = colourMap(num);
      createBlock(i, yPos, 20, 20, c);
    }
  }
}

function verticalStreets(xPosArray) {
  for (let xPos of xPosArray) {
    for (let i = 0; i < height; i += 20) {
      let num = floor(random(101));
      let c = colourMap(num);
      createBlock(xPos, i, 20, 20, c);
    }
  }
}

function colourMap(num) {
  if (num >= 0 && num <= 65) {

    // Set as the yellow color
    return color(255, 255, 0); 
  } else if (num >= 66 && num <= 80) {

    // Set as the black color
    return color(0); 
  } else if (num >= 81 && num <= 85) {
    
    // Set the red color
    return color(255, 0, 0); 
  } else if (num >= 86 && num <= 100) {
    
    // Set the grey color
    return color(169); 
  }
}

function draw() {
  
}

function mouseClicked() {
  
}

function windowResized() {
  // Add the resize function for the window size changing
  resizeCanvas(windowWidth, windowHeight);
  // Draw the pictures again
  setup(); 
}
