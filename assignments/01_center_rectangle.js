const r = require("raylib");
const ww = 800;
const wl = 1000;

function setUp() {
  r.InitWindow(ww, wl, "Vectors");
  r.SetTargetFPS(60);
}

function update() {}

function loop(rectWidth, rectHeight) {
  while (!r.WindowShouldClose()) {
    update();
    draw(rectWidth, rectHeight);
  }
}

function draw(rectWidth, rectHeight) {
  let rectX = getCenter(ww, rectWidth);
  let rectY = getCenter(wl, rectHeight);

  r.BeginDrawing();

  r.ClearBackground(r.BLUE);
  r.DrawRectangle(rectX, rectY, rectWidth, rectHeight, r.WHITE);

  r.EndDrawing();
}

function main() {
  let rectWidth = 500;
  let rectHeight = 200;

  setUp();
  loop(rectWidth, rectHeight);

  r.CloseWindow();
}

main();

function getCenter(side, width) {
  return (side - width) / 2;
}
