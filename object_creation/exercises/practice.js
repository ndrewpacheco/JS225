function delegate(context, methodName, ...args) {
  return () => context[methodName].apply(context, args);
}

const foo = {
  name: 'test',
  bar(greeting) {
    console.log(`${greeting} ${this.name}`);
  },
};

const baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

// console.log(baz.qux());
console.log(foo.qux);
baz.qux();   // logs 'hello test';

foo.bar = () => { console.log('changed'); };

baz.qux();          // logs 'changed'