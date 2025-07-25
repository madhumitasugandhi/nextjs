import { connectionString } from "@/lib/database/db_connection";
import mongoose from "mongoose";
import { image as Image } from "@/lib/database/model/image";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(connectionString);
    }

    const images = await Image.find().select('name data contentType');

    // Convert image buffers to base64 for frontend
    const formattedImages = images.map((img) => ({
      _id: img._id,
      name: img.name,
      contentType: img.contentType,
      data: img.data.toString('base64'), // ✅ buffer → base64
    }));

    return NextResponse.json({ success: true, images: formattedImages });
  } catch (error) {
    console.error("GET /api/get-mongo-image failed:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch images" });
  }
};
