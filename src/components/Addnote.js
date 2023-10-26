import React,{useContext,useState} from 'react'
import noteContext from "../context/notes/noteContext";

const Addnote = (props) => {
    const [note, setNote] = useState({title:"", description:"", tag:"default"})
    const context = useContext(noteContext);
  const {addNote } = context;

  const handleClick=(e)=>{
    e.preventDefault();
addNote(note.title,note.description,note.tag);
setNote({title:"", description:"", tag:""});
// props.showAlert("Note Added successfully","success")
  }
  const onChange=(e)=>{
setNote({...note,[e.target.name]:e.target.value})
  }
  
  return (
    <div>
      <div className="container my-3">
      <h2>Add a Note</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={note.title}
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={note.description}
            name="description"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            value={note.tag}
            name="tag"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Privy It!
        </button>
      </form>
      </div>
    </div>
  )
}

export default Addnote
