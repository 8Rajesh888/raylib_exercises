function countdown(number) {
  if (number === 0) {
    return;
  }

  console.log(number);
  countdown(number - 1);
}

countdown(10301);