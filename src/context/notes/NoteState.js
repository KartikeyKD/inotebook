import React, {useState} from 'react'
import NoteContext from './noteContext'

const NoteState = (props)=>{
  const host = "http://localhost:5000/"
const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)
  
  //GET all NOTEs

  const getNotes=async ()=>{
    //API call

    const response = await fetch(`${host}api/notes/fetchallnotes`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxZmZiODY3NjYxMDFjMTk5Njg4Yzc3In0sImlhdCI6MTY5NjYwMTczMn0.UpXdASK7eXPfw7p-BK6IEVa7ZW4CYs37j8ntvWAamq8"
    }
   });
  const json1 = await response.json();
  setNotes(json1);
  }
  //Add a NOTE

  const addNote=async (title, description,tag )=>{
    //API call

    const response = await fetch(`${host}api/notes/addnote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxZmZiODY3NjYxMDFjMTk5Njg4Yzc3In0sImlhdCI6MTY5NjYwMTczMn0.UpXdASK7eXPfw7p-BK6IEVa7ZW4CYs37j8ntvWAamq8"
    },
   body: JSON.stringify({title,description,tag}), 
  });
  const note = await response.json();
     setNotes(notes.concat(note))
  }


//Delete a NOTE
//API call

//Logic for DELETE in FE
const deleteNote=async (id)=>{

  const response = await fetch(`${host}api/notes/deletenote/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxZmZiODY3NjYxMDFjMTk5Njg4Yzc3In0sImlhdCI6MTY5NjYwMTczMn0.UpXdASK7eXPfw7p-BK6IEVa7ZW4CYs37j8ntvWAamq8"
    }, 
  });

  const json = response.json();

  console.log("Deleting the note with id-",id);
  const newNote = notes.filter((note)=>{return note._id!==id})
  setNotes(newNote)
     
}
//Edit a NOTE

const editNote=async (id, title, description, tag)=>{
  //API call

  const response = await fetch(`${host}api/notes/updatenote/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxZmZiODY3NjYxMDFjMTk5Njg4Yzc3In0sImlhdCI6MTY5NjYwMTczMn0.UpXdASK7eXPfw7p-BK6IEVa7ZW4CYs37j8ntvWAamq8"
    },
   body: JSON.stringify({title,description,tag}), 
  });
  const json= await response.json(); 
//Logic for edit in FE

for (let index = 0; index < notes.length; index++) {
  const element = notes[index];
  if(element._id===id){
     element.title=title;
     element.description=description;
     element.tag=tag;
  }
}
     
}


return(
    <NoteContext.Provider value = {{notes, setNotes, addNote,editNote,deleteNote, getNotes }}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;