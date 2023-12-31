const express = require("express");
const Note = require("../models/Note");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

//ROUTE 1: Get all the notes  using: GET "http://localhost:5000/api/notes/fetchallnotes". Login Required

router.get("/fetchallnotes", fetchuser, async (req, res) => {
    try {

  const notes = await Note.find({ user: req.user.id });
  res.json(notes);
} catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error occured");
}
});

//ROUTE 2: Add notes  using: POST "http://localhost:5000/api/notes/addnote". Login Required

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
//ROUTE 2: Add notes  using: POST "http://localhost:5000/api/notes/addnote". Login Required
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


//ROUTE 3: Update notes  using: PUT "http://localhost:5000/api/notes/updatenote". Login Required
router.put('/updatenote/:id', fetchuser, async (req,res)=>{
     const {title, description, tag} = req.body;
    //creating a newNote object 
    const newNote = {};
    if(title){newNote.title=title};
    if(description){newNote.description=description};
    if(tag){newNote.tag=tag};
    
    //Finding and updating the requested note 
     let note = await Note.findById(req.params.id);
     if(!note){
       return res.status(404).send("Not Found")
     }

     if(note.user.toString()!==req.user.id){return res.status(401).send("Not authorised")};
note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true});
res.json({note});

    });

//ROUTE 4: Deleting notes  using: DELETE "http://localhost:5000/api/notes/deletenote". Login Required

router.delete('/deletenote/:id', fetchuser, async (req,res)=>{
     const {title, description, tag} = req.body;
    
     //Finding and Deleting the requested note 
     let note = await Note.findById(req.params.id);
     if(!note){
       return res.status(404).send("Not Found")
     }
//Checking user credentials
     if(note.user.toString()!==req.user.id){return res.status(401).send("Not authorised")};
note = await Note.findByIdAndDelete(req.params.id);
res.json({note:note, "message":"The Note is deleted"});

    });
 module.exports = router;
