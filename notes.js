const fs = require("fs");
const chalk = require("chalk");
const log = console.log;

const getNotes = () => {
  const notes = loadNotes();
  log(chalk.blue.inverse.bold("Your Notes..."));
  notes.forEach(note => {
    log(chalk.yellow.inverse(note.title));
  });
};

const addNote = (title, body) => {
  // Get all the notes first
  const notes = loadNotes();

  // To ensure we do not have duplicate notes

  // Filter looks through every item in the array even after a match is found
  // const duplicateNotes = notes.filter(note => note.title === title);

  // However, find stops when it finds a match and doesn't look through the other items in the array
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    // Operation to add note
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    log(chalk.green("New note added!"));
  } else {
    log(chalk.red("Note title taken!"));
  }
};

const removeNote = title => {
  // Get all the notes first
  const notes = loadNotes();
  // log(notes);
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length > notesToKeep.length) {
    log(chalk.green("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    log(chalk.red("Note not found"));
  }
};

const readNote = title => {
  // Get all the notes as usual
  const notes = loadNotes();

  // Search through the notes by title
  const noteToRead = notes.find(note => note.title === title);

  if (!noteToRead) {
    log(chalk.red("Note not found, please check your title"));
  } else {
    log(chalk.green.inverse(noteToRead.title));
    log(noteToRead.body);
  }
};

// Because we would have to be loading our notes before any operation on them
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// Because we will be saving data at different parts of our TakeNotes application, we create a reusable method to save notes
const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote
};
