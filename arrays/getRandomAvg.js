function getRandom() {
    const array = [];
    for (let index = 0; index < 20; index++) {
        const fisrtRandom = Math.random();
        const secondRandom = Math.random();
        const thirdRandom = Math.random();
        const fourthRandom = Math.random();
        const fifthRandom = Math.random();
        const sixthRandom = Math.random();
        const seventhRandom = Math.random();
        const eigthRandom = Math.random();
        const ninthRandom = Math.random();
        const tenthRandom = Math.random();
        const sum = (fisrtRandom + secondRandom + thirdRandom + fourthRandom + fifthRandom + sixthRandom + seventhRandom + eigthRandom + ninthRandom + tenthRandom) * 100;
        array.push(sum)
    }
    return array;
}
const r = require("raylib");


function setup() {
    const screenWidth = 400;
    const screenHeight = 400;

    // const data = [12, 45, 78, 901, 31, 56, 34, 62, 19, 40];
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
    // const data = createRandomArray(100, 300);
    const data = getRandom();
    // const data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];
    // const data = [1, 2, 3, 4, 5];

    const count = data.length;
    const gap = 10;
    const width = (screenWidth - (count * gap)) / count;
    // const width = -40;

    const cf = 0;
    const palette = {
        rColour: r.DARKBLUE,
    }
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "Averages");
    r.SetTargetFPS(15);

    return {
        screenHeight,
        screenWidth,
        data,
        cf,
        count,
        width,
        palette,
        gap
    };
}

function createRandomArray(x, th) {
    const arr = [];
    for (let z = 0; z < x; z++) {
        arr.push(Math.random() * th)
    }
    return arr
}

function max(data) {
    let max = data[0];
    for (datum of data) {
        if (datum > max) max = datum;
    }
    return max;
}

function drawAvg(data, world) {
    const y = calculateYOfAvg(data, world);
    r.DrawLine(0, y, world.screenWidth, y, r.RED);
}


function calculateYOfAvg(data, world) {
    const avg = calculateAvg(data, world);
    const maxV = max(data);
    lineY = world.screenHeight - (world.screenHeight * 0.9 * (avg / maxV));

    return lineY;
}

function calculateAvg(data, world) {
    let sum = 0;
    for (val of data) {
        sum += val;
    }
    return avg = sum / world.count;
}

function drawGraph(world) {
    const maxV = max(world.data);
    world.width = world.width > 0 ? world.width : 1;

    for (let x = 0; x < world.count; x++) {
        const barData = createBar(x, world, maxV);

        drawBar(barData, world.data[x]);
    }
}

function drawBar(barData, datum) {
    r.DrawRectangleRec(barData, barData.colour);
    // r.DrawText(`${datum}`, barData.x, barData.y, 20, r.BLACK);
}

function createBar(x, world, maxV) {
    const width = world.width;
    const height = world.screenHeight * 0.9 * (world.data[x] / maxV);

    const xCord = x * (world.width + world.gap);
    const y = world.screenHeight - height;

    const colour = world.palette.rColour;
    return {
        x: xCord,
        y: y,
        width: width,
        height: height,
        colour: colour
    };
}
function drawStatics(data, world) {
    const avg = calculateAvg(data, world);
    const maxV = max(data);
    r.DrawText(`Average : ${Math.trunc(avg)}    Max : ${Math.trunc(maxV)}`, 10, 10, 20, r.GOLD);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    drawGraph(world);
    drawAvg(world.data, world);
    drawStatics(world.data, world);

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