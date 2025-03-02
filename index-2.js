// 🌟 Open your vscode, then try to solve the following questions there. Finally, send your javascript file considering your answers.
// 1️⃣. Write a code that capitalizes all letters of your name.
let person = "mitra";
console.log(person.toUpperCase())
// 2️⃣. Write a code that writes all the letters of your name in lowercase.
let nome = "MITRA";
console.log(nome.toLowerCase())
// 3️⃣. Write code that shows the length of your name in the output.
let surname = "Hashemzadeh";
console.log(surname.length)
// 4️⃣. Write a code that removes the empty space of a string. For example, "   hello    " should be transformed into "hello".
let welcome = "      welcome to my world     ";
console.log(welcome.trim())
// 5️⃣. Write code that stores your first name in one variable and your last name in another, then show them side by side in the console.
let firstName = "mitra";
let lastName = "hashemzadeh";
console.log(firstName+ " " +lastName)
// 6️⃣. Write a code that stores your first and last name in a variable, but only shows the last name in the console. (use string indexing with [])
let people = "mitra hashemzadeh"
console.log(people.slice(0,5))
// 7️⃣. Write a code that shows the following text as string in the console:
// "Lorem ipsum", or "lipsum" as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of "Cicero's De Finibus Bonorum et Malorum" for use in a type specimen book.
let text = '"Lorem ipsum", or "lipsum" as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of "Cicero\'s De Finibus Bonorum et Malorum" for use in a type specimen book.'
console.log(text)
// 8️⃣. There is a const variable named "abc" given to you to use for the following questions:
const abc = 'abcdefghijklmnopqrstuvwxyz'
// ● Return your name using the abc variable and string indexing with [].
const myName = abc[12]+ abc[8]+ abc[19]+ abc[17]+ abc[0];
console.log(myName)
// ● Return "APSignals" using the abc variable and string indexing with [].
const team = abc[0].toUpperCase()+ abc[15].toUpperCase()+ abc[18].toUpperCase()+ abc[8]+ abc[6]+ abc[13]+ abc[0]+ abc[11]+ abc[18]
console.log(team)
