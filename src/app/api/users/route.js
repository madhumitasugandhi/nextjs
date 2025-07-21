import { NextResponse } from "next/server"

export const POST = async (req, res)=>{
    let data = await req.json();
    console.log(data)
    if(!data.id || !data.salary){
        return NextResponse.json({result: 'Bad Request'}, {status:400})
    }
    //return NextResponse.json({name:'Madhumita', Age: 23})
    return NextResponse.json({result: 'Success'}, {status:200})
}