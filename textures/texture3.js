const r = require("raylib");

function draw(world) {
    const target = r.LoadRenderTexture(10, 10);

    r.BeginTextureMode(target);
    r.ClearBackground(r.BLACK)
    r.DrawCircle(5, 5, 5, r.WHITE);
    r.EndTextureMode();
    r.BeginDrawing();

    r.ClearBackground(r.DARKGRAY);

    r.DrawTexture(target.texture, 50, 50, r.WHITE);
    r.DrawTexture(target.texture, 300, 50, r.WHITE);
    r.DrawTexture(target.texture, 550, 50, r.WHITE);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

function loop(world) {
    // world.target = r.LoadRenderTexture(200, 200);

    // r.BeginTextureMode(world.target);

    // r.ClearBackground(r.BLACK);
    // r.DrawCircle(100, 100, 60, r.RED);
    // r.DrawCircle(80, 80, 15, r.WHITE);

    // r.EndTextureMode();

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
