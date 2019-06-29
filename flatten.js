
const flatten = function (array) {
  const flatArray = [];
  for (element of array) {
    if (Array.isArray(element)) {
      for (elem of element) {
        flatArray.push(elem);
      }
      
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));