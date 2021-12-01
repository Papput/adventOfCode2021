import fs from 'fs';

const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8').split('\n').map(value => +value);

let previousData = null;
let measurementsLargerThenPrevious = 0;

for (const data of input) {
    if(previousData) {
        data > previousData && measurementsLargerThenPrevious++
    }
    previousData = data
}

console.log('measurementsLargerThenPrevious', measurementsLargerThenPrevious)
