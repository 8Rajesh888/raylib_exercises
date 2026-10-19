const r = require("raylib");

const screenWidth = 400;
const screenHeight = 400;

function setup() {
    const world = {};
    world.cf = 0;
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "Spiral");
    r.SetTargetFPS(15);

    return world;
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const centerX = 200;
    const centerY = 200;

    for (let theta = 0; theta < 2880; theta += 10) {
        const angle = convertToRadians(theta, world);
        const rad = theta * 0.08;

        const x = centerX + rad * Math.cos(angle);
        const y = centerY + rad * Math.sin(angle);

        const color = theta % 20 === 0 ? r.RED : r.BLUE;

        r.DrawCircle(
            Math.round(x),
            Math.round(y),
            3,
            color
        );
    }

    r.EndDrawing();
}

function convertToRadians(theta, world) {
    return theta * (Math.PI / 180);
}

function main() {
    const world = setup();
    while (!r.WindowShouldClose()) {
        world.cf++;
        draw(world);
    }

    r.CloseWindow();
}

main();