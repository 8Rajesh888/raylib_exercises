const r = require("raylib");

const screenWidth = 600;
const screenHeight = 400;

function setup() {
    const world = {};
    world.cf = 0;
    world.palette = {
        0: r.BLACK,
    }
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "Circle Points");
    r.SetTargetFPS(15);

    return world;
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const centerX = 300;
    const centerY = 200;
    const xRadius = 200;
    const yRadius = 100;

    // r.DrawCircle(centerX, centerY, radius, r.WHITE)

    for (let theta = 0; theta < 360; theta++) {
        const angle = convertToRadians(theta, world);

        const x = centerX + -xRadius * Math.cos(angle);
        const y = centerY + -yRadius * Math.sin(angle);
        const x2 = centerX + -xRadius * Math.cos(angle + 0.1);
        const y2 = centerY + -yRadius * Math.sin(angle + 0.1);

        r.DrawLine(x, y, x2, y2, r.RED)
    }


    r.EndDrawing();
}

function convertToRadians(theta, world) {
    return theta * (Math.PI / 180);
    return theta * (Math.PI / 180) + world.cf;
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