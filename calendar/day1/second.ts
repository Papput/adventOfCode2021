import fs from 'fs';

const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8').split('\n').map(value => +value);

let previousValue = null;
let measurementsLargerThenPrevious = 0;

for(let i = 0; i + 2 < input.length; i++) {
    const currentValue = input[ i ] + input[ i + 1 ] + input[ i + 2 ];
    if(previousValue) {
        currentValue > previousValue && measurementsLargerThenPrevious++;
    }
    previousValue = currentValue;
}   

console.log('measurementsLargerThenPrevious', measurementsLargerThenPrevious)
