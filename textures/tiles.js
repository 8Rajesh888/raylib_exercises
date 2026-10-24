const r = require("raylib");

function getRandomColour(palette) {
    const index = Math.floor(Math.random() * 3);
    return palette[index];
}

function getRandomRG(colour) {
    return {
        r: colour.r + Math.random() * 110,
        g: colour.g + Math.random() * 30,
        b: colour.b,
        a: colour.a,
    }
}

function draw(world, mTarget) {
    r.BeginDrawing();

    r.ClearBackground(r.BLUE);
    r.DrawTexture(mTarget.texture, 0, 0, r.WHITE);


    r.EndDrawing();

}

function teardown() {
    r.CloseWindow();
}

function loop(world) {
    const target = r.LoadRenderTexture(5, 30);

    r.BeginTextureMode(target);

    r.ClearBackground(r.WHITE);

    r.DrawRectangle(0, 0, 5, 30, r.WHITE);

    r.EndTextureMode();
    const mTarget = r.LoadRenderTexture(900, 900);
    r.BeginTextureMode(mTarget);

    r.ClearBackground(r.WHITE);
    const width = 5;
    const height = 30;
    const rowLength = 30;
    const colLength = 180;


    // 1st col
    //china
    for (let row = 0; row < rowLength; row++) {
        for (let col = 0; col < colLength; col++) {
            const colour = getRandomColour(world.palette);
            const noOfRepeatitions = Math.random() * 50 + 20;
            for (let innerCol = col; innerCol < col + noOfRepeatitions; innerCol++) {
                const randomRGColour = getRandomRG(colour);
                r.DrawTexture(target.texture, innerCol * width, row * height, randomRGColour);
            }
            col += noOfRepeatitions - 2;
        }
    }
    r.EndTextureMode(mTarget);
    while (!r.WindowShouldClose()) {
        world.cf++;
        // draw(world);
        draw(world, mTarget);
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
        palette: {
            0: r.SKYBLUE,
            1: r.BLUE,
            2: r.DARKBLUE,
        }
    }
}

function main() {
    const world = setup();
    loop(world);
    teardown();
}

main();
