// day3 first.ts
// 12 bit

import fs from 'fs';

const input = fs.readFileSync(__dirname + '/input.txt', 'utf-8').split('\n');


const getMostCommon = (input: string[]) => {
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

    return mostCommon;
}

const getMaxByte = ((mostCommon: {
    [index: string]: {
        0: number;
        1: number;
    };
}) => {
    const maxByte = Object.values(mostCommon).map(value => {
        const max = Math.max(value[0], value[1]);
        if(max === value[0] && max === value[1]) return 1;
        if(value[0] === Math.max(value[0], value[1])) {
            return 0;
        }
        return 1;
    })
    return maxByte;
})
const getMinByte = ((mostCommon: {
    [index: string]: {
        0: number;
        1: number;
    };
}) => {
    const minByte = Object.values(mostCommon).map(value => {
        const min = Math.min(value[0], value[1]);
        if(min === value[0] && min === value[1]) return 0;
        if(value[0] === Math.min(value[0], value[1])) {
            return 0;
        }
        return 1;
    })

    return minByte;
})


let oxygen: string[] = [...input];

for (let i = 0; oxygen.length > 1; i++) {
    console.log('oxygen', oxygen.length)
    const maxByte = getMaxByte(getMostCommon(oxygen));
    oxygen = oxygen.filter(byte => +maxByte[i] === +byte[i])
    if(i > 20000) break;
}
let co2: string[] = [...input];

for (let i = 0; co2.length > 1; i++) {
    console.log('co2', co2.length)
    const minByte = getMinByte(getMostCommon(co2));
    co2 = co2.filter(byte => +minByte[i] === +byte[i])
    if(i > 20000) break;
}
console.log('oxygen', oxygen)
console.log('co2', co2)

console.log('lifesupport', parseInt(oxygen[0], 2) * parseInt(co2[0], 2))