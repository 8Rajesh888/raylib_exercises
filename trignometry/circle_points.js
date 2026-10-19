const r = require("raylib");

const screenWidth = 400;
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

    const centerX = 200;
    const centerY = 200;
    const radius = 100;
    const noOfPoints = 12;
    const addAngle = 360 / noOfPoints;

    r.DrawCircle(centerX, centerY, radius, r.WHITE)

    for (let theta = 0; theta < 360; theta += addAngle) {
        const angle = convertToRadians(theta, world);

        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        r.DrawCircle(
            Math.round(x),
            Math.round(y),
            3,
            world.palette[0],
        );
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