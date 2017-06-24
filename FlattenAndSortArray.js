// Challenge: Flatten and sort an array
//
// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
// 
// Example:
// 
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

function flattenAndSort(array) {
  
  var newArray = [];
  
  for (i=0; i<array.length; i++) {
    for (j=0; j<array[i].length; j++) {
      newArray.push(array[i][j]);
    }
  }
  
  newArray.sort(function(a, b) {
    return a - b;
  });

  return newArray;
}
