import React from "react";
import NoteIcon from '@mui/icons-material/Note';

const Header=()=>{
    return(
        <>
            <div className="Header">
                <div><NoteIcon sx={{ fontSize: 40 }}/></div>
                <h1>Keep</h1>
            </div>
        </>
    )
}

export default Header;