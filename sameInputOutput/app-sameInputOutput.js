// no side effects
// input --> output

const array = [1, 2, 3];

function mutateArray(arr) {
  arr.pop();
}

function mutateArray2(arr) {
  arr.forEach(item => {
    arr.push(1);
  });
}

// mutateArray(array);
// console.log(array); // side effects

// mutateArray2(array); // more side effects; the original array is all messed up
// console.log(array);

// How can I create a function that has no side effects?
// Create a new array

function removeLastItem(arr) {
  const newArray = [].concat(arr); // A new copy of arr is created here.
  newArray.pop();
  return newArray;
}

console.log('function applied', removeLastItem(array), 'original array', array);