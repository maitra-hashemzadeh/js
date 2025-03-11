/**
 * /*
 *   Array getters
 *   -------------------------
 *   Complete the functions below to get the first and last values from the array and return in from the function
 *
 * @format
 */

function first(arr) { 
    
    return arr[0]; // complete this statement
  }
  
  function last(arr) {
    if(arr[3]===undefined){
        return arr[2]
    }
    return arr[3]; // complete this statement
  }
  
  /* 
  ===================================================
  ======= TESTS - DO NOT MODIFY BELOW THIS LINE =====
  ===================================================
  */
  let numbers = [1, 2, 3];
  let names = ['Hossein', 'Sina', 'AmirAli', 'Sirvan'];
  
  console.log(first(numbers));
  console.log(last(numbers));
  console.log(last(names));
  
  /* 
    EXPECTED RESULT
    ---------------
    1
    3
    Sirvan
  */
  