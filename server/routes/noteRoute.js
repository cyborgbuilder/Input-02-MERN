const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");


router.route("/create").post((req, res) => {
    // const title = req.body.title;
    // const content = req.body.content;
    const answerOne = req.body.answerOne;
    const answerTwo = req.body.answerTwo;
    const answerThree = req.body.answerThree;

    const newNote = new Note({
        // title,
        // content,
        answerOne,
        answerTwo,
        answerThree
    });

    newNote.save();
})

//  router.route("/get").get( (req, res) => {
//      res.send("express HERE");
//  });


module.exports = router;