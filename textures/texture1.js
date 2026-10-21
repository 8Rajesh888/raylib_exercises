const r = require("raylib");

function draw(world) {
    r.BeginDrawing();

    r.ClearBackground(r.DARKGRAY);

    r.DrawTexture(world.target.texture, 50, 50, r.WHITE);
    r.DrawTexture(world.target.texture, 300, 50, r.WHITE);
    r.DrawTexture(world.target.texture, 550, 50, r.WHITE);

    // r.DrawTriangle({ x: 279, y: 202 }, { x: 172, y: 286 }, { x: 271, y: 255 }, r.RED);
    r.DrawTriangle({ x: 30, y: 30 }, { x: 30, y: 0 }, { x: 0, y: 30 }, r.RED);
    // r.DrawTriangle({x : 0, y : 0},)


    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

function loop(world) {
    world.target = r.LoadRenderTexture(200, 200);

    r.BeginTextureMode(world.target);

    r.ClearBackground(r.BLACK);
    r.DrawCircle(100, 100, 60, r.RED);
    r.DrawCircle(80, 80, 15, r.WHITE);

    r.EndTextureMode();

    while (!r.WindowShouldClose()) {
        world.cf++;
        // no update!
        draw(world);
    }
}

function setup() {
    const windowWidth = 900;
    const windowHeight = 450;


    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "Texture");
    r.SetTargetFPS(60);

    return {
        window: {
            WIDTH: windowWidth,
            HEIGHT: windowHeight,
        },
        cf: 0,
    }
}

// const target = r.LoadRenderTexture(200, 200);

// r.BeginTextureMode(target);

// r.ClearBackground(r.BLACK);
// r.DrawCircle(100, 100, 60, r.RED);
// r.DrawCircle(80, 80, 15, r.WHITE);

// r.EndTextureMode();

// while (!r.WindowShouldClose()) {
//   r.BeginDrawing();

//   r.ClearBackground(r.DARKGRAY);

//   r.DrawTexture(target.texture, 50, 50, r.WHITE);
//   r.DrawTexture(target.texture, 300, 50, r.WHITE);
//   r.DrawTexture(target.texture, 550, 50, r.WHITE);

//   r.EndDrawing();
// }

function main() {
    const world = setup();
    loop(world);
    teardown();
}

main();
