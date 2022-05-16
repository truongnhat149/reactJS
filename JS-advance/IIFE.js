// iife = Immediately Invoked function expression
// 1 function được khai báo ra và lập tức chạy

function sum(n1, n2) {
    console.log(n1 + n2);
}

sum(6,7);

(function (n2,n1) {
    console.log(n2 + n1);
})(1,2)