export function greet( name: string = 'World'){
    console.log("Hello, " + name + "!");
}

function addTwoNumbers(num1: number, num2: number = 0): number {
    return  num1 + num2;
}

let total: number = addTwoNumbers(30);

console.log('Total: ', total);

/*
let firstName = 'Manuel'; */

// greet(firstName);
