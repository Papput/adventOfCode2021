import fs from 'fs';

const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8').split('\n').map(value => +value);

const measurementsLargerThenPrevious = input.filter((value, index, arr) => value < arr[ index +1 ]).length;

console.log('measurementsLargerThenPrevious', measurementsLargerThenPrevious)
