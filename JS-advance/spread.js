function sum(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i];

    }
    return total;
}

// spread

let numbers_1 = [1,2,3,4,5,6,7,8,9,10];

console.log(sum(...numbers_1));


let staff_1 = {
    fullname: 'truong',
    gender: true
}

let staff_2 = {
    email: 'truong@gmail.com',
    phone: '123'
}
let staff_3 = {
    ...staff_1,
    avatar: 'link avatar'
}
console.log(staff_3);