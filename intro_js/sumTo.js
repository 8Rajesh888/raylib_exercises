function sumTo(number) {
  if (number === 0) {
    return 0;
  }

  return number + sumTo(number - 1);
}
console.log(sumTo(8923));
