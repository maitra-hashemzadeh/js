//?:Write two functions:
//todo-1: one to calculate the area of a circle
//todo-2:and another to calculate the circumference.
//hint: (area = r*r*pi, circumference = 2*r*pi)
//example: area(3) = 28.27, 		circumference(3) = 18.85


function calculateCircleArea(number){
    let numbers = Math.PI
    return number*number*numbers
} 
 
function calculateCircleCircumference(num){
let score = Math.PI;
return 2*num*score
} 

let number = 5
let num = 4
console.log("area", calculateCircleArea(number));
console.log("circumference", calculateCircleCircumference(num));
