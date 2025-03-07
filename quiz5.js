//========================?Q-5==================================
//? Luke Skywalker has family and friends.help him remind them who is who.given a string with a name, return the relation of that person to luke.(check the example)

/*
Person         Relation
-----------------------
Darth Vadar    Father
Leia          sister 
Han           Brother in law
R2D2          droid

*/

//!Example:
// let person = "Leia";
// if (person === "Han") {
//   console.log("Brother in low");
// }

let family = "luke"
if(family === "Darth Vadar"){
    console.log( "Father");
    
}else if(family === "Leia "){
    console.log("sister");
}else if(family === "Han"){
    console.log("Brother in law");
}else if(family === "R2D2"){
    console.log(" droid");
}else{
    console.log("luke")
}
