/*
12. Write a function to get the largest even number from an array of integers.
Example ===> [20, 40, 200, 301] = 200
*/

function even(num) {
    let largest = num[0]
    for(let i = 0; i< num.length; i++ ){
        if(largest < num[i] && num[i] % 2 === 0){
largest = num[i]
        }
    }return largest
}
console.log(even([20, 40, 200, 301]));
