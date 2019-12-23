const validator = require("validator");

const getNotes = require("./notes");
const notes = getNotes();
console.log(notes);

// const fs = require("fs");
// fs.writeFileSync("notes.txt", "Created by Nodejs.");

// Challenge: Append a message to notes.txt

// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check the generated text file if the message has been appended

// try {
//   fs.appendFileSync(
//     "notes.txt",
//     " My name is Benedict and I just want to append this."
//   );
//   console.log("notes.txt updated");
// } catch (err) {
//   console.log("error: ", err);
// }

// const add = require("./utils");
// const sum = add(4, 2);
// console.log(sum);

// Challenge 2: Define and use a function in a new file

// 1. Create a new file called roles.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing the message to the console

// const getNotes = require("./notes");
// const notes = getNotes();
// console.log(notes);
