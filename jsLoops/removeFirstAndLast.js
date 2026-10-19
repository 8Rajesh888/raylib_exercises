function removeFirstAndLast(numbers) {
    const arr = numbers;
    arr.pop();
    arr.shift();
    return arr;
}

console.log(removeFirstAndLast([1, 2, 3, 4, 5, 6, 7, 8]));