function a(number) {
  return b(number);
}

function b(number) {
  return c(number);
}

function c(number) {
  return d(number);
}

function d(number) {
  return number + 1;
}

console.log(a(5));