/*
7. Write a function to find the number of common elements of both arrays.
Example ===> [1, 2, 3, 4], [1, 2, 3, 5] = 3
*/
function element(arr1, arr2) {
    let sum = 0
    for(const i of arr1){
        for(const j of arr2){
            if(i === j){
                sum += 1;
            }
        }
    }
    return sum
}
console.log(element([1, 2, 3, 4], [1, 2, 3, 5]));
