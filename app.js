console.log("Starting app.js");

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const notes = require('./notes.js');

var title = argv.title;
var body = argv.body;
var command = argv._[0];

if (command === "add") {
    console.log("Adding note");
    notes.addingNote(title, body);
} else if (command === "remove") {
    console.log("Removing note");
    notes.removingNote(title);
} else if (command === "read") {
    console.log("Reading note");
    notes.readingNote(title);
} else if (command === "list") {
    console.log("Listing notes");
    notes.listingNote();
} else {
    console.log("Unknown command was used!!");
}
//execution commands :node app.js add --title="My Note" --body="This is a note",node app.js remove --title="My Note" "
