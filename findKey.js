const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: [actual] === [expected]`);
  } else {
    console.log(`👎 Assertion Failed: [actual] !== [expected]`);
  }
};




const findKey = function (object, callback) {
  for (element in object){
    if (callback(object[element])) {
      return element;
    }
  }
}; 


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars == 2));
