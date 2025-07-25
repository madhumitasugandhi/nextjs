import { connectionString } from "@/lib/database/db_connection";
import mongoose from "mongoose";
import { image as Image } from "@/lib/database/model/image";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await mongoose.connect(connectionString);

    const data = await request.formData();
    const file = data.get("file");

    if (!file) {
      return NextResponse.json({ success: false });
    }

    const bufferData = await file.arrayBuffer();
    const buffer = Buffer.from(bufferData);

    const newImage = new Image({
      name: file.name,
      data: buffer,
      contentType: file.type,
    });

    await newImage.save();

    return NextResponse.json({ response:"Successfully Uploaded", success: true });
  } catch (error) {
    console.error("Upload failed:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
};
