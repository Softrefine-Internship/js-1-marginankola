// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.

function addDash(num)
{
    let str = num.toString();
    let result = '';

   for(let i = 0; i < num.length; i++)
   {
     if (num[i] % 2 === 0 && num[i + 1] % 2 === 0){
         result += str[i] + '-';
     }
     else {
         result += str[i];
        }
    }
    return result;
};


let sample = "025468";
let result = addDash(sample);
console.log(result); 



