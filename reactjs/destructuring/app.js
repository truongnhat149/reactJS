//  desctructuring là sự phá hủy
// nó sẽ phá hủy dấu ngoặc [] hoặc {} và biến về thành
// 1 tham số

// var array = ['Javascript', 'PHP', 'Ruby'];

// var a = array[0];
// var b = array[1];
// var c = array[2];

// var [a, b, c] = array;

// var [a, b, ] = array;
// console.log(a, b);

// dùng rest parameter

// var [a, ...rest] = array;
// console.log(a);
// console.log(rest);

var person = {
    name: 'Ngoc Trinh',
    age : 22,
    measure: '89-50-91',
    address: 'HCM',
    children: {
        name: 'Be Bi'
    }
}

// var {name, age , measure} = person;
// rest params
// var {name, ...rest} = person;

var {name:datTenMe , children: {name: datTenCon}} = person;
console.log(datTenCon);


