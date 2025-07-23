'use client'

import { useState } from "react";

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');

  const handleAddEmployee = async () => {
    if (!name || !email || !salary || !department) {
      alert("Please fill all fields");
      return;
    }

    let data = await fetch('http://localhost:3000/api/db-emp', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, salary, department })
    });

    data = await data.json();

    if (data.success) {
      alert("Employee added successfully");
      setName('');
      setEmail('');
      setSalary('');
      setDepartment('');
    } else {
      alert("Error adding employee: " + data.error);
    }
  };

  return (
    <>
      <h2>Add Employee | MongoDB with POST API</h2>
      <input type='text' value={name} placeholder='Enter Employee Name'
        onChange={(e) => setName(e.target.value)} /><br /><br />

      <input type='text' value={email} placeholder='Enter Employee Email'
        onChange={(e) => setEmail(e.target.value)} /><br /><br />

      <input type='text' value={salary} placeholder='Enter Employee Salary'
        onChange={(e) => setSalary(e.target.value)} /><br /><br />

      <input type='text' value={department} placeholder='Enter Employee Department'
        onChange={(e) => setDepartment(e.target.value)} /><br /><br />

      <button onClick={handleAddEmployee}>Submit</button>
    </>
  );
}

export default AddEmployee;
