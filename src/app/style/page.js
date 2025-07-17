'use client'
import { useState } from "react"

const StyleWithNextJs = () => {
    const [style, setstyle]= useState({backgroundColor: 'purple'});
    return (
    <>
        <h2 style={{color: "peru"}}>Style</h2>
        <h3 style={style}>Madhumita</h3>
        <button onClick={()=> setstyle({backgroundColor: 'black', color: 'white'})}>Change Color</button>
    </>
  )
}

export default StyleWithNextJs