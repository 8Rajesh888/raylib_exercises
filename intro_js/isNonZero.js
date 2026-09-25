function isZero(number) {
    return number === 0;
}
function isNonZero(number){
    return !isZero(number)
}
console.log(isNonZero(0));