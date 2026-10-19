const r = require("raylib");

const circle = {
    x: 400,
    y: 400,
    radius: 1,
    color: r.RED,
}

let theta = 0;
let rad = 20;
let count = 0;
let gap = 20;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const screenWidth = 800;
    const screenHeight = 800;
    const FPS = 15;
    const world = {};
    world.cf = 0;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "Rectangle");
    r.SetTargetFPS(FPS);

    return world;
}

function getColour(index, z) {
    const colours = {
        0: r.RED,
        1: r.BLUE,
        2: r.GREEN,
        3: r.YELLOW,
    };
    return colours[(index) % 4];
}

function convertToRadians(degrees, world) {
    return degrees * (Math.PI / 180);
}

function update(world) {
    world.cf++;
    // circle.x = 400 + rad * Math.sin(convertToRadians(theta));
    // circle.y = 400 + rad * Math.cos(convertToRadians(theta));
    // theta = (theta + gap);
    // if (theta >= 360) {
    //     theta = 0;
    //     rad += circle.radius * 2;
    //     gap += 1;
    //     circle.radius *= 1.2;
    // }
    // circle.color = circle.color === r.RED ? r.BLUE : r.RED;
    // count = 0;
}

function draw(world) {
    const circle = {
        x: 400,
        y: 400,
        radius: 2,
        color: r.RED,
    }
    let angle = 0;
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    for (let z = 0; z < 20; z++) {
        for (let x = 0; x < 360; x += 5) {
            // circle.x = 400 + rad * z * Math.tan(convertToRadians(x, world));
            // circle.y = 400 + rad * z * (Math.acos(convertToRadians(x, world)) * Math.asin(convertToRadians(x, world)));
            circle.x = 400 + rad * z * Math.tanh(convertToRadians(x, world));
            circle.y = 400 + rad * z * Math.sinh(convertToRadians(x, world));
            // circle.y = 400 + z + rad * Math.sin(convertToRadians(theta, world));
            // circle.x = 400 + z + rad * Math.tan(convertToRadians(theta, world));

            // circle.color = getColour(x + z); 
            r.DrawCircleV(circle, circle.radius, circle.color);
        }
        // circle.x = circle.x * Math.cos(convertToRadians(theta, world)) - circle.y * Math.sin(convertToRadians(theta, world))
        // circle.y = circle.x * Math.sin(convertToRadians(theta, world)) + circle.y * Math.cos(convertToRadians(theta, world))
        // theta = (theta + 10) % 360;
        circle.radius++;
    }

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

function loop(world) {
    while (running()) {
        update(world);
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
    teardown();
}

main();