'use client'
import { useState } from 'react'
import style from '../conditionalStyling.module.css'

const ConditionalStyling = () => {
    const [color, setColor] = useState('blue');
  return (
    <>
    <h2 className={style.heading}><i>Conditional Styling in NextJS</i></h2>
    <h3 className={color == 'blue' ? style.green : style.heading}>Hello Madhumita</h3>
    <button onClick={()=>setColor('red')}>Change Color</button>
    </>
  )
}

export default ConditionalStyling