function f(number) {
  if (number === 0) {
    console.log("zero");
    return 0;
  }

  console.log("before", number);

  const result = f(number - 1);

  console.log("after", number);

  return result + number;
}

console.log(f(3));