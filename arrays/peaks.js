const r = require("raylib");


function setup() {
    const screenWidth = 400;
    const screenHeight = 400;

    const data = [45, 12, 78, 91, 31, 56, 34, 62, 19, 40];

    // const data = [
    //     116, 112, 108, 104, 100, 96, 92, 88, 84,
    //     80, 76, 72, 68, 64, 60, 56, 52, 48,
    //     44, 40, 36, 32, 28, 24, 20, 16, 12,
    //     8, 4, 0
    // ];
    // const data = [
    //     0, 4, 8, 12, 16, 20, 24, 28, 32,
    //     36, 40, 44, 48, 52, 56, 60, 64, 68,
    //     72, 76, 80, 84, 88, 92, 96, 100, 104,
    //     108, 112, 116
    // ];
    // const data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];
    // const data = [1, 2, 3, 4, 5];

    const count = data.length;
    const spacing = screenWidth / (count - 1);

    const cf = 0;
    const palette = {
        peakColour: r.RED,
    }
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "Peaks");
    r.SetTargetFPS(15);

    return {
        screenHeight,
        screenWidth,
        data,
        cf,
        count,
        spacing,
        palette,
    };
}

function max(data) {
    let max = data[0];
    for (metadata of data) {
        max = Math.max(max, metadata);
    }

    return max;
}

function drawGraph(world) {
    const maxV = max(world.data);
    const peaks = getPeaks(world);

    for (let x = 0; x < world.count; x++) {
        const lineStart = createLinePoint(x, world, maxV);
        const lineEnd = createLinePoint(x + 1, world, maxV);

        drawLine(lineStart, lineEnd);
        drawPeak(x, world, lineStart, peaks);
    }

}

function getPeaks(world) {
    const peaks = [];
    for (let x = 0; x < world.count; x++) {
        if (isPeak(x, world)) peaks.push(world.data[x]);
    }

    return peaks;
}

function drawLine(lineStart, lineEnd) {
    r.DrawLineEx(lineStart, lineEnd, 2, r.BLACK);
}

function drawPeak(x, world, lineStart, peaks) {
    if (peaks.includes(world.data[x])) {
        r.DrawCircleV(lineStart, 10, world.palette.peakColour);
    }
}

function isPeak(x, w) {
    return (w.data[x] > w.data[x - 1] && w.data[x] > w.data[x + 1]);
}

function createLinePoint(x, world, maxV) {
    const height = world.screenHeight * 0.9 * (world.data[x] / maxV);

    const xCord = x * world.spacing;
    const y = world.screenHeight - height;

    return {
        x: xCord,
        y: y,
    };
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.RAYWHITE);

    drawGraph(world);

    r.EndDrawing();
}

function main() {
    const world = setup();

    while (!r.WindowShouldClose()) {
        world.cf++;
        draw(world);
    }

    r.CloseWindow();
}

main();