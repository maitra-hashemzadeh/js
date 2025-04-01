/*
10. Write a function to remove all characters from a given string that appear more than once.
Example ===> "abcdabc" = d
*/
function move(array) {
    let num = null
    let str = ""
  for (const i of array) {
    num = 0
    for (const j of array) { 
        if(i === j){
            num += 1
        }
    } if( num <= 1){
        str += i
    }
  } return str
}
console.log(move("hamdam"));
