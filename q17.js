/*
17. Write a function to test whether an array of integers of length 2 does not contain 4 or 6.
Example ===>
[3, 2] = true
[6, 1] = false
*/
function names(arr){
    if(arr.includes(4) || arr.includes(6)){
        return false
    } else {
        return true
    }
}
console.log(names([8,4]))