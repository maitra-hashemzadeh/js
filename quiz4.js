//?Q-2:-Sort the following array once ascending and once descending, and show two new arrays.
// Please use variables given to you and Do Not change the name of them!!
const numbers = [10, 50, -8, 3, 0, 100, 70];
const copyNumbers= numbers.slice()
let ascendingNumbers = copyNumbers.sort(function(a,b){
    return a-b
});
 const copyNumber= numbers.slice()
let descendingNumbers = copyNumber.sort(function(a,b){
    return b-a
});;
console.log(ascendingNumbers);
console.log(descendingNumbers);
