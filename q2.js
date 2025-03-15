// ? Question-2:write a function to find the biggest number in this  array and push it to a new array
const findBigNumber = [5, 2, -10, 50, 35];

// !Answer:
function findBiggestNumber(num) {
  let max = num[0];
  for (let index = 0; index < findBigNumber.length; index++) {
    if (num[index] > max) {
      max = num[index];
    }
  }
  return [max];
}
console.log(findBiggestNumber(findBigNumber));
