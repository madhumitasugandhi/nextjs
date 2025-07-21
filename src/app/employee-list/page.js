'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      let res = await fetch('http://localhost:3000/api/employee');
      let data = await res.json();
      setEmployees(Array.isArray(data) ? data : data?.data || []);
    };
    fetchEmployees();
  }, []);

  return (
    <>
      <h2>Employee List</h2>
      {employees.map((item, i) => {
        const id = item?.employeeId || item?.id || item?._id;
        return (
          <div key={id || i}>
            <h3>{item.name}</h3>
            <DeleteButton id={id} />
            <Link href={`/employee-list/${id}/update`}>
              Edit
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default EmployeeList;
