/*

1.Write a function that returns the number of vowels in a string.
vowels => a e i o u
Example ===> "Hello" = 2
*/

function vowels(gum) {
  let vowels = "aeiouAEIOU"
  let map = 0
  for(let i = 0; i<vowels.length; i++){
    if(vowels.includes(gum[i]))
      map++
  }
return map
}

console.log(vowels("mitra"));


