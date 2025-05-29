// Write javascript program to remove duplicate objects from an array.

// Sample Input:
// array = [
//  { title: "C++", author: "Bjarne" },
//  { title: "Java", author: "James" },
//  { title: "Python", author: "Guido" },
//  { title: "Java", author: "James" },
// ];

// Expected Output:
// [
//  { title: 'C++', author: 'Bjarne' },
//  { title: 'Java', author: 'James' },
//  { title: 'Python', author: 'Guido' }
// ]



function duplicateRemover(arr) {
    let opArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        let duplicate = false;
        
        for (let j = 0; j < opArray.length; j++) {
            if (
                arr[i].title === opArray[j].title &&
                arr[i].author === opArray[j].author
            ) {
                duplicate = true;
                break; 
            }
        }
        
        if (!duplicate) {
            opArray.push(arr[i]);
        }
    }
    
    return opArray;
}


let sample = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];

let result = duplicateRemover(sample);
console.log(result);
