import fs from 'fs';

const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8').split('\n').map(value => +value);

const measurementsLargerThenPrevious = input.filter((value, index, arr) => {
    const previous = value + arr[ index +1 ] + arr[ index + 2];
    const next = arr[ index +1 ] + arr[ index + 2] + arr[ index + 3 ];
    return previous < next;
}).length;

console.log('measurementsLargerThenPrevious', measurementsLargerThenPrevious)
