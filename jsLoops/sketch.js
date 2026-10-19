const r = require("raylib");

const circle = {
    x: 200,
    y: 200,
    radius: 1,
    color: r.RED,
}

let theta = 0;
let rad = 40;
let count = 0;
let gap = 20;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const screenWidth = 400;
    const screenHeight = 400;
    const FPS = 50;
    const world = {};

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "Rectangle");
    r.SetTargetFPS(FPS);

    return world;
}

function convertToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function update() {
    if (count === 2) {
        circle.x = 200 + rad * Math.sin(convertToRadians(theta));
        circle.y = 200 + rad * Math.cos(convertToRadians(theta));
        theta = (theta + gap);
        if ((theta % 360 >= 340)) {
            // theta = 10;
            rad += circle.radius * 2;
            gap += 1;
            circle.radius *= 1.2;
        }
        circle.color = circle.color === r.RED ? r.BLUE : r.RED;
        count = 0;
    }
    // console.log(theta);

    count++;
}

function draw() {

    r.BeginDrawing();
    // r.ClearBackground(r.BLACK);

    r.DrawCircleV(circle, circle.radius, circle.color);

    r.EndDrawing();


}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};
