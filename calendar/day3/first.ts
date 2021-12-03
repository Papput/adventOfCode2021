// day3 first.ts
// 12 bit

import fs from 'fs';

const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8').split('\n');

let mostCommon: {[index: string]: { 0: number, 1: number}} = {};

for (const byte of input) {
    for(let i = 0; i < byte.length; i++) {
        if(!mostCommon[i]) {
            mostCommon[i] = { 0: 0, 1: 0};
        }
        if(+byte[i] === 0) {
            mostCommon[i][0] = mostCommon[i][0] + 1
        }
        if(+byte[i] === 1) {
            mostCommon[i][1] = mostCommon[i][1] + 1
        }
    }
}


const maxByte = Object.values(mostCommon).map(value => {
    if(value[0] === Math.max(value[0], value[1])) {
        return 0;
    }
    return 1;
})
const minByte = Object.values(mostCommon).map(value => {
    if(value[0] === Math.min(value[0], value[1])) {
        return 0;
    }
    return 1;
})

const gamma = parseInt(maxByte.join(''), 2)
const epsilon = parseInt(minByte.join(''), 2)

const power = gamma * epsilon;
console.log(power)