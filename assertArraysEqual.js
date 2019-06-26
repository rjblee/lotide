const eqArrays = function(array1, array2) {
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


console.log(eqArrays(["1", "2", "3"], ["1", "2", "4"]));