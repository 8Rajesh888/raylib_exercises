const r = require("raylib");
const g = require("./geometry");

const screenWidth = 1000;
const screenHeight = 1000;
const FPS = 20;
const Name = "Rectangle";

let rectWidth1 = 800;
let rectHeight1 = 500;

let rectWidth2 = 400;
let rectHeight2 = 200;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(screenWidth, screenHeight, Name);
    r.SetTargetFPS(FPS);
}

// function update() {

// }


function offSet(center, centerofrect, size) {
    return center + (centerofrect - size) / 2;
}


function draw() {


    let rect1X = offSet(0, screenWidth, rectWidth1);
    let rect1Y = offSet(0, screenHeight, rectHeight1);

    let rect2X = offSet(rect1X, rectWidth1, rectWidth2);
    let rect2Y = offSet(rect1Y, rectHeight1, rectHeight2);




    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    r.DrawRectangle(rect1X, rect1Y, rectWidth1, rectHeight1, r.WHITE);
    r.DrawRectangle(rect2X, rect2Y, rectWidth2, rectHeight2, r.RED);

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