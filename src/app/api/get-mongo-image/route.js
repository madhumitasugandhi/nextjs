import { connectionString } from "@/lib/database/db_connection"
import mongoose from "mongoose"
import {Image} from "@/lib/database/model/image"
import { NextResponse } from "next/server"

export const GEt = async ()=>{
    try{
        await mongoose.connect(connectionString)

        const images = await Image.find().select('name data contantType')
        return NextResponse.json({success:true, images})
    }
    catch(error){
        NextResponse.json({success:false, error:"Failed"})
    }
}