function objectsEqual(obj1, obj2) {
  let result = true;
  Object.keys(obj1).forEach(prop => {

    if (obj1[prop] !== obj2[prop]) {
      result = false;
    }
  });

  Object.keys(obj2).forEach(prop => {

    if (obj1[prop] !== obj2[prop]) {
      result = false;
    }
  });
  return result;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

// 358