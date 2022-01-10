let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object
let ninjaB = (function() {
  return new (ninjaA.constructor)();
})();

console.log(ninjaA);    // should log true
console.log(ninjaB.constructor === ninjaA.constructor);    // should log true