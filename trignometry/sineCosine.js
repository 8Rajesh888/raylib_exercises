const r = require("raylib");

const screenWidth = 800;
const screenHeight = 800;

function setup() {
    const world = {};
    world.cf = 0;
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "Sine Cosine");
    r.SetTargetFPS(15);

    return world;
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const centerX = screenWidth / 2;
    const centerY = screenHeight / 2;
    const radius = 100;
    let sinx = 50;
    let cosx = 50;

    r.DrawLine(0, centerY, screenWidth, centerY, r.WHITE);
    r.DrawLine(50, 0, 50, screenWidth, r.WHITE);

    for (let theta = 0; theta < 360 * 2; theta++) {
        const angle1 = convertToRadians(theta, world);

        sinx++;
        const y1 = centerY + -radius * Math.sin(angle1);

        cosx++;
        const y3 = centerY + -radius * Math.cos(angle1);

        r.DrawLine(sinx, y1, sinx + 1, y1, r.RED);
        r.DrawLine(cosx, y3, cosx + 1, y3, r.WHITE);

    }
    r.DrawCircle(50, centerY, 5, r.WHITE);
    r.DrawCircle(143, 300, 5, r.WHITE);
    r.DrawCircle(143, centerY, 5, r.WHITE);
    r.DrawCircle(233, 500, 5, r.WHITE);
    r.DrawCircle(323, 500, 5, r.WHITE);


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