// // const r = require("raylib");
// // r.setTargetFPS(50);
// // r.InitWindow(400, 400, "bacisssss...");
// // // r.Drawrectangele(0,0,100,100,r.RED);

// const r = require("raylib");

// r.InitWindow(400, 400, "Basic Window");
// r.SetTargetFPS(50);

// while (!r.WindowShouldClose()) {
//   r.BeginDrawing();
//   r.ClearBackground(r.WHITE);
//   r.DrawRectangle(0, 0, 100, 100, r.RED);
//   r.EndDrawing();
// }

// r.CloseWindow();

const r = require("raylib");

r.InitWindow(800, 800, "bacisssss...");
r.SetTargetFPS(1);
r.ClearBackground(r.WHITE);

while (!r.WindowShouldClose()) {
  r.BeginDrawing();

  r.DrawRectangle(100, 100, 300, 500, r.RED);
  // r.DrawRectangle(150, 150, 500, 500, r.RED);
  // r.DrawRectangle(200, 200, 400, 400, r.BLUE);
  // r.DrawRectangle(250, 250, 300, 300, r.YELLOW);
  // r.DrawLine(300, 300, 301, 301, r.BLACK);

  r.EndDrawing();
}

r.CloseWindow();
