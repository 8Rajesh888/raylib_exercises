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

function getTheta(pointA, pointB, pointC) {
    const opp = getDistance(pointA, pointC);
    const hyp = getDistance(pointA, pointB);
    const radians = Math.asin(opp / hyp);

    return convertToDegrees(radians);
}

function getDistance(s, t) {
    return ((t.x - s.x) ** 2 + (t.y - s.y) ** 2) ** 0.5;
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const pointA = {
        x: 100,
        y: 300,
    }

    const pointB = {
        x: 350,
        y: 150,
    }

    r.DrawLineV(pointA, pointB, r.WHITE);
    // r.DrawCircleV(pointA, 3, r.RED);
    r.DrawCircleV(pointB, 3, r.RED);
    const pointC = {
        x: pointA.x,
        y: pointB.y,
    }
    r.DrawLineV(pointA, pointC, r.WHITE);
    r.DrawLineV(pointC, pointB, r.WHITE);
    const degrees = getTheta(pointA, pointB, pointC);
    r.DrawText(`Degrees : ${Math.trunc(degrees)}`, 10, 10, 20, r.GOLD);
    r.EndDrawing();
}

function convertToDegrees(radians) {
    return radians * (180 / Math.PI);
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