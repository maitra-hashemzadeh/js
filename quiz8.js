//?Q-6:Read these documents and write an example for each method.
//todo-1:https://www.programiz.com/javascript/library/array/includes
//todo-2:https://www.programiz.com/javascript/library/array/indexof
//todo-3:https://www.programiz.com/javascript/library/array/slice
//todo-4:https://www.programiz.com/javascript/library/array/sort

let petName = ["cat", "dog", "mouse", "rabbit", "horse", "whale", "panda"];
let pet = petName.includes("dog");
console.log(pet);
let pet2 = petName.indexOf("cat");
console.log(pet2);
// console.log(petName.indexOf("cat")); //The second solution
let copyPetName = petName.slice(2);
console.log(copyPetName);
let copyPetName2 = petName.slice()
let pet3 = copyPetName2.sort()
console.log(pet3);

