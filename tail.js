const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: [actual] === [expected]`);
  } else {
    console.log(`👎 Assertion Failed: [actual] !== [expected]`);
  }
};

const tail = function(array) {
  console.log(array.slice(1));
};
  
// TEST CODE
tail([1,2,3,4,5,6]);