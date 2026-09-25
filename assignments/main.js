const sketch = require("./02_sketch");


function loop() {
    while (sketch.running()) {
        sketch.update();
        sketch.draw();
    }
}

function main() {
    console.log("hello");

    sketch.setup();
    loop();
    sketch.teardown();
}

main();