'use client'
import Script from "next/script"

const ScriptComponent = () => {
  return (
    <>
        <h3>Script Component</h3>
        <Script
        src="/feature.js"
        onLoad={()=>{
            console.log("Feature Executed")
        }}
        />
    </>
  )
}

export default ScriptComponent