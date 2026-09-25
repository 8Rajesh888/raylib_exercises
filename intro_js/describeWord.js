function describeWord(word) {
    return word.length > 0 ? "non_empty" : "empty";
}

console.log(describeWord("hello"));
