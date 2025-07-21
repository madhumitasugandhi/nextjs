import DeleteButton from "@/components/DeleteButton";

const getEmployees = async()=>{
    let data = await fetch('http://localhost:3000/api/employee')
    data = await data.json();
    return data;
}
const EmployeeList = async () => {
    const employees = await getEmployees();
  return (
    <>
        <h2>EmployeeList</h2>
        {
            employees.map((item,i)=>(
                <div key={i}>
                    <h3>{item.name}</h3>
                    <DeleteButton id={item.employeeId}/>
                </div>
            ))
        }
    </>
  )
}

export default EmployeeList