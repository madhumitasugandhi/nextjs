import { employee } from "@/db/db";
import { NextResponse } from "next/server";

export const GET = (req, value)=>{
    //const data = employee;
    //console.log(value.params.empid)
    const empData = employee.filter((itme)=> itme.empolyeeId == value.params.empid)
    let result = empData.length == 0 ? {result:'NO Employee Found'} : {result:empData}
    return NextResponse.json(result)
}

export const DELETE = (req, value)=>{
    let empolyeeId = value.params.empid;
    if(empolyeeId){
        return NextResponse.json({result: "Employee Info Deleted Successfully", success: true}, {status:200})
    }
    else{
        return NextResponse.json({result: "Employee Not Found", success: false}, {status:404})
    }   
}

export const PUT = async(req, value) => {
    let payload = await req.json();
    payload.employeeId = value.params.empid;
    //console.log(payload)
   // return NextResponse.json({success: true})
   if(!payload.employeeId   || !payload.name || !payload.salary ||  !payload.email){
        return NextResponse.json({result:"Error" ,success: false})
   }
   else{
    return NextResponse.json({result:"Success" ,success: true})
   }
}