const r = require("raylib");

const ww = 1000;
const wl = 1000;

const rectWidth1 = 800;
const rectHeight1 = 500;

const rect2xscale = 0.4;
const rect2yscale = 0.9;

const rectWidth2 = rectWidth1 * rect2xscale;
const rectHeight2 = rectHeight1 * rect2yscale;

const rect2X = getCenter(rect1X, rectWidth1, rectWidth2);
const rect2Y = getCenter(rect1Y, rectHeight1, rectHeight2);

const rect1X = getCenter(0, ww, rectWidth1);
const rect1Y = getCenter(0, wl, rectHeight1);

function setup() {
  r.InitWindow(ww, wl, "Vectors");
  r.SetTargetFPS(60);
}

function update() {}

function loop() {
  while (!r.WindowShouldClose()) {
    update();
    draw();
  }
}

function draw() {
  r.BeginDrawing();

  r.ClearBackground(r.BLUE);

  r.DrawRectangle(rect1X, rect1Y, rectWidth1, rectHeight1, r.WHITE);
  r.DrawRectangle(rect2X, rect2Y, rectWidth2, rectHeight2, r.RED);

  r.EndDrawing();
}

function main() {
  setup();
  loop();

  r.CloseWindow();
}

function getCenter(center, centerofrect, size) {
  return center + (centerofrect / 2 - size / 2);
}

main();
