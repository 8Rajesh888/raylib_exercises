function nestesdParentheses(number) {
    if (number === 0) {
        return "";
    } else {
        return "(" + nestesdParentheses(number - 1) + ")";      
}
}

console.log(nestesdParentheses(8922));