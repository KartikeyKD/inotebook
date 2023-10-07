import React, {useState} from 'react'
import NoteContext from './noteContext'

const NoteState = (props)=>{
const notesInitial = [
    {
      "_id": "65206754dea73fcbeab58260c",
      "user": "651ffb86766101c199688c77",
      "title": "my title",
      "description": "my first note this is",
      "tag": "Test Note",
      "date": "2023-10-06T20:00:20.455Z",
      "__v": 0
    },
    {
      "_id": "65206756dea73cffbeab58260e",
      "user": "651ffb86766101c199688c77",
      "title": "my title",
      "description": "my first note this is",
      "tag": "Test Note",
      "date": "2023-10-06T20:00:22.161Z",
      "__v": 0
    },
    {
      "_id": "65206756dea73cbeeeab58260e",
      "user": "651ffb86766101c199688c77",
      "title": "my title",
      "description": "my first note this is",
      "tag": "Test Note",
      "date": "2023-10-06T20:00:22.161Z",
      "__v": 0
    },
    {
      "_id": "65206756dea73cbeabtee58260e",
      "user": "651ffb86766101c199688c77",
      "title": "my title",
      "description": "my first note this is",
      "tag": "Test Note",
      "date": "2023-10-06T20:00:22.161Z",
      "__v": 0
    },
    {
      "_id": "65206756dea73cbeab582tef60e",
      "user": "651ffb86766101c199688c77",
      "title": "my title",
      "description": "my first note this is",
      "tag": "Test Note",
      "date": "2023-10-06T20:00:22.161Z",
      "__v": 0
    },
    {
      "_id": "65206756dea73cbeab58260efdw",
      "user": "651ffb86766101c199688c77",
      "title": "my title",
      "description": "my first note this is",
      "tag": "Test Note",
      "date": "2023-10-06T20:00:22.161Z",
      "__v": 0
    },
    {
      "_id": "65206756dea73cbeab58260wcwe",
      "user": "651ffb86766101c199688c77",
      "title": "my title",
      "description": "my first note this is",
      "tag": "Test Note",
      "date": "2023-10-06T20:00:22.161Z",
      "__v": 0
    },
    {
      "_id": "65206756dea73cbeab5826ceger0e",
      "user": "651ffb86766101c199688c77",
      "title": "my title",
      "description": "my first note this is",
      "tag": "Test Note",
      "date": "2023-10-06T20:00:22.161Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial)
  //Add a NOTE
  const addNote=(title, description,tag )=>{
    console.log("New Note Added ")
    const note={
      "_id": "65206756dea73cbeab5826ceger0e",
      "user": "651ffb86766101c199688c77",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-10-06T20:00:22.161Z",
      "__v": 0
    };
     setNotes(notes.concat(note))
  }
//Delete a NOTE
const deleteNote=(id)=>{
     
}
//Edit a NOTE
const editNote=(id)=>{
     
}


return(
    <NoteContext.Provider value = {{notes, setNotes, addNote,editNote,deleteNote }}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;