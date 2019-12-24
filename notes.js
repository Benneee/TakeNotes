const fs = require("fs");
const chalk = require("chalk");
const log = console.log;

const getNotes = function() {
  return "Your notes...";
};

const addNote = function(title, body) {
  // Get all the notes first
  const notes = loadNotes();

  // To ensure we do not have duplicate notes
  const duplicateNotes = notes.filter(function(note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
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

const removeNote = function(title) {
  // Get all the notes first
  const notes = loadNotes();
  // log(notes);

  // Andrew's approach
  const notesToKeep = notes.filter(function(note) {
    return note.title !== title;
  });
  if (notes.length > notesToKeep.length) {
    log(chalk.green("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    log(chalk.red("Note not found"));
  }
};

// Because we would have to be loading our notes before any operation on them
const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// Because we will be saving data at different parts of our TakeNotes application, we create a reusable method to save notes
const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
