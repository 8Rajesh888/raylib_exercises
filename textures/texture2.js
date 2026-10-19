const r = require("raylib");

function draw(world, x, y, target) {

    r.BeginTextureMode(target);
    // r.ClearBackground(r.BLACK)
    r.DrawCircle(x, y, 5, r.WHITE);

    r.EndTextureMode();

    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawTexture(target.texture, 0, 0, r.WHITE);

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
    let x = 0;
    let y = 0;
    const target = r.LoadRenderTexture(600, 400);

    while (!r.WindowShouldClose()) {
        world.cf++;
        x += 10;
        y += 10;
        // no update!
        draw(world, x, y, target);
    }
}

function setup() {
    const windowWidth = 900;
    const windowHeight = 450;


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
