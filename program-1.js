// Write a JavaScript program to clone an array.


let arr = [1, 2, 3];
let arrCp = [];

for (let i = 0; i < arr.length; i++) {
  arrCp[i] = arr[i];
}

console.log(arrCp); 