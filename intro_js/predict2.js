function isEven(number) {
  return number % 2 === 0;
}

function describe(number) {
  if (isEven(number)) {
    return "even";
  }

  return "odd";
}

console.log("start");
console.log(describe(7));
console.log(describe(12));
console.log("end");