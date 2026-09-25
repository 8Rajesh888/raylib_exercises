function f(number) {
  return g(number + 1);
}

function g(number) {
  return h(number * 2);
}

function h(number) {
  return number - 3;
}

console.log(f(4));