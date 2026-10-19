const r = require("raylib");

const screenWidth = 400;
const screenHeight = 400;

function setup() {
    const world = {};
    world.cf = 0;
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "Polygon");
    r.SetTargetFPS(15);

    return world;
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const centerX = 200;
    const centerY = 200;
    const radius = 100;
    const noOfSides = 7;
    const addAngle = 360 / noOfSides;

    // r.DrawCircle(centerX, centerY, radius, r.WHITE)

    for (let theta = 0; theta < 360; theta += addAngle) {
        const angle1 = convertToRadians(theta, world);
        const angle2 = convertToRadians(theta + addAngle, world);

        const x = centerX + radius * Math.cos(angle1);
        const y = centerY + radius * Math.sin(angle1);

        const x2 = centerX + radius * Math.cos(angle2);
        const y2 = centerY + radius * Math.sin(angle2);

        // const color = theta % 20 === 0 ? r.RED : r.BLUE;
        // r.DrawLine(x, y, x2, y2, color);

        r.DrawLineEx({ x: x, y: y }, { x: x2, y: y2 }, 8, r.WHITE)
    }


    r.EndDrawing();
}

function convertToRadians(theta, world) {
    return theta * (Math.PI / 180);
    // return theta * (Math.PI / 180) + world.cf;
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