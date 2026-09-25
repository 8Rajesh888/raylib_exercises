function describeNumber(number) {
  if (number > 0) {
    return "Positive";
  }
  if (number < 0) {
    return "Negative";
  }
  return "Zero";
}

console.log(describeNumber(0));
