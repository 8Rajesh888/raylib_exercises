const r = require('raylib');

function setup() {
    const world = {
        window: { width: 800, height: 800 },
        rows: 16,
        columns: 16,
    };
    world.width = world.window.width / world.columns;
    world.height = world.window.height / world.rows;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.window.width, world.window.height, "NEW3");
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

function drawKungFu(world) {
    // drawCircles(world);

    r.DrawRing({ x: 250, y: 250 }, 50, 55, 180, 270, 8, r.RED);
    r.DrawRing({ x: 150, y: 150 }, 50, 55, 0, 90, 8, r.RED);
    // for (let y = 0; y < rows; y++) {
    //     for (let x = 0; x < columns; x++) {
    //         const colour = getColour(x + (y * 3));
    //         r.DrawRectangle(x * width, y * height, width, height, colour);
    //     }
    // }
}

function drawCircles(world) {
    const x = world.width;
    const y = world.height;
    const rows = world.rows;
    const columns = world.columns;

}

function drawCircles(world) {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawKungFu(world);

    r.EndDrawing();
}


function loop(world) {
    while (!r.WindowShouldClose()) {
        // no update!

        drawCircles(world);
    }
}

function main() {
    const world = setup();
    loop(world);
}
main()