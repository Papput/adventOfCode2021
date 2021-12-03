import fs from 'fs';

const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8').split('\n').map(value => value.split(' '));

let horizontal = 0;
let depth = 0;
let aim = 0;


for (const [direction, value] of input) {
    switch (direction) {
        case 'forward': 
            
            horizontal = horizontal + +value;
            depth = depth + (aim * +value);
            break;
        case 'down': 
            aim = aim + +value;
            break;
        case 'up': 
            aim = aim - +value;
            break;
    }
}

console.log('horizontal', horizontal)
console.log('depth', depth)
console.log('aim', aim)
console.log('awnser', depth * horizontal)