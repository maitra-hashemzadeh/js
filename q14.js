/*
14. Write a function that takes a sentence as a parameter and returns the longest word of the sentence.
Example ===> "kaftar kakol be sar hay hay, in khabar az man bebar vay vay, bego be yaram nakon azaraaaam" = azaraaaam
*/
function tab(str) {
    let arr = str.split(" ");
    let big = arr[0];
    for(const i of arr){
        if(big.length < i.length ){
            big = i;
        }
    }
    return big
}
console.log(tab("kaftar kakol be sar hay hay, in khabar az man bebar vay vay, bego be yaram nakon azaraaaam"));
