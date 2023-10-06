const express = require("express");
const Note = require("../models/Note");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

//ROUTE 1: Get all the notes  using: GET "http://localhost:6000/api/notes/fetchallnotes". Login Required

router.get("/fetchallnotes", fetchuser, async (req, res) => {
    try {

  const notes = await Note.find({ user: req.user.id });
  res.json(notes);
} catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error occured");
}
});

//ROUTE 2: Add notes  using: POST "http://localhost:6000/api/notes/addnote". Login Required

// router.post(
//   "/addnote",
//   fetchuser,
//   [
//     body("title", "Enter a valid Title").isLength({ min: 3 }),
//     body("description", "Enter a valid Description").isLength({min: 5 }),
//   ],
//   async (req, res) => {
//     try {
        
    
//     const {title, description,tag} = req.body;
//     // If there are errors, return Bad request and the errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//   const note = new Note({
//     title,description,tag,user: req.user.user.id
//   })
//   const savedNote = await note.save()
//   res.json(savedNote)
// } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Some Error occured");       
// }
// });

router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {
        try {

            const { title, description, tag } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()

            res.json(savedNote)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

module.exports = router;
