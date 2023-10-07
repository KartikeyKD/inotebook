import React from 'react'

const Noteitem = (props) => {
    const {note}=props; 
  return (
    <div className='col-md-3'>
      
      
{/* Card start */}
<div className="card my-3">
   <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <a href="#" className="btn btn-primary">Un-Privy it!</a>
  </div>
</div>
{/* //card end */}


    </div>
  )
}

export default Noteitem
