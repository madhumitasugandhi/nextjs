import mongoose from "mongoose"

const imageSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    data:{
        type:Buffer,
        required:true
    },
    contentType:{
        type:String,
        required:true
    }
})

export const image = mongoose.models.Image || mongoose.model('Image',imageSchema)