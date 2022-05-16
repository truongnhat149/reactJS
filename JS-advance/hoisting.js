// khai báo biến bằng từ khóa var (js)
// let const -> ESMA Script
// declarations function


// scope 
// global scope
// local scope (block code)
// function
// hoisting : là khái niệm cho phép ta khai báo biến và hàm lên trên đầu phạm vi của chúng trước khi thực thi đoạn code

var i;
for (i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i outsite for', i);