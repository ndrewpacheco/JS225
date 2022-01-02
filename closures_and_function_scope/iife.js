// function countdown(num) {

//   return (function(n) {
//     for (let i = n; i >= 0; i -= 1) {
//       console.log(i);
//     }
//     console.log('Done!')
//   }(num));
// }

function countdown(num) {

  return (function recursiveCount(n) {
    console.log(n);
    if (n === 0) return console.log('Done!');
    recursiveCount(n - 1);
  }(num));
}





countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!