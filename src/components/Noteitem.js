import React,{useContext} from 'react'
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote}=context; 
    const {note, updateNote}=props; 
  return (
    <div className='col-md-3'>
      
      
{/* Card start */}
<div className="card my-3"> 
<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{note.tag}</span>
   <div className="card-body">
    <div className="d-flex align-item-center">
    <h5 className="card-title">{note.title}</h5>
    <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Note Deleted successfully","success")}}></i>
    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note); props.showAlert("Note Updated successfully","success")}}></i>
    </div>
    <p className="card-text">{note.description}</p>
  </div>
</div>
{/* //card end */}


    </div>
  )
}

export default Noteitem
