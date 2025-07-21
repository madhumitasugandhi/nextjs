import { employee } from "@/db/db";
import { NextResponse } from "next/server";

export const GET = (req, value)=>{
    //const data = employee;
    //console.log(value.params.empid)
    const empData = employee.filter((itme)=> itme.empolyeeId == value.params.empid)
    let result = empData.length == 0 ? {result:'NO Employee Found'} : {result:empData}
    return NextResponse.json(result)
}