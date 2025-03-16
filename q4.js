// ? Question-4:Consider the array that you created from the previous question (Q-3) and write a function to calculate the sum of all its numbers.
// todo1: Consider the array that you created from the previous question (Q-3)
// todo2: write a function that first convert array of string to array of number (hint: use parseInt())
// todo3: remove all the items that are NaN: (hint: use isNaN())
// todo4: calculate the sum of all its numbers
// !Answer:
let arr = ["1", 1, "100", 100, "-9", 2, 96, -22, "", true, null];

function SumNumbers(arr) {
  let numbers = [];
  let i = 0;

  while (i < arr.length) {
    let num = parseInt(arr[i]);
    if (!isNaN(num)) {
      numbers.push(num);
    }
    i++;
  }

  let sum = 0;
  let j = 0;
  while (j < numbers.length) {
    sum += numbers[j];
    j++;
  }

  return sum;
}

console.log(SumNumbers(arr));
