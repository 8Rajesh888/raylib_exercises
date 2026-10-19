function replaceAtIndex(list, indexToReplace, replacementValue) {
    const arr = list;
    arr.splice(indexToReplace, 1, replacementValue);
    return arr;
}

console.log(replaceAtIndex([1, 2, 3, 4, 5], 2, 5))