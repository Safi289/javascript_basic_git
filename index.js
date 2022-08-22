// // This is my first javascript code
// console.log('hello world')

// variables
// let name = 'Safi';
// console.log(name);

// let firstName = 'Safi';
// let lastName = 'Sahid';

// constants
// const interestRate = 0.3;
// console.log(interestRate);

// primitive types
// let name = 'safi'; // string
// let age = 25; //number
// let isApproved = true; //boolean
// let firstName = undefined;
// let selectedColor = null;

// dynamic typing 

// let name = 'safi'; // string
// let age = 25; //number
// let isApproved = true; //boolean
// let firstName = undefined;
// let selectedColor = null;

// object
// let name = 'safi';
// let age = 25; 

// let person = {
//     name: 'Safi',
//     age: 25
// };
// // dot notation
// person.name = 'Sahid';

// //bracket notation
// person['name'] = 'Nur';
// let selection = 'name';
// person[selection] = 'Ahmed'

// console.log(person);
// console.log(person.name);

// arrays
// let selectedCoors = ['red', 'blue'];
// // selectedCoors[2] = 'green';
// selectedCoors[2] = 1;
// console.log(selectedCoors);
// console.log(selectedCoors.length);
// // console.log(selectedCoors[0]);


// functions

// function greet() {
//    console.log('hello world'); 
// }
// greet();

// function greet(name, lastName) {
//     console.log('hello ' + name + ' ' + lastName)
// }
// greet('safi', 'nur');
// greet('sahid', 'nur');


// types of function

//calculating a value
// function square(number){
//     return number * number;
// }
// let number = square(2);
// console.log(number);
// console.log(square(3));

// strings
//string primitive
// const message = ' hi! this is my \'first\n message ';
// console.log(message.indexOf('my'));
// console.log(message.includes('my'));
// console.log(message.startsWith('hi'));
// console.log(message.endsWith('message'));
// console.log(message.replace('message', 'mail'));
// console.log(message.toLocaleUpperCase());
// console.log(message.toLocaleLowerCase());
// console.log(message.trim());
// console.log(message.split(' '));

// //string object
// const another = new String('hi');

// if else
// let hour = 10;

// if(hour >= 6 &&  hour < 12) {
//     console.log('Good Morning');
// }
// else if(hour >= 12 && hour < 18) {
//     console.log('Good Afternoon');
// }
// else
//     console.log('Good evening');

//loops
// for (let i = 0; i < 5; i++){
//     console.log('Hello world', i);
// }

// for (let i = 1; i <= 5; i++){
//     if(i % 2 !== 0)
//         console.log(i);
// }

// for (let i = 5; i >= 1; i--){
//     if(i % 2 !== 0)
//         console.log(i);
// }

//factory function
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('draw');
//     }
// };

// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('safi');
//         }
//     };
// }

// const circle1 = createCircle(1);
// console.log(circle1);

//constructor functions
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('safi');
//     }
// }

// const circle = new Circle(1);

//getters and setters

const person = {
    firstName: 'Safi',
    lastName: 'Sahid',
    // fullName: function() {},
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

person.fullName = 'Kamal Hasan'

console.log(person);
