const r = require("raylib");
const windowWidth = 1000;
const windowLength = 1000;

const circle1x = 300;
const circle1y = 300;
const circle1rad = 60;


const circle2x = 375;
const circle2y = 375;
const circle2rad = 60;

const black = r.BLACK;
const red = r.RED;

const distance = distanceBtwnTwoCircles();
const colour = colourChooser();


function setup() {
    r.InitWindow(windowWidth, windowLength, "Circlessss......");
    r.SetTargetFPS(60);
}

function distanceBtwnTwoCircles() {
    return ((circle1x - circle2x) ** 2 + (circle1y - circle2y) ** 2) ** 0.5;
}

function colourChooser() {
    if (distance < (circle1rad + circle2rad)) {
        return red;
    } else {
        return black;
    }
}

function update() { }

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLUE);

    r.DrawCircle(circle1x, circle1y, circle1rad, colour);
    r.DrawCircle(circle2x, circle2y, circle2rad, colour);

    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function main() {
    setup();
    loop();

    r.CloseWindow();
}

main();

// console.log(distance);
// console.log(circle1rad);
// console.log(circle2rad);
// console.log(circle2rad + circle1rad);


