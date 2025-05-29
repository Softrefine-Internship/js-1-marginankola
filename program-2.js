// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];



let sample =  [1, 2, [3, 4], [5, [6, 7]]];
let output = [];

function flattenArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArray(arr[i]);
    } else {
      output.push(arr[i]);
    }
  }
}

flattenArray(sample);
console.log(output);   








































