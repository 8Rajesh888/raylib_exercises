const outside = "I'm outside the function";

function scope() {
  const inside = "I'm inside the function";
  
  
}
//console.log(inside);
scope();

let x = 10;

if (true) {
  const x = 20;

  console.log(x);
}

console.log(x);