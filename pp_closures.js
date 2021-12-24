// // function makeMultipleLister(multiple) {
// //   return function() {
// //     for (let num = multiple; num < 100; num += multiple) {
// //       console.log(num);
// //     }
// //   }
// // }

// // let lister = makeMultipleLister(13);
// // lister();
// // // 13
// // // 26
// // // 39
// // // 52
// // // 65
// // // 78
// // // 91


// let total = 0;

// function add(number) {
//   return total += number;
// }
// function subtract(number) {
//   return total -= number;
// }

// add(1);
// // 1
// add(42);
// /ready.status;
// subtract(39);
// // 4
// add(6);
// // 10

function startup() {
  let status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

let ready = startup();
let systemStatus = startup;