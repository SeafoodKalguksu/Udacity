// // Destructring
// In ES6, you can extract data from arrays and objects into distinct variables using destructuring.
// This probably sounds like something you’ve done before, for example, look at the two code snippets below that extract data using pre-ES6 techniques:

const pointForES5 = [10, 25, -34];
const x = pointForES5[0];
const y = pointForES5[1];
const z = pointForES5[2];

console.log(x, y, z);

const gemstoneForES5 = {
    type: 'quartz',
    color: 'rose',
    carat: 21.29,
};

const type = gemstoneForES5.type;
const color = gemstoneForES5.color;
const carat = gemstoneForES5.carat;

console.log(type, color, carat);

// Destructuring values from an array
const pointForES6 = [10, 25, -34];
const [newX, newY, newZ] = pointForES6;

console.log(newX, newY, newZ);

// Destructuring values from an object
const gemstoneForES6 = {
    newType: 'quartz',
    newColor: 'rose',
    newCarat: 21.29,
    comments: 'No',
};

const { newType, newColor, newCarat } = gemstoneForES6;

// TIP: You can also specify the values you want to select when destructuring an object.
// Only select the color property from the gemstoneForES5 object.
let { comments } = gemstoneForES6;

console.log(newType, newColor, newCarat, comments);

const circle = {
    radius: 10,
    color: 'orange',
    getArea: function () {
        return Math.PI * this.radius * this.radius;
    },
    getCircumference: function () {
        return 2 * Math.PI * this.radius;
    },
};

let { radius, getArea, getCircumference } = circle;
console.log(radius, color, getArea, getCircumference);
// 10 rose [Function: getArea] [Function: getCircumference]
// Calling getArea() will return NaN. When you destructure the object and store the getArea() method into the getArea variable, it no longer has access to this in the circle object which results in an area that is NaN.

/*
 * Programming Quiz: Destructuring Arrays (1-3)
 *
 * Use destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
 */

const things = [
    'red',
    'basketball',
    'paperclip',
    'green',
    'computer',
    'earth',
    'udacity',
    'blue',
    'dogs',
];

const [one, , , two, , , , three] = things;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);
