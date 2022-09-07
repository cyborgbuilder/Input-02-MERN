const mongoose = require("mongoose");

const noteSchema = {
    //title: String,
    //content: String,
    answerOne: String,
    answerTwo: String,
    answerThree: String
}

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;