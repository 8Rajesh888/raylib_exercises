function gspattern(n, i = 1) {
  const x = print(i);
  if (n === 0) {
    return "";
  }
  if (n > 1) {
    return x + "\n" + gspattern(n - 1, i + 1) + "\n" + x;
  } else {
    return x;
  }
}
function print(x) {
  if (x > 0) {
    return " * " + print(x - 1);
  } else {
    return "";
  }
}

console.log(gspattern(3));
