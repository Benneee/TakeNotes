const yargs = require("yargs");
const chalk = require("chalk");
const fs = require("fs");

const log = console.log;

// Customize yargs version
yargs.version("1.1.0");

// We will need our notes app to be able to do the following: add, remove, read, list
// Set up commands

// Create add command
yargs.command({
  command: "add",
  describe: "Add new notes",
  handler: function() {
    log("Adding new note...");
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    log("Removing the note");
  }
});

// Create read command
yargs.command({
  command: "read",
  describe: "Display single note details",
  handler: function() {
    log("Displayng note details...");
  }
});

// Create list command
yargs.command({
  command: "list",
  describe: "Display all notes",
  handler: function() {
    log("Displaying all notes...");
  }
});

log(yargs.argv);

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

// const getNotes = require("./notes");
// const notes = getNotes();
// console.log(notes);

// Challenge: Use the chalk library in your project

// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success" to the console in green
// 4. Test your work

// const chalk = require("chalk");

// log(chalk.green("Success"));
// log(chalk.yellow.bold.inverse("line works!..."));
