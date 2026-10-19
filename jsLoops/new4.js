const r = require('raylib');

function setup() {
    const world = {
        window: { width: 800, height: 800 },
        rows: 16,
        columns: 16,
        cf: 0,
    };
    world.width = world.window.width / world.columns;
    world.height = world.window.height / world.rows;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.window.width, world.window.height, "NEW4");
    r.SetTargetFPS(60);

    return world;
}

// function getColour(x) {
//     const colours = {
//         0: r.GOLD,
//         1: r.WHITE,
//     }
//     return colours[x % 5 % 2];
// }

function drawKungFu(world) {
    const width = world.width;
    const height = world.height;
    const rows = world.rows;
    const columns = world.columns;

    r.DrawLineBezier({ x: world.cf + 800, y: 0 }, { x: 0, y: 800 }, 10, r.RED);
    r.DrawLineBezier({ x: world.cf + 0, y: 0 }, { x: 800, y: 800 }, 10, r.RED);
    r.DrawLineBezier({ x: world.cf + 0, y: 400 }, { x: 400, y: 0 }, 10, r.RED);
    r.DrawLineBezier({ x: world.cf + 400, y: 0 }, { x: 800, y: 400 }, 10, r.RED);
    r.DrawLineBezier({ x: world.cf + 0, y: 400 }, { x: 400, y: 800 }, 10, r.RED);
    r.DrawLineBezier({ x: world.cf + 800, y: 400 }, { x: 400, y: 800 }, 10, r.RED);
    // for (let y = 0; y < rows; y++) {
    //     for (let x = 0; x < columns; x++) {
    //         // const colour = getColour(x + (y * 3));
    //         r.DrawRectangle(x * width, y * height, width, height, colour);
    //     }
    // }
}

function draw(world) {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawKungFu(world);

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        world.cf++;
        // no update!

        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
}
main();