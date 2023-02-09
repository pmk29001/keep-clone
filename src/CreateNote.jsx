import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote=(props)=>{

    const [expand,setEx]=useState(false);

    const [note,setNote]=useState({
        title:"",
        desc:"",
    })

    const inputEvent=(event)=>{

        const {name,value}=event.target;

        setNote((preNote)=>{
            return{
            ...preNote,
           [name]:value,}
        })
    }

    const addEvent=()=>{
        props.passNote(note)

        setNote({
            title:"",
            desc:"",
        })
    }

    const getEx=()=>{
        setEx(true);
    }

    const getShort=()=>{
        setEx(false);
    }

    return(
        <>
           <div className="createNote">
             {expand? <input type="text"
                placeholder="Title" 
                name="title" autoComplete="off"
                 value={note.title}
                   onChange={inputEvent}/>
                   :null}
                    
                <textarea type="text" placeholder="Write a Note..." name="desc" rows=" " cols="" value={note.desc} onChange={inputEvent} onClick={getEx} onDoubleClick={getShort} style={{resize:"none"}}/>
               {expand? <Button onClick={addEvent}> 
                    <AddIcon style={{fontSize:"30px",color:"white",backgroundColor:"#FBBC05",borderRadius:"50%",padding:"5px",marginTop:"-25px",marginRight:"-385px"}}/>
                </Button>:null}
            </div>
        </>
    )
}

export default CreateNote;