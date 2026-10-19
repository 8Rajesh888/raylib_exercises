const r = require('raylib');

function setup() {
    const world = {
        window: { width: 1500, height: 800 },
        circle1: {
            x: 0,
            y: 0,
            color: r.RED,
        },
        circle2: {
            x: 0,
            y: 0,
            color: r.RED,
        },
        cf: 0,
        count: 0,
        bg: {
            r: 0,
            g: 20,
            b: 30,
            a: 100,
        }
    }
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.window.width, world.window.height, "DNA");
    r.SetTargetFPS(60);

    return world;
}

function getColourCircle(x) {
    const colours = {
        0: r.WHITE,
        1: r.BLUE,
        2: r.BLUE,
        3: r.WHITE,
    }
    return colours[x % 6 % 4];
}

function getColourLine(x) {
    const colours = {
        0: r.RED,
        1: r.BLUE,
        2: r.GREEN,
        3: r.YELLOW,
    }
    return colours[x % 6 % 4];
}


function drawDNA(world) {
    r.DrawLine(world.circle1, world.circle2, r.WHITE);
}

function convertToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
function update(world) {

    // world.circle1.x = (world.circle1.x + 1);
    // world.circle1.y = Math.sin(convertToRadians(world.circle1.x)) * 50 + world.window.height / 2;
    // world.circle1.color = getColour(world.circle1.x);

    // world.circle2.x = (world.circle2.x + 1);
    // world.circle2.y = Math.sin(convertToRadians(world.circle2.x)) * -50 + world.window.height / 2;
    // world.circle2.color = getColour(world.circle2.x);

    // if (world.cf % 50 === 0) { r.DrawLineEx(world.circle1, world.circle2, 5, r.WHITE); }
}

function drawSinWave(world, i, j) {
    let a = 0;
    for (let x = 0; x < world.window.width; x += 2) {
        const angle = convertToRadians(x + world.cf * -2);
        const yOffset = Math.sin(angle) * 100;
        const centerY = world.window.height / 3;

        const pos1 = { x: x + j, y: centerY + yOffset + i };
        const pos2 = { x: x + i, y: centerY - yOffset + j };
        const color = getColourCircle(x);

        if (x % 40 === 0) {
            // r.DrawLineEx(pos1, pos2, 2, getColourLine(a++));
        }
        r.DrawCircleV(pos1, 5, color);
        r.DrawCircleV(pos2, 5, color);
    }

}


function drawCircles(world) {

    let j = 0;
    r.BeginDrawing();
    r.ClearBackground(world.bg);

    for (let i = -15; i < 10; i++) {

        drawSinWave(world, i, j);
        j += 15;
    }
    r.EndDrawing();
}


function loop(world) {
    while (!r.WindowShouldClose()) {
        world.cf++;
        update(world);

        drawCircles(world);
    }
}

function main() {
    const world = setup();
    loop(world);
}
main()