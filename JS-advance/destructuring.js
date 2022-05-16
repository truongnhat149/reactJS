let numbers = [1, 2,3,4,5,6,7,8,9];

let [n1, n2, n3, n4, n5, n6, n7, n8, n9] = numbers;

console.log(n1, n2, n3, n4, n5, n6, n7, n8, n9);

let truong = {
    age : 18,
    gender: true,
    mail: 'truong@gmail.com',
    greeting : function () {
         return `Hello`
        }
}

let {gender, mail, greeting} = truong;

console.log(gender);

function sum(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i]
    }
    return { length: rest.length, total: total };
}

let { ...spreadz } = sum(4,5,6,7,8,9,10,11,12,13,14);

console.log(spreadz.total);
console.log(spreadz.length);