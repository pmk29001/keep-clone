import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";

const App=()=>{

  const [addItem,setAddItem]=useState([]);

  const addNote=(note)=>{
    //alert("i am clicked..")
    setAddItem((PreVal)=>{
      return [...PreVal,note]
    })
  }

  const onDelete=(id)=>{
      setAddItem((oldVal)=>
        oldVal.filter((currentVal,inde)=>{
          return inde !==id
        })
      )
  }

  return(
    <>
        <Header/>
        <CreateNote passNote={addNote}/>

        {
          addItem.map((val,index)=>{
            return <Note 
              key={index}
              id={index}
              title={val.title}
              desc={val.desc}
              delete={onDelete}
            />
          })
        }

        <Footer/>
    </>
  )
}

export default App;