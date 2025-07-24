'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';

const GetEmployee = () => {
  const [emp, setEmp] = useState([]);

  const getData = async () => {
    const res = await fetch('http://localhost:3000/api/db-emp');
    const data = await res.json();
    if (data.success) {
      setEmp(data.result);
    }
  };

  const deleteInfo = async (id) => {
    const res = await fetch(`http://localhost:3000/api/db-emp/${id}`, {
      method: 'DELETE'
    });
    const data = await res.json();
    if (data.success) {
      alert('Employee deleted successfully');
      getData(); // reload after delete
    } else {
      alert('Delete failed');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Get Employee Data</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.salary}</td>
              <td>{item.department}</td>
              <td>
                <button onClick={() => deleteInfo(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Link href="/">Back to Home</Link>
    </>
  );
};

export default GetEmployee;
