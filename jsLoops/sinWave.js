const r = require('raylib');

function setup() {
    const world = {
        window: { width: 800, height: 800 },
        circle: {
            x: 0,
            y: 0,
            // radius: 100,
            // startingAngle: 0,
            // endingAngle: 0,
            color: r.RED,
        },
        theta: 0,
        rad: 40,
        count: 0,
        gap: 20,
    }
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.window.width, world.window.height, "Sin Wave");
    r.SetTargetFPS(60);

    return world;
}

function getColour(x) {
    const colours = {
        0: r.GOLD,
        1: r.WHITE,
        2: r.GOLD,
    }
    return colours[x % 6 % 5 % 2];
}

function convertToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
function update(world) {
    world.circle.x = world.circle.x + 1 % world.window.width;
    world.circle.y = Math.sin(convertToRadians(world.circle.x)) * 40 + world.window.width / 2;
    world.circle.color = getColour(world.circle.x);
    world.count = 0;
}

function drawSinWave(world) {
    const circle = world.circle;

    r.DrawLineEx({ x: 0, y: 400 }, { x: 800, y: 400 }, 5, r.WHITE)
    r.DrawCircleV(circle, 5, circle.color);
}


function drawCircles(world) {

    r.BeginDrawing();
    // r.ClearBackground(r.BLACK);

    drawSinWave(world);

    r.EndDrawing();
}


function loop(world) {
    while (!r.WindowShouldClose()) {
        update(world);

        drawCircles(world);
    }
}

function main() {
    const world = setup();
    loop(world);
}
main()