/*
6. Write a function to compute the sum of all the digits that occur in a given string.
Example ===> abcd21hd8kl7 
2 + 1 + 8 + 7 = 18
*/

function sum (str){
let sum = 0;
for(const i of str){
     if(!isNaN(parseInt(i))){
        sum += parseInt(i);
     }
}
return sum
}
let call = "5545f54df48b54"
console.log(sum(call));
