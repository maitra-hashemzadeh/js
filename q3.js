// ? Question-3:write a function to remove all the items which are number from the array and return the array
const notNumberArray = ["1", 1, "100", 100, "-9", 2, 96, -22, "", true, null]; // => ['1','100', '-9', '', true, null]

// !Answer:
function removeNumbers(arr) {
    let result= [];
    for (let i = 0; i < arr.length ; i++){
        if(typeof arr[i] !== "number"){
       result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeNumbers(notNumberArray));
