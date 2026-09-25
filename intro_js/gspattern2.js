function pattern(number, s = "\n") {
  s = " * " + s;

  if (number === 1) {
    return s;
  }

  if (number === 0) {
    return "";
  }

  return s + pattern(number - 1, s) + s;
}

console.log(pattern(5));
