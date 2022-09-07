const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

const noteSchema = new mongoose.Schema({
    answerOne: String,
    answerTwo: String,
    NaswerThree: String
});

const Notes = mongoose.model("Notes", noteSchema);

mongoose.connect("");

app.use("/", require("./routes/noteRoute"));

// app.use("/", require("./routes/noteRoute"));

app.get("/", (req, res) => {
    Notes.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.listen(3001, function() {
    console.log("express server is running on port 3001");
})