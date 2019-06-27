const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: [actual] === [expected]`);
  } else {
    console.log(`👎 Assertion Failed: [actual] !== [expected]`);
  }
};


const findKeyByValue = function (object, value) {

  for (let key of Object.keys(object)) {
    if (object[key] === value) {
      console.log(key);
    }
  }
};



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));