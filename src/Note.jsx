import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import './index.css';

const Note=(props)=>{

    const deleteNote=()=>{
        props.delete(props.id)
    }

    return(
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br/>
                <p>{props.desc}</p>
                <Button style={{color:"#FBBC05"}}><EditIcon/></Button>
                <Button style={{color:"#FBBC05"}} onClick={deleteNote}><DeleteIcon /></Button>
            </div>
        </>
    )
}

export default Note;