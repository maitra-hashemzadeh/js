/*
8. Write a function to check whether all the digits in a given number are the same or not.
Example ===>
12346 = false
1111 = true
*/
function boot(str) {
     str = String(str)
    for(const i of str){
   if (str[i] === str[0]) {
    return true
   } else {
     return false
   }
}
}
let number = 4574
console.log(boot(number));
