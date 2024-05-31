let numSegments = 17;
let stickLength = 150;
let segments = [];
let segmentLengths = [];
let gravity = 1.0;
let windStrength = 0.12;
let segmentColor;
let windIntensity;
let windRange = 2.0;
let windDirectionAngle;
let windSpeeds = [];
let windOffset;

function setup() {
  createCanvas(800, 600);
  frameRate(60);
  textSize(12);
  fill(200);
  
  segmentColor = color(255, 165, 0);
  
  for (let i = 0; i < numSegments; i++) {
    segmentLengths[i] = map(i, 0, numSegments - 1, 17, 6);
  }
  segments[0] = createVector(width / 2, height * 2 / 3 - stickLength);
  for (let i = 1; i <= numSegments; i++) {
    segments[i] = createVector(segments[i-1].x, segments[i-1].y + segmentLengths[i-1]);
  }
  
  windOffset = random(1000);
}

function draw() {
  background(0);
  applyPhysics();
  displaySegments();
  displayWindSpeed();
  displayWindDirection();
}

function applyPhysics() {
  windIntensity = noise(frameCount * 0.01) * windRange;
  
  windSpeeds.push(windIntensity);
  if (windSpeeds.length > 160) {
    windSpeeds.shift();
  }

  for (let i = 1; i <= numSegments; i++) {
    let windDirection = (noise(windOffset + frameCount * 0.01 + i * 1000) - 0.5) * (1 / (1 + windIntensity));
    
    windDirectionAngle = windDirection * PI / 4;
    let windX = cos(windDirectionAngle) * windIntensity * windStrength;
    let windY = sin(windDirectionAngle) * windIntensity * windStrength;

    segments[i].y += gravity + windY;
    segments[i].x += windX * segmentLengths[i-1];
    
    let dir = p5.Vector.sub(segments[i], segments[i-1]);
    dir.setMag(segmentLengths[i-1]);
    segments[i] = p5.Vector.add(segments[i-1], dir);
  }
}

function displaySegments() {
  stroke(255);
  strokeWeight(4);
  line(segments[0].x, segments[0].y + stickLength, segments[0].x, segments[0].y);

  for (let i = 1; i < numSegments; i++) {
    stroke(segmentColor);
    strokeWeight(2);
    line(segments[i].x, segments[i].y, segments[i+1].x, segments[i+1].y);
  }
}

function displayWindSpeed() {
  let avgWindSpeed = 0;
  for (let speed of windSpeeds) {
    avgWindSpeed += speed;
  }
  avgWindSpeed /= windSpeeds.length;
  
  let windSpeedKnots = windIntensity * 1.94384;
  let avgWindSpeedKnots = avgWindSpeed * 1.94384;
  let windSpeedMph = windIntensity * 2.23694;
  let avgWindSpeedMph = avgWindSpeed * 2.23694;
  
  let windSpeedText = "Current Wind Speed: " + nf(windSpeedKnots, 1, 2) + " knots (" + nf(windSpeedMph, 1, 2) + " mph)";
  let avgWindSpeedText = "Average Wind Speed: " + nf(avgWindSpeedKnots, 1, 2) + " knots (" + nf(avgWindSpeedMph, 1, 2) + " mph)";
  let windRangeText = "Wind Speed Range: 0 to " + nf(windRange, 1, 2) + " m/s";
  let gravityText = "Gravity: " + nf(gravity, 1, 2);
  
  noStroke();
  textAlign(CENTER);
  text(windSpeedText, width / 2, segments[0].y - 90);
  text(avgWindSpeedText, width / 2, segments[0].y - 70);
  text(windRangeText, width / 2, segments[0].y - 50);
  text(gravityText, width / 2, segments[0].y - 30);
  
  let instructions = "Press W to increase wind range, S to decrease wind range. Press E to increase gravity, D to decrease gravity.";
  text(instructions, width / 2, height - 30);
}

function displayWindDirection() {
  push();
  translate(50, 50);
  rotate(windDirectionAngle);
  stroke(200);
  strokeWeight(3);
  line(0, 0, 30, 0);
  line(30, 0, 25, -5);
  line(30, 0, 25, 5);
  pop();
}

function keyPressed() {
  if (key === 'w' || key === 'W') {
    windRange += 0.1;
  } else if (key === 's' || key === 'S') {
    windRange = max(0, windRange - 0.1);
  }
  
  if (key === 'e' || key === 'E') {
    gravity += 0.1;
  } else if (key === 'd' || key === 'D') {
    gravity = max(0, gravity - 0.1);
  }
}
