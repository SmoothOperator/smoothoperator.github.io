let numSegments = 17; // Number of segments
let stickLength = 150; // Length of the white stick
let segments = []; // Array of segment positions
let segmentLengths = []; // Array of segment lengths
let gravity = 1.0; // Gravity effect
let windStrength = 0.12; // Base wind strength
let segmentColor; // Color of the segments (orange)
let windIntensity; // Current wind intensity
let windRange = 2.0; // Wind range for Perlin noise
let windDirectionAngle; // Wind direction angle in radians
let windSpeeds = []; // List to store wind speeds for average calculation
let windOffset; // Random offset for wind direction

function setup() {
  createCanvas(800, 600);
  frameRate(60); // Increase frame rate to make animation more responsive
  textSize(12); // Set text size
  fill(200); // Set text color to light grey
  
  segmentColor = color(255, 165, 0); // Initialize segment color (orange)
  
  // Initialize segment lengths in descending order
  for (let i = 0; i < numSegments; i++) {
    segmentLengths[i] = map(i, 0, numSegments - 1, 17, 6); // Descending lengths from 17 to 6
  }
  // Initialize segments starting from the top of the white stick
  segments[0] = createVector(width / 2, height * 2 / 3 - stickLength);
  for (let i = 1; i <= numSegments; i++) {
    segments[i] = createVector(segments[i-1].x, segments[i-1].y + segmentLengths[i-1]);
  }
  
  // Initialize wind direction angle randomly within the desired range
  windOffset = random(1000); // Random offset for wind direction Perlin noise
}

function draw() {
  background(0);
  applyPhysics();
  displaySegments();
  displayWindSpeed();
  displayWindDirection();
}

function applyPhysics() {
  // Adjust wind intensity based on Perlin noise
  windIntensity = noise(frameCount * 0.01) * windRange; // Wind intensity range from 0 to windRange
  
  // Add current wind intensity to the list
  windSpeeds.push(windIntensity);
  if (windSpeeds.length > 160) { // Keep the list to the last 60 values (1 second of data at 60 fps)
    windSpeeds.shift();
  }

  // Apply gravity and wind to each segment except the first one
  for (let i = 1; i <= numSegments; i++) {
    // Adjust wind direction stability based on intensity
    let windDirection = (noise(windOffset + frameCount * 0.01 + i * 1000) - 0.5) * (1 / (1 + windIntensity));
    
    // Restrict wind direction primarily to east-west with occasional up-down variations
    windDirectionAngle = windDirection * PI / 4; // Angle in radians, mostly east-west
    let windX = cos(windDirectionAngle) * windIntensity * windStrength;
    let windY = sin(windDirectionAngle) * windIntensity * windStrength;

    segments[i].y += gravity + windY; // Apply gravity and vertical wind component to y-coordinate
    segments[i].x += windX * segmentLengths[i-1]; // Apply horizontal wind component to x-coordinate
    
    // Keep segments connected
    let dir = p5.Vector.sub(segments[i], segments[i-1]);
    dir.setMag(segmentLengths[i-1]);
    segments[i] = p5.Vector.add(segments[i-1], dir);
  }
}

function displaySegments() {
  // Draw the stick (stable)
  stroke(255);
  strokeWeight(4);
  line(segments[0].x, segments[0].y + stickLength, segments[0].x, segments[0].y);

  // Draw the segments
  for (let i = 1; i < numSegments; i++) {
    stroke(segmentColor);
    strokeWeight(2);
    line(segments[i].x, segments[i].y, segments[i+1].x, segments[i+1].y);
  }
}

function displayWindSpeed() {
  // Calculate average wind speed
  let avgWindSpeed = 0;
  for (let speed of windSpeeds) {
    avgWindSpeed += speed;
  }
  avgWindSpeed /= windSpeeds.length;
  
  // Convert wind speeds to knots and mph
  let windSpeedKnots = windIntensity * 1.94384;
  let avgWindSpeedKnots = avgWindSpeed * 1.94384;
  let windSpeedMph = windIntensity * 2.23694;
  let avgWindSpeedMph = avgWindSpeed * 2.23694;
  
  // Display the current and average wind speed above the sock
  let windSpeedText = "Current Wind Speed: " + nf(windSpeedKnots, 1, 2) + " knots (" + nf(windSpeedMph, 1, 2) + " mph)";
  let avgWindSpeedText = "Average Wind Speed: " + nf(avgWindSpeedKnots, 1, 2) + " knots (" + nf(avgWindSpeedMph, 1, 2) + " mph)";
  let windRangeText = "Wind Speed Range: 0 to " + nf(windRange, 1, 2) + " m/s";
  let gravityText = "Gravity: " + nf(gravity, 1, 2);
  
  noStroke(); // Disable stroke for text
  textAlign(CENTER);
  text(windSpeedText, width / 2, segments[0].y - 90); // Position text above the top of the stick
  text(avgWindSpeedText, width / 2, segments[0].y - 70); // Position text below the current wind speed
  text(windRangeText, width / 2, segments[0].y - 50); // Position text below the average wind speed
  text(gravityText, width / 2, segments[0].y - 30); // Position text below the wind range
  
  // Display instructions
  let instructions = "Press UP to increase wind range, DOWN to decrease wind range. Press E to increase gravity, D to decrease gravity.";
  text(instructions, width / 2, height - 30); // Position instructions at the bottom
}

function displayWindDirection() {
  // Draw the wind direction arrow in the top-left corner
  push();
  translate(50, 50); // Position the arrow in the top-left corner
  rotate(windDirectionAngle); // Rotate arrow based on wind direction angle
  stroke(200);
  strokeWeight(3);
  line(0, 0, 30, 0); // Arrow shaft
  line(30, 0, 25, -5); // Arrowhead
  line(30, 0, 25, 5); // Arrowhead
  pop();
}

function keyPressed() {
  // Change wind range with up and down arrow keys
  if (keyCode === UP_ARROW) {
    windRange += 0.1;
  } else if (keyCode === DOWN_ARROW) {
    windRange = max(0, windRange - 0.1); // Ensure wind range does not go below 0
  }
  
  // Change gravity with e and d keys
  if (key === 'e' || key === 'E') {
    gravity += 0.1;
  } else if (key === 'd' || key === 'D') {
    gravity = max(0, gravity - 0.1); // Ensure gravity does not go below 0
  }
}
