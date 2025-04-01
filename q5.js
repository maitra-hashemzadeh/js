/* 
5. Define a function that takes an array of numbers as its parameter. The function returns an array that contains array's length, the smallest element, the largest element, and the average of all elements.
*/
function data(arr){
    let length = arr.length
    let smallest = arr[0]
    let largest = arr[0]
    let sum = 0
    for(const i of arr){
        if(largest<i){
            largest = i
        }else if (smallest>i){
            smallest = i
        } 
        sum += i
    } 
return [length, smallest, largest, sum/length]
}
let complete = [3,8,6,1]
console.log(data(complete));
