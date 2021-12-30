// function greet(greeting, name) {
//   greeting = greeting.charAt(0).toUpperCase() + greeting.slice(1);
//   console.log(greeting + ', ' + name + '!');
// }


// function partial(primary, arg1) {
//   return function(arg2) {
//     return primary(arg1, arg2);
//   };
// }

// let sayHello = partial(greet, 'Hello');
// let sayHi = partial(greet, 'Hi');

// sayHello('Brandon');
// // Hello, Brandon!
// sayHi('Sarah');
// // Hi, Sarah!

// function subtract(a, b) {
//   return a - b;
// }

// function sub5(a) {
//   // implement this function using partial function application
//   return subtract(a, 5);
// }

// sub5(10); // 5
// sub5(20); // 15

// function makePartialFunc(func, b) {
//   // implement this function...
//   return function(a) {
//     return func(a, b);
//   }
// }

// function multiply(a, b) {
//   return a * b;
// }

// let multiplyBy5 = makePartialFunc(multiply, 5);

// multiplyBy5(100); // 500


let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  // implement this function...
  return function(students) {
    return rollCall('Math', students);
  }
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan