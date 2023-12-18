

function setup() {
    createCanvas(800, 600); 
    noStroke();
}

let lastMinute = -1; 

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    // Check if the minute has changed and print to console
    if (min !== lastMinute) {
        console.log(min);
        lastMinute = min;
    }


function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    background(200, 255, 200);

    // Draw hours as trees
    for (let i = 0; i < hr; i++) {
        let treeHeight = map(i, 0, 23, 50, 300);
        fill(100, 50, 0); 
        rect(33 + i * 33, height - treeHeight, 20, treeHeight); // Adjusted position for 24 trees
        fill(0, 200, 0); 
        ellipse(43 + i * 33, height - treeHeight, 60, 60);
    }

    // Draw minutes as clouds
    let yOffset = 0; 
    for (let i = 0; i < min; i++) {
        let x = 50 + i % 60 * 12;
        let y = 20 + yOffset;
        yOffset = (yOffset === 0) ? 10 : 0; 
        fill(255, 150, 0); 
        ellipse(x, y, 10, 10);
    }

    // Draw seconds as single dots in a circle
    let centerX = width / 2;
    let centerY = height / 2;
    for (let i = 0; i < sec; i++) {
        let angle = map(i, 0, 59, 0, TWO_PI) - HALF_PI; // Adjusting angle for starting point
        let x = centerX + cos(angle) * 50;
        let y = centerY + sin(angle) * 50;
        fill(255, 0, 0); 
        ellipse(x, y, 5, 5);
    }

    // Visual effect for minute change
    if (frameCount % 60 == 0) { // Check every second
        fill(255, 255, 255, 50);
        ellipse(centerX, centerY, 200, 200);
    }
}
