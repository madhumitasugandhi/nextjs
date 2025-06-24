'use client';
import { useParams } from 'next/navigation';

const EmployeeDetails = () => {
  const { employeeName } = useParams();

  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {employeeName}</p>
    </div>
  );
};

export default EmployeeDetails;

