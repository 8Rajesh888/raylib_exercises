function first() {
  console.log("A");
}

function second() {
  console.log("B");
  first();
  console.log("C");
}

console.log("D");
second();
console.log("E");