// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]

function mergeRevome(arr1, arr2) {
    let mergedArray = [...arr1, ...arr2];
    let uniqueArray = [];

    for (let i = 0; i < mergedArray.length; i++) {
        if (!uniqueArray.includes(mergedArray[i])) {
            uniqueArray.push(mergedArray[i]);
        }
    }

    return uniqueArray.sort((a, b) => a - b);
}
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [3, 4, 5, 7];
console.log(`Merged array: ${mergeRevome(arr1, arr2)}`);
 
