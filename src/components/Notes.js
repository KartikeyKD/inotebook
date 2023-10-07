import React, {useContext, useEffect, useRef, useState} from 'react'
import noteContext from "../context/notes/noteContext";
import Noteitem from './Noteitem';
import Addnote from "./Addnote";


const Notes = () => {
    const context = useContext(noteContext);
  const {notes, getNotes, editNote} = context;
  useEffect(() => {
    // eslint-disable-next-line
    getNotes();
    // eslint-disable-next-line
  },[])
  // eslint-disable-next-line
  const ref  = useRef(null)
  const refClose  = useRef(null)
  const [note, setNote] = useState({id:"", etitle:"", edescription:"", etag:"default"})

  const updateNote=(currentNote)=>{
 ref.current.click();
 setNote({id:currentNote._id, etitle:currentNote.title , edescription:currentNote.description, etag: currentNote.tag } )
  }
  
  const handleClick=(e)=>{
    editNote(note.id,note.etitle,note.edescription,note.etag)
    refClose.current.click();

  }
  const onChange=(e)=>{
setNote({...note,[e.target.name]:e.target.value})
  }


  















  return (
    <>
      <Addnote/>
      <button type="button" ref={ref} className="btn d-none btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Privy</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
        <div className="mb-3">
          <label htmlFor="etitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="eitle"
            name="etitle"
            value={note.etitle}
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="edescription" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            value={note.edescription}
            id="edescription"
            name="edescription"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="etag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="etag"
            value={note.etag}
            name="etag"
            onChange={onChange}
          />
        </div>
      </form>
      </div>
      <div className="modal-footer">
        <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={handleClick} className="btn btn-primary">Update</button>
      </div>
    </div>
  </div>
</div>




    <div className="row my-3">
      <h3 >Your Notes</h3>
      <div className="container">
      {notes.length===0 && "No Notes To Display"}
      </div>
      {notes.map((note)=>{
         return <Noteitem key = {note._id } updateNote = {updateNote} note={note} />
        
      })}
      </div>
      </>
  )
}

export default Notes
