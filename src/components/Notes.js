import React, {useContext, useEffect, useRef, useState} from 'react'
import noteContext from "../context/notes/noteContext";
import Noteitem from './Noteitem';
import Addnote from "./Addnote";


const Notes = () => {
    const context = useContext(noteContext);
  const {notes, getNotes} = context;
  useEffect(() => {
    getNotes()
  })
  
  const updateNote=(currentNote)=>{
 ref.current.click();
 setNote({etitle:currentNote.title , edescription:currentNote.description, etag: currentNote.tag } )
  }

  const [note, setNote] = useState({etitle:"", edescription:"", etag:"default"})
  const handleClick=(e)=>{
    e.preventDefault();

  }
  const onChange=(e)=>{
setNote({...note,[e.target.name]:e.target.value})
  }


  const ref  = useRef(null)















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
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={} className="btn btn-primary">Update</button>
      </div>
    </div>
  </div>
</div>




    <div className="row my-3">
      <h3 >Your Notes</h3>
      {notes.map((note)=>{
         return <Noteitem key = {note._id } updateNote = {updateNote} note={note} />
        
      })}
      </div>
      </>
  )
}

export default Notes
