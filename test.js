function newPerson(name) {
  let obj = Object.create(null);
  obj.log = function() {console.log(name)};
  Object.defineProperties(obj, {
    log: {
      writable: false,
    },
  });
  return obj;
}

let me = newPerson('Shane Riley');
me.log();     // => Shane Riley
me.log = function() { console.log('Amanda Rose'); };
me.log();     // => Shane Riley