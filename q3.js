/*
3. Write a function that creates an array with 10 random numbers. (The numbers must be between zero and the received number)
Example randomNumber(20) => [ 12, 7, 7, 14, 12, 7, 1, 7,  3, 11]
*/

function numbers(random){
    array = []
    for(let i = 0; i<10; i++ ){
        array.push(Math.floor(Math.random()*random))
    }return array
}

console.log(numbers(10));
