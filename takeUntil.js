// assertArraysEqual

const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    return `👎 Assertion Failed: [actual] !== [expected]`;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return `👎 Assertion Failed: [actual] !== [expected]`;
      } 
    }
  } 
  return `👍 Assertion Passed: [actual] === [expected]`;
}


// takeUntil

const results1 = x => x > 4;
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const results2 = x => x === ',';
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


const takeUntil = function(array, callback) {
  const newArray = [];
  for (data of array) {
     
    if (!callback(data)) {
      newArray.push(data);
    } else {
      return newArray;
    }
  }
};

console.log(takeUntil(data2, results2));