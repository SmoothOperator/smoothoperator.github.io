// script.js

// Log Hello, World! to the console
console.log("Hello, World!");

function changeText() {
    document.getElementById("dynamic-text").innerText = "Text has been changed!";
}

// p5.js setup function
function setup() {
    // Create a canvas 600x400
    createCanvas(600, 400);
}

// p5.js draw function
function draw() {
    // Set background color
    background(0);

    // Draw an ellipse at the mouse position
    fill(255);
    ellipse(mouseX, mouseY, 50, 50);
}
