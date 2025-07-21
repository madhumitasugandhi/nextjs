import React from 'react'

const ENVVariables = () => {
    //console.log(process.env)
    console.log(process.env.GOOGLEMAPSAPIKEY);
  return (
    <>
        <h1>ENV variables</h1>
        {/*{
            process.env.NODE_ENV == 'development'? 
            <h3>development Mode</h3> : <h3>Production Maode</h3>
        } */}
    </>
  )
}

export default ENVVariables