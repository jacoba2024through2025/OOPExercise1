//https://github.com/BaseCampCoding/oop-exercise-1-jacoba2024through2025
class Person {
    constructor(fname, lname, age, state, country) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.state = state;
        this.country = country;
    }
}
const peopleArray = [
    new Person('John', 'Doe', 30, 'New York', 'USA'),
    new Person('Alice', 'Smith', 25, 'California', 'USA'),
    new Person('Eva', 'Brown', 28, 'New York', 'USA')
];
function printInfo(peopleArray) {
    console.log('Details of All People:');
    for (let person of peopleArray) {
        console.log(`First Name: ${person.fname}`);
        console.log(`Last Name: ${person.lname}`);
        console.log(`Age: ${person.age}`);
        console.log(`State: ${person.state}`)
        console.log(`Country: ${person.country}`)
        console.log('----------');
    }
}
function filterState(state, peopleArray) {
    console.log(`People from ${state}:`);
    const filteredPeople = peopleArray.filter(person => person.state === state);
    if (filteredPeople.length === 0) {
        console.log(`No people found from ${state}.`);
    } else {
        for (let person of filteredPeople) {
            console.log(`First Name: ${person.fname}`);
            console.log(`Last Name: ${person.lname}`);
            console.log(`Age: ${person.age}`);
            console.log(`State: ${person.state}`);
            console.log(`Country: ${person.country}`);
            console.log('----------');
        }
    }
}

