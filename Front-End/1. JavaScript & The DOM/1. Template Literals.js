const student = {
    name: 'Richard Kalehoff',
    guardian: 'Mr. Kalehoff',
};

const teacher = {
    name: 'Mrs. Wilson',
    room: 'N231',
};

// Prior to ES6, the old way to concatenate strings together was by
// using the string concatenation operator ( + ).
let messageForES5 =
    student.name +
    ' please see ' +
    teacher.name +
    ' in ' +
    teacher.room +
    ' to pick up your report card.';

// This works alright, but it gets more complicated when you need to build
// multi-line strings.
let noteForES5 =
    teacher.name +
    ',\n\n' +
    'Please excuse ' +
    student.name +
    '.\n' +
    'He is recovering from the flu.\n\n' +
    'Thank you,\n' +
    student.guardian;

// However, that’s changed with the introduction of template literals.
// By using template literals, you can drop the quotes along with
// the string concatenation operator. Also, you can reference
// the object's properties inside expressions.
let messageForES6 = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;

let noteForES6 = `${teacher.name},

    Please excuse ${student.name}.
    He is recovering from the flu.
    
    Thank you,
    ${student.guardian}`;

/*
 * Programming Quiz: Build an HTML Fragment (1-2)
 */

const cheetah = {
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    lifespan: '10-12 years',
    speed: '68-75 mph',
    diet: 'carnivore',
    summary:
        'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
    fact:
        'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.',
};

// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
    const cardHTML = `<div class="card">
        <h3 class="name">${animal.name}</h3>
        <img src="${animal.name}.jpg alt="${animal.name}" class="picture">
        <div class="description">
            <p class="fact">${animal.fact}</p>
            <ul class="details">
                <li><span class="bold">Scientific Name</span>: ${animal.scientificName}</li>
                <li><span class="bold">Average Lifespan</span>: ${animal.lifespan}</li>
                <li><span class="bold">Average Speed</span>: ${animal.speed}</li>
                <li><span class="bold">Diet</span>: ${animal.diet}</li>
            </ul>
            <p class="brief">'${animal.summary}'</p>'
        </div>
    </div>`;

    return cardHTML;
}

console.log(createAnimalTradingCardHTML(cheetah));
