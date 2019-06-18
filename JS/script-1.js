'use strict';



// TASK 1!!!!



let input;

const numbers = [];

let j = 0;


while (input !== null) {
    input = prompt('Write the numbers');
    numbers.push(Number(input));
    j += 1;
}

console.log(numbers);

let total = 0;



for (let k in numbers) {
    total += numbers[k];
}

console.log(`Общая сумма чисел равна ${total}`);