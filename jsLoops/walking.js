const r = require('raylib');

function setup() {
    const world = {
        window: { width: 800, height: 800 },
    };
    world.leg1 = {
        pos1: { x: 50, y: world.window.height / 2.5 },
        pos2: { x: 50, y: world.window.height / 2 },
    }
    world.leg2 = {
        pos1: { x: 100, y: world.window.height / 2.5 },
        pos2: { x: 100, y: world.window.height / 2 },
    }

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.window.width, world.window.height, "Something");
    r.SetTargetFPS(60);

    return world;
}


function makeWalk(world) {
    // for (let x = 50; x < world.window.width; x += 50) {
    //     const leg1 = {
    //         pos1: { x: x, y: world.window.height / 3 },
    //         pos2: { x: x, y: world.window.height / 2 },
    //     }
    //     r.DrawLineEx(leg1.pos1, leg1.pos2, 10, r.RED);
    // }



    r.DrawLineEx(world.leg1.pos1, world.leg1.pos2, 10, r.RED);
    r.DrawLineEx(world.leg2.pos1, world.leg2.pos2, 10, r.RED);
}

function draw(world) {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    makeWalk(world);

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
