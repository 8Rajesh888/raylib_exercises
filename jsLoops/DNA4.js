const r = require('raylib');

function setup() {
    const world = {
        window: { width: 1500, height: 400 },
        cf: 0,
        bg: { r: 10, g: 20, b: 30, a: 255 },
        // z: 0
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.window.width / 2, world.window.height, "DNA");
    r.SetTargetFPS(20);

    return world;
}

function getColourCircle(index, z) {
    const colours = {
        0: r.RED,
        1: r.BLUE,
        2: r.GREEN,
        3: r.YELLOW,
    };
    return colours[(index) % 4];
}

function getColourLine1(index) {
    const colours = {
        0: r.RED,
        1: r.BLUE,
        2: r.GREEN,
        3: r.YELLOW
    };
    return colours[index % 4];
}
function getColourLine2(index) {
    const colours = {
        0: r.GREEN,
        1: r.YELLOW,
        2: r.RED,
        3: r.BLUE,
    };
    return colours[index % 4];
}

function convertToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function update(world) {
    world.cf += 3;
}

function drawDNA(world) {
    const amplitude = 120;
    const frequency = 0.5;
    const lineGap = 10;

    const centerY = world.window.height / 2;

    let basePairIndex = 0;
    let nodeIndex = 0;

    let z = 0;
    for (let x = 0; x < world.window.width + 200; x += 15) {
        const angle = convertToRadians(x * frequency + world.cf);
        const yOffset = Math.sin(angle) * amplitude;

        const pos1 = { x: x + z, y: centerY + yOffset - z + 50 };
        const pos2 = { x: x - z, y: centerY - yOffset + z };

        if (x % lineGap === 0) {
            posMid = {
                x: x,
                y: centerY,
            }
            // r.DrawLineEx(pos1, posMid, 4, getColourLine1(basePairIndex));
            // r.DrawLineEx(posMid, pos2, 4, getColourLine2(basePairIndex));
            r.DrawLineEx(pos1, pos2, 2, getColourLine2(basePairIndex));
            // r.DrawLineEx(pos1, pos2, 2, getColourLine2(basePairIndex));
            basePairIndex++;
        }

        const circleColor = getColourCircle(nodeIndex, z);

        r.DrawCircleV(pos1, 8, circleColor);
        r.DrawCircleV(pos2, 8, circleColor);
        nodeIndex++;
        z++;
    }
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(world.bg);

    drawDNA(world);

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        update(world);
        draw(world);
    }
    r.CloseWindow();
}

function main() {
    const world = setup();
    loop(world);
}

main();
