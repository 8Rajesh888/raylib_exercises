const r = require("raylib");



function draw(world, target) {
    r.BeginDrawing();

    r.ClearBackground(r.WHITE);

    width = 30;
    height = 30;
    rows = 10;
    columns = 10;
    const startArray = [
        { x: 0, y: 0 },
        { x: 300, y: 0 },
        { x: 600, y: 0 },

        { x: 0, y: 300 },
        { x: 300, y: 300 },
        { x: 600, y: 300 },

        { x: 0, y: 600 },
        { x: 300, y: 600 },
        { x: 600, y: 600 },

    ]
    for (const start of startArray) {
        r.DrawTexture(target[0].texture, start.x, start.y, r.WHITE)

    }

    r.DrawLineEx({ x: 0, y: 300 }, { x: 900, y: 300 }, 4, r.BLACK);
    r.DrawLineEx({ x: 0, y: 600 }, { x: 900, y: 600 }, 4, r.BLACK);
    r.DrawLineEx({ x: 300, y: 0 }, { x: 300, y: 900 }, 4, r.BLACK);
    r.DrawLineEx({ x: 600, y: 0 }, { x: 600, y: 900 }, 4, r.BLACK);

    r.EndDrawing();

}

function teardown() {
    r.CloseWindow();
}

function loop(world) {
    const target1 = r.LoadRenderTexture(300, 300);

    r.BeginTextureMode(target1);

    r.ClearBackground(r.WHITE);

    r.DrawRing({ x: 150, y: 150 }, 100, 110, 0, 360, 0, r.BLACK)

    r.EndTextureMode();

    const target2 = r.LoadRenderTexture(300, 300);

    r.BeginTextureMode(target2);
    r.ClearBackground(r.WHITE);

    r.DrawLineEx({ x: 10, y: 10 }, { x: 290, y: 290 }, 10, r.BLACK);
    r.DrawLineEx({ x: 290, y: 10 }, { x: 10, y: 290 }, 10, r.BLACK);

    r.EndTextureMode();

    const target = {
        0: target1,
        1: target2,
    }

    while (!r.WindowShouldClose()) {
        world.cf++;
        // x += 10;
        // y += 10;
        // no update!
        draw(world, target);
    }
}

function setup() {
    const windowWidth = 900;
    const windowHeight = 900;


    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "Texture");
    r.SetTargetFPS(30);

    return {
        window: {
            WIDTH: windowWidth,
            HEIGHT: windowHeight,
        },
        cf: 0,
        x: 5,
        y: 80,
    }
}

function main() {
    const world = setup();
    loop(world);
    teardown();
}

main();
