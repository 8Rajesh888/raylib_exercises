
const r = require("raylib");

function getRandomColour(palette) {
    const index = Math.floor(Math.random() * 3);
    return palette[index];
}

function drawBlockDetails(x, y, width, height) {
    const colLength = Math.max(1, Math.floor(width / 400));
    const rowLength = Math.max(1, Math.floor(height / 20));

    const innerWidth = width / colLength;
    const innerHeight = height / rowLength;

    for (let row = 0; row < rowLength; row++) {
        for (let col = 0; col < colLength; col++) {
            // if (Math.random() > 0.7) continue;

            const startX = x + col * innerWidth;
            const startY = y + row * innerHeight;

            const rectWidth = innerWidth * (0.25 + Math.random() * 0.75);
            const rectHeight = Math.max(1, innerHeight * (0.15 + Math.random() * 0.4));

            const offsetX = Math.random() * Math.max(0, innerWidth - rectWidth);
            const offsetY = Math.random() * Math.max(0, innerHeight - rectHeight);

            const rectColour = r.ColorAlpha(
                r.WHITE,
                0.04 + Math.random() * 0.18
            );

            r.DrawRectangle(
                Math.floor(startX + offsetX),
                Math.floor(startY + offsetY),
                Math.ceil(rectWidth),
                Math.ceil(rectHeight),
                rectColour
            );
        }
    }

    const noOfStreaks = r.GetRandomValue(2, 6);

    for (let index = 0; index < noOfStreaks; index++) {
        const rectWidth = width * (0.1 + Math.random() * 0.55);
        const rectHeight = 1 + Math.random() * 3;

        const startX = x + Math.random() * Math.max(0, width - rectWidth);
        const startY = y + Math.random() * Math.max(0, height - rectHeight);

        const rectColour = r.ColorAlpha(
            r.WHITE,
            Math.random() * 0.15
        );

        r.DrawRectangle(
            Math.floor(startX),
            Math.floor(startY),
            Math.ceil(rectWidth),
            Math.ceil(rectHeight),
            rectColour
        );
    }
}

function drawBlock(x, y, width, height, colour) {
    r.DrawRectangle(x, y, width, height, colour);

    drawBlockDetails(x, y, width, height);

    // r.DrawRectangle(
    //     x,
    //     y + height - 2,
    //     width,
    //     2,
    //     r.ColorAlpha(r.BLACK, 0.08)
    // );
}

function draw(mTarget) {
    r.BeginDrawing();

    r.ClearBackground(r.BLUE);
    r.DrawTexture(mTarget.texture, 0, 0, r.WHITE);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

function loop(world) {
    const mTarget = r.LoadRenderTexture(900, 900);

    r.BeginTextureMode(mTarget);

    r.ClearBackground(r.WHITE);

    const width = 5;
    const height = 30;
    const rowLength = 30;
    const colLength = 180;

    for (let row = 0; row < rowLength; row++) {
        let col = 0;

        while (col < colLength) {
            const noOfRepeatitions = r.GetRandomValue(5, 24);
            const remainingCols = colLength - col;
            const innerColLength = Math.min(
                noOfRepeatitions,
                remainingCols
            );

            const startX = col * width;
            const startY = row * height;
            const blockWidth = Math.min(
                innerColLength * width,
                900 - startX
            );
            const blockHeight = Math.min(height, 900 - startY);

            const colour = getRandomColour(world.palette);

            drawBlock(
                startX,
                startY,
                blockWidth,
                blockHeight,
                colour
            );

            col += innerColLength;
        }
    }

    r.EndTextureMode();

    while (!r.WindowShouldClose()) {
        world.cf++;
        draw(mTarget);
    }

    r.UnloadRenderTexture(mTarget);
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
        palette: [
            r.SKYBLUE,
            r.BLUE,
            r.DARKBLUE
        ]
    };
}

function main() {
    const world = setup();
    loop(world);
    teardown();
}

main();
