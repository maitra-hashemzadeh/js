/*
16. Write a function that takes two arguments, then puts the multiples of the first number up to the second number in an array.
Example ===> (2, 11) = [2, 4, 6, 8, 10]
Example ===> (3, 16) = [3, 6, 9, 12, 15]
*/

function multiples(num1, num2) {
    let array = []
    for(let i = num1; i<= num2; i+=num1){
        array.push((i));
    }
    return array
}
console.log(multiples(2, 11));
