/*
11. Write a function to find the number of even digits in a given integer.
Example ===> 450 = 2
Example ===> 125 = 1
*/

function number(str) {
    str = String(str)
    let num = 0
    for(const i of str){
        if(parseInt(i)%2 === 0){
            num += 1
        }
    }
    return num
}
console.log(number(11));
