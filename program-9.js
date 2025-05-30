// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")

let frequency = {};
    let max = 0;
    let mostFrequent;
let sample = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function frequent (arr){
    for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    frequency[item] = (frequency[item] || 0) + 1;

    if (frequency[item] > max) {
        max = frequency[item];
        mostFrequent = item;
    }
}
}

frequent(sample);
console.log(`${mostFrequent} "${max} times"`);


