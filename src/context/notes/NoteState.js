import React from 'react'
import NoteContext from './noteContext'

const NoteState = (props)=>{
    const s1 = {
        "name":"harry",
        "class":"5b"
    }

return(
    <NoteContext.Provider value = {{}}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;