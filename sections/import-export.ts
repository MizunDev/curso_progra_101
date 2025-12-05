import { 
         addTwoNumbers,
         substractTwoNumbers,
         timesTwoNumbers,
         divideTwoNumbers 
} from '../helpers/math-helpers';

//let firstName: string = 'Manuel';
let num1: number = 30;
let num2: number = 20;

//greet(firstName);
let total: number = addTwoNumbers(num1, num2);
let result: number = substractTwoNumbers(num1, num2);
let multiplyResult: number = timesTwoNumbers(num1, num2);
let divideResult: number = divideTwoNumbers(num1, num2);

console.log('Total: ', total);
console.log('Result: ', result);
console.log('Multiply Result: ', multiplyResult);
console.log('Divide Result: ', divideResult);

/*
let firstName = 'Manuel'; */

// greet(firstName);