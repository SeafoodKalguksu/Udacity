// Rest parameter
// The rest parameter, also written with three consecutive dots ( ... ), allows you to represent an indefinite number of elements as an array.

const order = [20.17, 18.67, 1.5, 'cheese', 'eggs', 'milk', 'bread'];
const [total, subtotal, tax, ...items] = order;

console.log(total, subtotal, tax, items);
// Prints: 20.17 18.67 1.5 ['cheese', 'eggs', 'milk', 'bread']
console.log(...items);
// Prints: cheese eggs milk bread
console.log(items);
// Prints: [ 'cheese', 'eggs', 'milk', 'bread' ]

// ...Rest Parameter
function printPackage1(...items) {
    // ...items: (2) [Array(4)], 'item B'
    for (const item of items) {
        // item: (4) [ 'cheese', 'eggs', 'milk', 'bread' ]
        // item: 'item B'
        console.log(item);
    }
}
printPackage1(items, 'item B');

function printPackage2(items) {
    // items: (4)[('cheese', 'eggs', 'milk', 'bread')];
    for (const item of items) {
        // item: 'cheese';
        console.log(item);
    }
}
printPackage2(items);

// Taking the first argument only
function printPackage3(items) {
    // items: 'cheese'
    for (const item of items) {
        // item: 'c'
        console.log(item);
    }
}

// Spread operator
printPackage3(...items); // arguments: 'cheese', 'eggs', 'milk', 'bread'

// Using the arguments object
// In previous versions of JavaScript, this type of function would be handled using the arguments object. The arguments object is an array-like object that is available as a local variable inside all functions. It contains a value for each argument being passed to the function starting at 0 for the first argument, 1 for the second argument, and so on.

// Issues:
// 1. Where are the parameters in the sumByRestParameter()?
// 2. Where the arguments object is coming from?
function sumByArgumentsObject() {
    let total = 0;
    for (const argument of arguments) {
        total += argument;
    }
    return total;
}

// Using the rest parameter
// Fortunately, with the addition of the rest parameter, you can rewrite the sumByRestParameter() function to read more clearly.
function sumByRestParameter(...nums) {
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    return total;
}

/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */
function average(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum / numbers.length;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
