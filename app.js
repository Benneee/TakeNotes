const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notes");
const fs = require("fs");

const log = console.log;

// Customize yargs version
yargs.version("1.1.0");

// We will need our notes app to be able to do the following: add, remove, read, list

// The builder property allows us to add extra configurations/properties for our commands
// The add command needs the title and body of the note we are trying to add
// The remove command needs the title of the note we are trying to remove
// The read command needs the title of the note we are trying to read
// The builder property helps us get these values we need for each command

// We need to somehow save the notes being created
// The FS module will help here and we will save the notes in JSON format
// Set up commands

// Create add command
yargs.command({
  command: "add",
  describe: "Add new notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true, // Default value is false
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    // log("Removing the note", argv.title);
    notes.removeNote(argv.title);
  }
});

// Create read command
yargs.command({
  command: "read",
  describe: "Display single note details",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    // log("Displayng note details...");
    notes.readNote(argv.title);
  }
});

// Create list command
yargs.command({
  command: "list",
  describe: "Display all notes",
  handler() {
    // log("Displaying all notes...");
    notes.getNotes();
  }
});

yargs.parse();
// log(yargs.argv);

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
