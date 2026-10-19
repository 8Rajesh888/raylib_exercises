const r = require("raylib");

function draw(world, target) {
    r.BeginDrawing();

    r.ClearBackground(r.BLUE)

    r.DrawTexture(target.texture, 400, 0, r.WHITE);
    r.DrawTexture(target.texture, 0, 200, r.WHITE);
    r.DrawTexture(target.texture, 400, 200, r.WHITE);
    r.DrawTexture(target.texture, 400, 0, r.WHITE);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

function loop(world) {
    const target = r.LoadRenderTexture(300, 200);
    r.BeginTextureMode(target);

    r.ClearBackground(r.BLACK)
    r.DrawCircle(150, 100, 50, r.RED);
    r.DrawCircle(200, 100, 40, r.WHITE);
    r.DrawCircle(150, 100, 10, r.GOLD);

    r.EndTextureMode();
    while (!r.WindowShouldClose()) {
        world.cf++;
        console.log(world.cf);

        // no update!
        draw(world, target);
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
