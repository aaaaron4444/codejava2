//concat combining 2 arrays

function combineArrays(array1, array2) {
    return array1.concat(array2);
  }
  
  var array1 = [1, 2, 3];
  var array2 = [4, 5, 6];
  
  var combinedArray = combineArrays(array1, array2);
  console.log(combinedArray); // Output will be [1, 2, 3, 4, 5, 6]

  
//duplicate

const array = [1,2,2,2,3,3,4,5,5];
const uniqueElements = new Set();
const duplicates = [];

array.forEach(item => {
  if (uniqueElements.has(item)) {
    duplicates.push(item);
  } else {
    uniqueElements.add(item);
  }
});

console.log(duplicates)


// Function to find the difference of two arrays
function differenceOf2Arrays(array1, array2) {
    // Temporary array to store the differences
    var temp = [];
 
    // Iterate through each element in array1
    for (var i in array1) {
      // If the element is not found in array2, add it to the temp array
      if (array2.indexOf(array1[i]) === -1)
        temp.push(array1[i]);
    }
  
    // Iterate through each element in array2
    for (i in array2) {
      // If the element is not found in array1, add it to the temp array
      if (array1.indexOf(array2[i]) === -1)
        temp.push(array2[i]);
    }
  
    // Return the temp array sorted in ascending order
    return temp.sort((a, b) => a - b);
  }
  
  // Output the result of the differenceOf2Arrays function with sample arrays
  console.log(differenceOf2Arrays([1,2,3,4,5], [3,4,5,6,7]));
  