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
    r.InitWindow(world.window.width, world.window.height, "Something");
    r.SetTargetFPS(60);

    return world;
}

function getColour(x) {
    const colours = {
        6: r.GOLD,
        2: r.WHITE,
        3: r.GOLD,
        1: r.RED,
        4: r.BLUE,
        5: r.RED,
        0: r.BLUE,
    }
    return colours[x % 6];
}

function drawKungFu(world) {
    const width = world.width;
    const height = world.height;
    const rows = world.rows;
    const columns = world.columns;

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            const colour = getColour(x + (y * 4));
            r.DrawRectangle(x * width, y * height, width, height, colour);
        }
    }
}

function draw(world) {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawKungFu(world);

    r.EndDrawing();
}


function loop(world) {
    while (!r.WindowShouldClose()) {
        // no update!

        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
}
main();
