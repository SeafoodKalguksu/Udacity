// Family of For Loops
// The for...of loop is the most recent addition to the family of for loops in JavaScript.

// It combines the strengths of its siblings, the for loop and the for...in loop, to loop over any type of data that is iterable (meaning it follows the iterable protocol which we'll look at in lesson 3). By default, this includes the data types String, Array, Map, and Set—notably absent from this list is the Object data type (i.e. {}). Objects are not iterable, by default.

// Before we look at the for...of loop, let’s first take a quick look at the other for loops to see where they have weaknesses.

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// The for loop
for (let i = 0; i < digits.length; i++) {
    console.log(digits[i]);
}

// The for...in loop
for (const index in digits) {
    console.log(digits[index]);
}

// The for...in loop can get you into big trouble when you need to add an extra method to an array (or another object). Because for...in loops loop over all enumerable properties, this means if you add any additional properties to the array's prototype, then those properties will also appear in the loop.
Array.prototype.decimalfy = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toFixed(2);
    }
};

for (const index in digits) {
    console.log(digits[index]);
}

// NOTE: The forEach loop is another type of for loop in JavaScript. However, forEach() is actually an array method, so it can only be used exclusively with arrays. There is also no way to stop or break a forEach loop. If you need that type of behavior in your loop, you’ll have to use a basic for loop

// For...of loop
// The for...of loop is used to loop over any type of data that is iterable.

// You write a for...of loop almost exactly like you would write a for...in loop, except you swap out in with of and you can drop the index.
for (const digit of digits) {
    console.log(digit);
}

// But wait, there’s more! The for...of loop also has some additional benefits that fix the weaknesses of the for and for...in loops.

// You can stop or break a for...of loop at anytime. And you don’t have to worry about adding new properties to objects. The for...of loop will only loop over the values in the object.
for (const digit of digits) {
    if (digit % 2 === 0) {
        continue;
    }
    console.log(digit);
}

/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */
const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
];

// your code goes here
for (const day of days) {
    let upperDay = day.charAt(0).toUpperCase() + day.slice(1);
    console.log(upperDay);
}
