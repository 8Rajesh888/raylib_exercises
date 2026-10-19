const queue = [];

function addToQueue(num) {
    return queue.unshift(num);
}


function removeFromQueue(num) {
    return queue.pop(num);
}

console.log(addToQueue(10));
console.log(addToQueue(20));
console.log(addToQueue(40));
console.log(addToQueue(80));
console.log(queue);
console.log(removeFromQueue());
console.log(removeFromQueue());
console.log(queue);
