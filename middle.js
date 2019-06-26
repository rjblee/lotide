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


const middle = function(array) {
  if (array.length % 2 === 0) {
    const midIndex = array.length/2;
    return array[midIndex -1] + ", " + array[midIndex];
  } else {
    const midIndex = Math.floor(array.length/2);
    return array[midIndex];
  }
}

console.log(middle([1, 2, 3, 4, 5, 6]));