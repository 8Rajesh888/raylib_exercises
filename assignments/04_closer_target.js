const r = require("raylib");
const ww = 800;
const wl = 800;

const sourcex = 700;
const sourcey = 600;

const target1x = 300;
const target1y = 300;

const target2x = 700;
const target2y = 700;

function setup() {
  r.InitWindow(ww, wl, "Vectors");
  r.SetTargetFPS(60);
}

function distanceBtwnSourceAndTarget(sx, sy, tx, ty) {
  return ((tx - sx) ** 2 + (ty - sy) ** 2) ** 0.5;
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

  r.DrawCircle(sourcex, sourcey, 40, r.WHITE);
  r.DrawCircle(target1x, target1y, 40, r.BLACK);
  r.DrawCircle(target2x, target2x, 40, r.BLACK);

  if (
    distanceBtwnSourceAndTarget(sourcex, sourcey, target1x, target1y) >
    distanceBtwnSourceAndTarget(sourcex, sourcey, target2x, target2y)
  ) {
    r.DrawLine(sourcex, sourcey, target2x, target2y, r.YELLOW);
  } else {
    r.DrawLine(sourcex, sourcey, target1x, target1y, r.YELLOW);
  }

  r.EndDrawing();
}

function main() {
  setup();
  loop();

  r.CloseWindow();
}

main();
