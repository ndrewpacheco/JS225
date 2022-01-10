// function shallowCopy(object) {
//     let newObj = Object.getPrototypeOf(object);
//     Object.getOwnPropertyNames(object).forEach(prop => {
//         newObj[prop] = object[prop];
//     });

//     return newObj;
//   }

//   let foo = {
//     a: 1,
//     b: 2,
//   };

//   let bar = Object.create(foo);
//   bar.c = 3;
//   bar.say = function() {
//     console.log('c is ' + this.c);
//   };

//   let baz = shallowCopy(bar);

//   console.log(baz);

//   console.log(baz.a);       // => 1
//   baz.say();                // => c is 3
//   baz.hasOwnProperty('a');  // false
//   baz.hasOwnProperty('b');  // false
function extend(destination, ...objs) {
  // ...
  objs.forEach(obj => {
    let prop;
    for (prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        destination[prop] = obj[prop];
      }
      
    }
  });
  return destination;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object);
console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe