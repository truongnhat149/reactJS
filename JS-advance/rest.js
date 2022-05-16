// rest
// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }

function sum(message, ...rest) {
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    total += rest[i];
  }
  return `${message}: ${total}`;
}
console.log(sum("Tổng cộng", 4, 2, 4, 1, 2, 4, 5, 3, 10));
