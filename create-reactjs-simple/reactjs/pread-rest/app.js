// Rest Parameter

// var array1 = ['javascript', 'PHP', 'ruby'];
// var array2 = ['ReactJS', 'angular'];
// var array3 = [...array1, ...array2];
// var array4 = [...array2, ...array1];
// console.log(array3);
// console.log(array4);

// function logger(...Parameter) {
//     console.log(Parameter);
// }

// logger(1,12,3,4,5,6);

// function logger(a, b ,...params) {
//     console.log(a,b,     params);
// }

// logger(1,2,3,4,5);

// function logger({
//     name,
//     price,
//     ...rest
// }) {
//     console.log(name);
//     console.log(price);
//     console.log(rest);
// }

// logger({
//     name: 'Javascript',
//     price: 123,
//     description: 'Description content'
// });


// var obj1 = {
//     name: 'java'
// };

// var obj2 = {
//     price: 1000
// };

// var obj3 = {
//     ...obj1,
//     ...obj2
// };

// console.log(obj3);



// var defaultConfig = {
//     api: 'http://nt-1409',
//     apiVersion: 'v1',
//     other: 'other',
//     vat: 'vatt' 
// };


// var exerciseConfig = {
//     ...defaultConfig,
//     api: 'http://lpnt-1409',
//     other: 'khong co gi'
// }

// console.log(defaultConfig);
// console.log(exerciseConfig);


var array = ['Javascript', 'PHP', 'Ruby'];
function logger(a, b, c) {
    console.log(a, b, c);
}

// spread nói đến việc truyền đối số thêm ...
logger(...array);

// rest thao tác trên parameter. truyền ở tham số