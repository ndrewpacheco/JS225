// Solution
// Copy Code
// let Account = (function() {
//   let userEmail;
//   let userPassword;
//   let userFirstName;
//   let userLastName;

//   function isValidPassword(testPassword) {
//     return userPassword === testPassword;
//   }

//   function getRandomLetterNumber() {
//     let randomIndex = Math.floor(Math.random() * 62);
//     return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890'[randomIndex];
//   }

//   function anonymize() {
//     let result = '';

//     for (let i = 0; i < 16; i += 1) {
//       result += getRandomLetterNumber();
//     }

//     return result;
//   }

//   return {
//     init: function(email, password, firstName, lastName) {
//       userEmail = email;
//       userPassword = password;
//       userFirstName = firstName;
//       userLastName = lastName;
//       this.displayName = anonymize();
//       return this;
//     },

//     reanonymize: function(password) {
//       if (isValidPassword(password)) {
//         this.displayName = anonymize();
//         return true
//       } else {
//         return 'Invalid Password';
//       }
//     },

//     resetPassword: function(currentPassword, newPassword) {
//       if (isValidPassword(currentPassword)) {
//         userPassword = newPassword;
//         return true;
//       } else {
//         return 'Invalid Password';
//       }
//     },

//     firstName: function(password) {
//       if (isValidPassword(password)) {
//         return userFirstName;
//       } else {
//         return 'Invalid Password';
//       }
//     },

//     lastName: function(password) {
//       if (isValidPassword(password)) {
//         return userLastName;
//       } else {
//         return 'Invalid Password';
//       }
//     },

//     email: function(password) {
//       if (isValidPassword(password)) {
//         return userEmail;
//       } else {
//         return 'Invalid Password';
//       }
//     },
//   };
// })();
// Discussion
// The key part of this solution is the use of an IIFE to create a private scope that is only accessible to the object returned when executing Object.create(Account).

// Further Exploration
// This solution works but it only works for one set of private data. Here's an extended version of the example run:

// Copy Code
// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// let displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false

// let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.email('abc'));                  // logs 'Invalid Password'
// Modify the solution so that it can accommodate creating multiple objects with their own private data.