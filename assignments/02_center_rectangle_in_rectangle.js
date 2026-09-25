const r = require("raylib");

const ww = 1000;
const wl = 1000;

let rectWidth1 = 800;
let rectHeight1 = 500;

let rect1X = getCenter(0, ww, rectWidth1);
let rect1Y = getCenter(0, wl, rectHeight1);

let rectWidth2 = 400;
let rectHeight2 = 200;

let rect2X = getCenter(rect1X, rectWidth1, rectWidth2);
let rect2Y = getCenter(rect1Y, rectHeight1, rectHeight2);

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

main();

function getCenter(center, centerofrect, size) {
  return center + (centerofrect - size) / 2;
}
