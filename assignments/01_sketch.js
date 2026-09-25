const r = require("raylib");
const g = require("./geometry");

const screenWidth = 1000;
const screenHeight = 1000;
const FPS = 20;
const Name = "Rectangle";

let rectWidth = 500;
let rectHeight = 200;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(screenWidth, screenHeight, Name);
    r.SetTargetFPS(FPS);
}

function update() {

}

// function getCenter(side, width) {
//     return (side - width) / 2;
// }

function draw() {

    let rectX = g.getCenter(screenWidth, rectWidth);
    let rectY = g.getCenter(screenHeight, rectHeight);



    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    r.DrawRectangle(rectX, rectY, rectWidth, rectHeight, r.WHITE);

    r.EndDrawing();


}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};