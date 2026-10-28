const r = require("raylib");

function getRandomColour(palette) {
    const index = Math.floor(Math.random() * 3);
    return palette[index];
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

    for (let row = 0; row < rowLength; row++) {
        for (let col = 0; col < colLength; col++) {

            const colour = getRandomColour(world.palette);
            const noOfRepeatitions = Math.floor(Math.random() * 50 + 20);
            const remainingCols = colLength - col;
            const innerColLength = Math.min(noOfRepeatitions, remainingCols);

            const startX = col * width;
            const blockWidth = innerColLength * width;
            const startY = row * height;
            const blockHeight = height;

            for (let innerCol = col; innerCol < col + innerColLength; innerCol++) {

                r.DrawTexture(target.texture, innerCol * width, row * height, colour);
            }

            r.DrawLineEx({ x: col * width, y: row * height }, { x: (col + 1) * width - 5, y: (row + 1) * height }, 3, r.BLACK);

            for (let index = 0; index < 10; index++) {
                const x = r.GetRandomValue(startX, startX + blockWidth);
                const y = r.GetRandomValue(startY, startY + blockHeight);

                const rectWidth = Math.max(Math.random() * (blockWidth * 0.7), blockWidth / 5);
                const rectheight = Math.max(Math.random() * (blockHeight * 0.7), blockHeight / 5);
                const rectColour = r.ColorAlpha(r.WHITE, Math.random() * 0.25);
                r.DrawRectangle(x, y, rectWidth, rectheight, rectColour);
                // r.DrawCircle(x, y, 1, r.RED);
            }

            col += innerColLength - 1;
        }
    }

    r.EndTextureMode(mTarget);
    while (!r.WindowShouldClose()) {
        world.cf++;
        // draw(world);
        draw(world, mTarget);
    };

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