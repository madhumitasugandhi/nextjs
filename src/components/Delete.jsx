'use client';

import { useRouter } from 'next/navigation';

const Delete = ({ id }) => {
  const router = useRouter();

  const deleteInfo = async () => {
    const res = await fetch(`http://localhost:3000/api/db-emp/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();

    if (data.success) {
      alert('Record deleted successfully');
      router.push('/mongo-get-emp');
    } else {
      alert('Try Again!!');
    }
  };

  return <button onClick={deleteInfo}>Delete</button>;
};

export default Delete;
