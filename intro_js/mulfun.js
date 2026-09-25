function double(number) {
    console.log("double function called");
    return number * 2;
}
function addOne(number) {
    console.log("addOne function called");
    return number + 1;
}
function multiply(number1, number2) {
    console.log("multiply function called");
    return number1 * number2;
}       
console.log(multiply(double(2), (addOne(3))));