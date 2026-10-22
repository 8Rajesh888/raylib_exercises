const r = require("raylib");

function draw(world, target) {
    r.BeginDrawing();

    r.ClearBackground(r.BLUE);

    width = 30;
    height = 30;
    rows = 10;
    columns = 10;

    // 1st col
    //china
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            const tg = target[(x + y) % 2];
            r.DrawTexture(tg.texture, x * width, y * height, r.WHITE);
        }
    }

    // Vstrips
    for (let y = 10; y < rows + 10; y++) {
        for (let x = 0; x < columns; x++) {
            const tg = target[(x) % 2];
            r.DrawTexture(tg.texture, x * width, y * height, r.WHITE);
        }
    }

    // Hstrips
    for (let y = 20; y < rows + 20; y++) {
        for (let x = 0; x < columns; x++) {
            const tg = target[(y) % 2];
            r.DrawTexture(tg.texture, x * width, y * height, r.WHITE);
        }
    }


    // 2nd col
    for (let y = 0; y < rows; y++) {
        for (let x = 10; x < columns + 10; x++) {
            const tg = target[(x * y) % 2];
            r.DrawTexture(tg.texture, x * width, y * height, r.WHITE);
        }
    }

    for (let y = 10; y < rows + 10; y++) {
        for (let x = 10; x < columns + 10; x++) {
            const tg = target[(x + y - 1) % 3 % 2];
            r.DrawTexture(tg.texture, x * width, y * height, r.WHITE);
        }
    }

    for (let y = 20; y < rows + 20; y++) {
        for (let x = 10; x < columns + 10; x++) {
            const tg = target[(x * y) % 5 % 2];
            r.DrawTexture(tg.texture, x * width, y * height, r.WHITE);
        }
    }


    // 3rd col
    for (let y = 0; y < rows; y++) {
        for (let x = 20; x < columns + 20; x++) {
            if ((x <= (y + 20) && (y) % 2 === 0) || (y + 20) <= x && (x) % 2 === 0)
                r.DrawTexture(target[0].texture, x * width, y * height, r.WHITE);
            else
                r.DrawTexture(target[1].texture, x * width, y * height, r.WHITE);
        }
    }

    for (let y = 10; y < rows + 10; y++) {
        for (let x = 20; x < columns + 20; x++) {
            if (x <= (y + 9))
                r.DrawTexture(target[1].texture, x * width, y * height, r.WHITE);
            else
                r.DrawTexture(target[0].texture, x * width, y * height, r.WHITE);
        }
    }

    for (let y = 20; y < rows + 20; y++) {
        for (let x = 20; x < columns + 20; x++) {
            const tg = target[((x + 1) * (y + 1)) % 3];
            r.DrawTexture(tg.texture, x * width, y * height, r.WHITE);
        }
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
    const target1 = r.LoadRenderTexture(30, 30);

    r.BeginTextureMode(target1);

    r.ClearBackground(r.WHITE);

    r.DrawTriangle({ x: 0, y: 30 }, { x: 30, y: 0 }, { x: 0, y: 0 }, r.DARKBLUE);

    // r.DrawTriangle({ x: 30, y: 30 }, { x: 0, y: 30 }, { x: 30, y: 0 }, r.BLUE);

    r.EndTextureMode();

    const target2 = r.LoadRenderTexture(30, 30);

    r.BeginTextureMode(target2);

    r.ClearBackground(r.DARKBLUE);

    r.DrawTriangle({ x: 0, y: 30 }, { x: 30, y: 0 }, { x: 0, y: 0 }, r.WHITE);

    r.EndTextureMode();

    const target = {
        0: target1,
        1: target2,
        2: target1,
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
