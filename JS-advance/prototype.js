// cho phép ta định nghĩa 1 hàm khi mà hàm đó không có

Array.prototype.sum = function () {
    let total = 0;
    for (let i = 0; i < this.length; i++) {
        total += this[i];
    }
    return total;
}

let numbers = [1,2,3,4,5,6,7,8,9];

export default sum;
console.log(numbers.sum());;