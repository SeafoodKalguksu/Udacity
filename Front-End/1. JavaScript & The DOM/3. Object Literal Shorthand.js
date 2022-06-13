// Object Literal Shorthand
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = { type, color, carat };

let newGemstone = {
    type,
    color,
    carat,
    calculateWorth() {},
};

console.log(gemstone);
console.log(newGemstone);
