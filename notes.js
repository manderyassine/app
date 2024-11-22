console.log("starting notes.js");

const fs = require('fs');

function fetchNotes() {
    try {
        return JSON.parse(fs.readFileSync('notes.txt'));
    } catch (err) {
        return [];
    }
}

function addingNote(title, body) {
    var notes = fetchNotes();

    var note = {
        title,
        body
    };

    notes.push(note);
    fs.writeFileSync("notes.txt", JSON.stringify(notes));
}

function removingNote(title) {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
}

module.exports = {
    addingNote,
    removingNote
};
