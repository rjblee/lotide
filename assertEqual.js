const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("👍 Assertion Passed: [actual] === [expected]");
  } else {
    console.log("👎 Assertion Failed: [actual] !== [expected]");
  }
};

// TEST CODE
assertEqual("Bootcamps", "Bootcamp");
assertEqual(1, 1);