const r = require("raylib");

r.InitWindow(800, 400, "Raylib");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawRectangle(100, 50, 600, 300, r.WHITE);

  r.EndDrawing();
}

r.CloseWindow();

function colourchanger(x) {
  const mod = x % 10;

  if (mod === 1) {
    return r.WHITE;
  }
  if (mod === 2) {
    return r.RED;
  }
}
