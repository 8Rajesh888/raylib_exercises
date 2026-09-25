/*const price = 100;
const quantity = 5;
const total = price * quantity;

console.log(`Total price: $${total}`);  */

/*
Program to check if a number is positive, negative, or zero
const number =-32;
if (number > 0) {
    console.log(`${number} is a positive number.`);
} else if (number < 0) {
    console.log(`${number} is a negative number.`);
} else {
    console.log(`${number} is zero.`);
}
*/ /*
true && false ? console.log("yes") : console.log("no")  ;

*/

/*
Program for printing even or odd numbers from 1 to 50
let a=1;
for(let max=50;a<=max;a++){
a % 2 === 0 ? console.log (`${a} is even`) : console.log(`${a} is odd`)    ;
}
*/

/*
program for printing prime numbers from 1 to 50
let a=1;
let max=50;
let count=0;
let divider=2;
while(a<=max){
   count=0;
   divider=2;
   while(divider<=a){
       if(a%divider==0){
           count++;
       }
       divider++;
   }
   if(count==1){
       console.log(`${a} is prime`);
   }else{
         console.log(`${a} is not prime`);      
   }
   a++;
    
}*/

/*
const number = 2;

if (number > 5) {
  console.log("A");
  console.log("B");
  console.log("C");
}*/

/*
let a=1;
a=4;
console.log(a);*/

/*
const width = 10;
const height = 5;
console.log(`Area of rectangle: ${width * height}`);*/

/*let score = 85;
score =34;
score = 90;
score = 100;
score = 75;
console.log(`Final score: ${score}`);*/

/* const number = 10;
number = 20;
*/

/*
let a = 5;
a=19;
a=334;
a=4;
let a=3;
*/

/*
const studentMarks = 85;
const Result = studentMarks >= 40 ? "Pass" : "Fail";
console.log(`Result: ${Result}`);
*/

/*
let score = score + 10;
console.log(`Updated score: ${score}`);*/

/*
let score = 10;
let bonus = 5;

score = score + bonus;
bonus = score * 2;
score = score + bonus;

console.log(`Final score: ${score}`);
*/




const valueToBeRounded = 15;
const modOfValue = valueToBeRounded % 10;

const roundedValue = modOfValue >= 5 
    ? valueToBeRounded + (10 - modOfValue) 
    : valueToBeRounded - modOfValue;

console.log(roundedValue);








