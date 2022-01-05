let prot = {};

let foo = Object.create(prot);

Object.getPrototypeOf(foo) === prot;

foo.isPrototypeOf(prot);

