const r = require("raylib");
const windowWidth = 800;
const windowHeight = 700;
const breadth2 = 500;
const length2 = 450;
const width = 0.7;
const height = 0.5;
const breadth1 = breadth2 * width;
const length1 = length2 * height;

const x2 = 100;
const y2 = 100;
r.InitWindow(windowWidth, windowHeight, "Raylib");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  r.DrawRectangle(x2, y2, breadth2, length2, r.WHITE);
  r.DrawRectangle(
    center(breadth2, breadth1, x2),
    center(length2, length1, y2),
    breadth1,
    length1,
    r.RED,
  );
  r.EndDrawing();
}

function center(x1, y1, z1) {
  return (x1 - y1) / 2 + z1;
}

r.CloseWindow();
