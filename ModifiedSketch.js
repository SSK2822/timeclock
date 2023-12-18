
// setup() is called once at page-load
function setup() {
    createCanvas(800, 600); // make an HTML canvas element width x height pixels
    noStroke();
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    // Clear the background to represent a garden scene
    background(200, 255, 200);

    // Draw hours as trees
    for (let i = 0; i < hr % 12; i++) {
        let treeHeight = map(i, 0, 11, 50, 300);
        fill(100, 50, 0); // Brown color for tree trunk
        rect(50 + i * 60, height - treeHeight, 20, treeHeight);
        fill(0, 200, 0); // Green color for tree foliage
        ellipse(60 + i * 60, height - treeHeight, 60, 60);
    }

    // Draw minutes as flowers in a zig-zag pattern at the top
    let yOffset = 0; // Offset for creating the zig-zag pattern
    for (let i = 0; i < min; i++) {
        let x = 50 + i % 60 * 12;
        let y = 20 + yOffset;
        yOffset = (yOffset === 0) ? 10 : 0; // Change offset for zig-zag
        fill(255, 150, 0); // Orange color for flowers
        ellipse(x, y, 10, 10);
    }

    // Draw seconds as single dots in a circle
    let centerX = width / 2;
    let centerY = height / 2;
    for (let i = 0; i < sec; i++) {
        let angle = map(i, 0, 59, 0, TWO_PI) - HALF_PI; // Adjusting angle for starting point
        let x = centerX + cos(angle) * 50;
        let y = centerY + sin(angle) * 50;
        fill(255, 0, 0); // Red color for second dots
        ellipse(x, y, 5, 5);
    }

    // Visual effect for minute change
    if (frameCount % 60 == 0) { // Check every second
        fill(255, 255, 255, 50);
        ellipse(centerX, centerY, 200, 200);
    }
}
