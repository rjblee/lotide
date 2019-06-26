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


const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      } 
    }
  } 
  return true;
}


const without = function(array1, array2) {
  let newArray = array1.slice(0);
  for (let i = 0; i < newArray.length; i++) {
    if (array2.includes(newArray[i])) {
      newArray.splice(i, 1);
    }
  }
  return newArray;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));