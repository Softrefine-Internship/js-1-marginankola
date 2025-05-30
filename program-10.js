// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample input:
// arr1 = [1, 0, 2, 3, 4];
// arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]

let arr1 = [1, 0, 2, 3, 4];
let arr2 = [3, 5, 6, 7, 8, 13];

function sumArrays(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++)
    {
            if (i < arr1.length) {
                arr1[i] += arr2[i];
            } else {
                arr1.push(arr2[i]);
            }
        }
};


let result = sumArrays(arr1, arr2);
console.log(arr1); 



