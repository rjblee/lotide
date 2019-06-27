const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: [actual] === [expected]`);
  } else {
    console.log(`👎 Assertion Failed: [actual] !== [expected]`);
  }
};

const countLetters = function(word) {
  const noSpaces = word.split(" ").join("");

  const lettersCount = {};

  for (characters of noSpaces) {
   
    if (lettersCount[characters]) {
      lettersCount[characters]++;
    } else {
      lettersCount[characters] = 1;
    }
  }
  return lettersCount;
}


console.log(countLetters("i want to go out"));
