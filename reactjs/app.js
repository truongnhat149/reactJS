// Arrow function

// const sum = (a, b) => {
//     return a + b;
// }
// console.log(sum(2,4));


// const sum = (a, b) =>  a + b;
// console.log(sum(4,4));


// const sum = (a, b) => {
//     return {
//         a: a,
//         b: b
//     }
// };
// console.log(sum(5, 7));


// const sum = (a, b) => ({a: a,b: b});
// console.log(sum(5, 7));


// const logger = (log) => console.log(log);
// const logger = log => console.log(log);
// logger("Hoc ReactJS");


// const person = {
//     name: 'Le Phung Nhat Truong',
//     getName: function() {
//         return this.name;
//     }
// };
// console.log(person.getName());


// const person = {
//     name: 'Le Phung Nhat Truong',
//     getName: () => {
//         return this.name; // context
//     }
// };
// console.log(person.getName());

// syntax : name (paramater) => {};

// const Person = function(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const jPerson = new Person('Truong', '24');
// console.log(jPerson);