import fs from 'fs';

const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8').split('\n').map(value => value.split(' '));

let horizontal = 0;
let depth = 0;

for (const [direction, value] of input) {
    switch (direction) {
        case 'forward': 
            horizontal = horizontal + +value;
            break;
        case 'down': 
            depth = depth + +value;
            break;
        case 'up': 
            depth = depth - +value;
            break;
    }
}

console.log('horizontal', horizontal)
console.log('depth', depth)
console.log('awnser', depth * horizontal)