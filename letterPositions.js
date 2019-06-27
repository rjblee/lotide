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


const letterPositions = function(sentence) {
  const results = {};
  const newSentence = sentence.split(" ").join("");
  let i = 0;
  
  for (characters of newSentence) {
    if (results[characters]) {
      results[characters].push(i); 
    } else {
      results[characters] = [i];
    }
    i++;
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));