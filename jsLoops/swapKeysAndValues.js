// const colors = { red: "apple", yellow: "banana" };
// swapKeysAndValues(colors);
// // Returns: { apple: "red", banana: "yellow" }

function swapKeysAndValues(obj) {
    const swapped = {};
    for (const [key, value] of Object.entries(obj)) {
        swapped[value] = key + "";
    }
    return swapped;
}

console.log(swapKeysAndValues({ red: "apple", yellow: "banana" }));
