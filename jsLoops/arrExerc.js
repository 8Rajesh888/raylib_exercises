// #1 AreEqual() 

function areEqual(array1, array2) {
    const arr1 = array1;
    const arr2 = array2;

    for (let i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i])) {
            if (areEqual(arr1[i], arr2[i])) continue;
        }

        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// console.log(areEqual([1, 2, [3, [3, 4]], 4],
//     [1, 2, [3, [3, 4]], 4]));




// #2 reverse() 

function reverse(arr) {
    const revArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    return revArr
}

// console.log(reverse([1, 2, 3]));
// console.log(reverse([]));



// #3 Select the odd numbers

function selectOdds(arr) {
    const oddArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) oddArr.push(arr[i]);
    }
    return oddArr
}

// console.log(selectOdds([3, 2, 4, 5, 7]));
// console.log(selectOdds([2, 4, 6]));



// #4 Map word lengths


function mapLengths(arr) {
    const lengthsArr = [];
    for (let i = 0; i < arr.length; i++) {
        lengthsArr.push(arr[i].length);
    }
    return lengthsArr
}

// console.log(mapLengths(["apple", "cat", "Four"]));



// #5 Filter above a threshold
// filterAbove([6, 2, 3, 1, 4, 7], 3) => [6, 4, 7]
// filterAbove([1, 2, 3], 4) => []

function filterAbove(arr, th) {
    const aboveThresArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > th) aboveThresArr.push(arr[i]);
    }
    return aboveThresArr
}

// console.log(filterAbove([6, 2, 3, 1, 4, 7], 3));
// console.log(filterAbove([1, 2, 3], 4));


// #6 Before above a threshold
// filterBelow([6, 2, 3, 1, 4, 7], 3) => [2, 1]
// filterBelow([1, 2, 3], 0) => []
//
// Do not modify the input array.

function filterBelow(arr, th) {
    const belowThresArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < th) belowThresArr.push(arr[i]);
    }
    return belowThresArr
}
// console.log(filterBelow([6, 2, 3, 1, 4, 7], 3));
// console.log(filterBelow([1, 2, 3], 4));


// #7 Find the first index

// findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea") => 2
//
// Do not modify the input array.

function findIndex(arr, ele) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) return i;
    }
    return "Not Found"
}

// console.log(findIndex(["apple", "hi", "cake", "tea", "coffee", "tea"], "tea"));


// #8 Find the last index
// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
//
// Do not modify the input array.

function findLastIndex(array, element) { }
function findLastIndex(arr, ele) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === ele) return i;
    }
    return "Not Found"
}

// console.log(findLastIndex(["apple", "hi", "cake", "tea", "coffee", "tea", "pen"], "tea"));


// #9 Fibonacci

function fibonacci(num) {
    const fib = [];
    let x = 0;
    let y = 1;
    for (let i = 0; i < num; i++) {
        fib.push(x);
        let temp = x;
        x = y;
        y += temp;
    }
    return fib;
}

// console.log(fibonacci(10));


// #10 Reverse Fibonacci

function reverseFibonacci(num) {
    return reverse(fibonacci(num));
}

// console.log(reverseFibonacci(5));


// #11 Students

const students = [
    { name: "Anu", marks: 80 },
    { name: "Rahul", marks: 65 },
    { name: "Meera", marks: 91 },
    { name: "Vikram", marks: 72 },
];

function passedStudents(students) {
    const ps = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].marks > 70) ps.push(students[i].name);
    }
    return ps
}
// console.log(passedStudents(students));



// #12 Matrix Sum

function sumMatrix(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
    }
    return sum
}

// console.log(
//     sumMatrix([
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ]));
