import React from "react";

const Footer=()=>{

    let year=new Date().getFullYear();

    return(
        <>
        <div style={{margin:"50px"}}>.</div>
            <div className="Footer">
                <p>copyright © {year}</p>
            </div>
        </>
    )
}
export default Footer;
