function testFunction(fn, arg, expected) {
  const result = fn(arg);
  if (result === expected) {
    console.log(`✅Test passed! ${fn.name}(${arg}) returned ${result}`);
  } else {
    console.log(
      `❌Test failed! ${fn.name}(${arg}) returned ${result}, expected ${expected}`,
    );
  }
  return "";
}

function square(x) {
  return x * x;
}

function double(x) {
  return x + x;
}

console.log(testFunction(square, 5, 25));
console.log(testFunction(square, 5, 22));
console.log(testFunction(square, 6, 25));
console.log(testFunction(square, 5, 36));
console.log(testFunction(double, 5, 10));
console.log(testFunction(double, 5, 12));
