// eqObjects
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (key of Object.keys(object1)) {
      if(Array.isArray(object1[key])) {
        return eqArrays(object1[key], object2[key]);
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return true;
}


//assertObjectsEqual
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  console.log(`Example label: ${inspect(actual)}`);
  console.log((actual === expected) ? 
    `✅✅✅  Assertion Passed: ${actual}  ===  ${expected}` :
    `🛑🛑🛑  Assertion Failed: ${actual}`
  );
};

console.log(assertObjectsEqual(eqObjects({ a: '1', b: 2 }, { b: 2, a: '1' })));