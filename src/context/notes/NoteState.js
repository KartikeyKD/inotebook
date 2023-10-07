import React, {useState} from 'react'
import NoteContext from './noteContext'

const NoteState = (props)=>{
const notesInitial = [
    {
      "_id": "65206754dea73cbeab58260c",
      "user": "651ffb86766101c199688c77",
      "title": "my title",
      "description": "my first note this is",
      "tag": "Test Note",
      "date": "2023-10-06T20:00:20.455Z",
      "__v": 0
    },
    {
      "_id": "65206756dea73cbeab58260e",
      "user": "651ffb86766101c199688c77",
      "title": "my title",
      "description": "my first note this is",
      "tag": "Test Note",
      "date": "2023-10-06T20:00:22.161Z",
      "__v": 0
    }
  ]

  const [notes, setnNotes] = useState(notesInitial)

return(
    <NoteContext.Provider value = {{notes, setnNotes }}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;