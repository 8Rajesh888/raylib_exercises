const r = require('raylib');

function setup() {
    const world = {
        window: { width: 440, height: 440 },
        countsOfStrips: 10,
        rect: {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            colour: r.GOLD,
        },
        count1: 0,
    };

    world.rect.width = world.window.width / world.countsOfStrips;
    world.rect.height = world.window.height;
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.window.width, world.window.height, "Spain");
    r.SetTargetFPS(60);

    return world;
}

function draw(world) {
    r.BeginDrawing();

    while (world.rect.x <= world.window.width && world.count1 === 2) {
        world.rect.colour = world.rect.colour === r.GOLD ? r.RED : r.GOLD;
        world.count1 = 0;
        world.rect.x += world.rect.width;
    }
    r.DrawRectangleRec(world.rect, world.rect.colour);
    world.count1++;

    r.EndDrawing();

}

function loop(world) {
    while (!r.WindowShouldClose()) {
        // no update!
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
}

main();