import { NextResponse } from "next/server"

export const GET = async(req, value)=>{
    const detailes = value.params.all
    return NextResponse.json({result: detailes})
}