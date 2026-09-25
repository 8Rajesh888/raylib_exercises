const r = require("raylib");
const width = 0.7;
const height = 0.5;
const largeWidth = 700;
const largeHeight = 600;
const windowWidth = 1000;
const windowHeight = 800;
const largeX = 100;
const largeY = 100;
r.InitWindow(windowWidth, windowHeight, "Raylib");
r.SetTargetFPS(100);
function center(x, y, z) {
  return (x - y) / 2 + z;
}
function scale(x, y) {
  return x * y;
}
while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  r.DrawRectangle(largeX, largeY, largeWidth, largeHeight, r.WHITE);
  r.DrawRectangle(
    center(largeWidth, scale(width, largeWidth), largeX),
    center(largeHeight, scale(height, largeHeight), largeY),
    scale(width, largeWidth),
    scale(height, largeHeight),
    r.RED,
  );
  r.EndDrawing();
}
r.CloseWindow;
