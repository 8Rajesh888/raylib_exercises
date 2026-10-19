const r = require("raylib");

const circle = {
    x: 400,
    y: 400,
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

function convertToRadians(degrees, world) {
    return degrees * (Math.PI / 180) + world.cf;
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

    for (let z = 0; z < 10; z++) {
        for (let x = 0; x < 400; x += 10) {
            circle.x = 400 + rad * z * Math.sin(convertToRadians(x, world));
            circle.y = 400 + rad * z * Math.cos(convertToRadians(x, world));

            r.DrawCircleV(circle, circle.radius, circle.color);
            angle++;
        }
        circle.radius += z;
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