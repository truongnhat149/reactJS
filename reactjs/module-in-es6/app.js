// import logger, {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } 
// from "./logger.js";

// logger('Test message', TYPE_ERROR);


// Enhadced Object Literals
// Định nghĩa key : value cho object

// cách 1
// var name = 'Le phung nhat truong';
// var age = 24;

// var person = {
//     name: name,
//     age: age
// };
// console.log(person);

// cách 2:
// var name = 'Le phung nhat truong';
// var age = 26;

// var person = {
//     name,
//     age
// };
// console.log(person);


// 2. định nghĩa method

// var name = 'Le phung nhat truong';
// var age = 24;

// var person = {
    
//     age,
//     getName: function() {
//         return name;
// }
// };
// console.log(person.getName());

// var name = 'Le phung nhat truong 24';
// var age = 24;

// var person = {
    
//     age,
//     getName() {
//         return name;
// }
// };
// console.log(person.getName());



// 3. định nghĩa key object dưới dạng biến
var fieldName = 'name';
var fieldPrice = 'price';
var handler = 'PPP';

const product = {
    [fieldName] : 'May giat',
    [handler] : 'XCA',
    [fieldPrice] : 1232
};

console.log(product);