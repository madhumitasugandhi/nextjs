'use client'

import { useState } from "react";


const UpdateInfo = ({params}) => {
    const employeeId = params.empid;
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [email, setEmail] = useState('');
  return (
    <>
        <h2>UpdateInfo</h2>
        <input 
        type="text"
        placeholder="Enter Name"
        value={name}
        onClick={(e)=>setName(e.target.value)}/>
        <input 
        type="text"
        placeholder="Enter Email"
        value={email}
        onClick={(e)=>setEmail(e.target.value)}/>
        <input 
        type="text"
        placeholder="Enter Salary"
        value={salary}
        onClick={(e)=>setSalary(e.target.value)}/>
    </>
  )
}

export default UpdateInfo