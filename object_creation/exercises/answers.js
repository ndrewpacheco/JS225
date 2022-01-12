// // ancestors


// Object.prototype.ancestors = function ancestors() {
//   const ancestor = Object.getPrototypeOf(this);

//   if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
//     return [ancestor.name].concat(ancestor.ancestors());
//   }

//   return ['Object.prototype'];
// };












// // delegate
// function delegate(context, methodName, ...args) {
//   return () => context[methodName].apply(context, args);
// }

/*
Discussion
The main challenge of this exercise is maintaining the reference to the function and its context. Our solution handles this by using the concept of closures so that we can return, and consequently assign to a method, a function that maintains a reference to the context object. Using the context and the method name, the solution then uses Function.prototype.apply to execute the method on the context object.
*/













// classical obj creation

// function Person(firstName, lastName, age, gender) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
// }

// Person.prototype.fullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

// Person.prototype.communicate = () => {
//   console.log('Communicating');
// };

// Person.prototype.eat = () => {
//   console.log('Eating');
// };

// Person.prototype.sleep = () => {
//   console.log('Sleeping');
// };

// function Doctor(firstName, lastName, age, gender, specialization) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.specialization = specialization;
// }

// Doctor.prototype = Object.create(Person.prototype);
// Doctor.prototype.diagnose = () => {
//   console.log('Diagnosing');
// };
// Doctor.prototype.constructor = Doctor;

// function Professor(firstName, lastName, age, gender, subject) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.subject = subject;
// }

// Professor.prototype = Object.create(Person.prototype);
// Professor.prototype.teach = () => {
//   console.log('Teaching');
// };
// Professor.prototype.constructor = Professor;

// function Student(firstName, lastName, age, gender, degree) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.degree = degree;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.study = () => {
//   console.log('Studying');
// };
// Student.prototype.constructor = Student;

// function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
//   Student.call(this, firstName, lastName, age, gender, degree);
//   this.graduateDegree = graduateDegree;
// }

// GraduateStudent.prototype = Object.create(Student.prototype);
// GraduateStudent.prototype.research = () => {
//   console.log('Researching');
// };
// GraduateStudent.prototype.constructor = GraduateStudent;


// Discussion
// The solution is a bit long, but it's not complicated. The points to note are the following:

// Use of Function.prototype.call to have the subclass "inherit" properties from the parent class.
// Use of Function.prototype = Object.create(obj) to "inherit" methods from the parent class.
// Use of Function.prototype.constructor to manually reset the property to point back to the appropriate constructor.
// Further Exploration
// Refactor the solution to use ES6 class syntax.

// Solution
// Copy Code
// class Person {
//   constructor(firstName, lastName, age, gender) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//   }

//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   communicate() {
//     console.log('Communicating');
//   }

//   eat() {
//     console.log('Eating');
//   }

//   sleep() {
//     console.log('Sleeping');
//   }
// }

// class Doctor extends Person {
//   constructor(firstName, lastName, age, gender, specialization) {
//     super(firstName, lastName, age, gender);
//     this.specialization = specialization;
//   }

//   diagnose() {
//     console.log('Diagnosing');
//   }
// }

// class Professor extends Person {
//   constructor(firstName, lastName, age, gender, subject) {
//     super(firstName, lastName, age, gender);
//     this.subject = subject;
//   }

//   teach() {
//     console.log('Teaching');
//   }
// }

// class Student extends Person {
//   constructor(firstName, lastName, age, gender, degree) {
//     super(firstName, lastName, age, gender);
//     this.degree = degree;
//   }

//   study() {
//     console.log('Studying');
//   }
// }

// class GraduateStudent extends Student {
//   constructor(firstName, lastName, age, gender, degree, graduateDegree) {
//     super(firstName, lastName, age, gender, degree);
//     this.graduateDegree = graduateDegree;
//   }

//   research() {
//     console.log('Researching');
//   }
// }


















