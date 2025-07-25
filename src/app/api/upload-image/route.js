import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export const POST = async (request) => {
  const data = await request.formData();
  const file = data.get('file');

  if (!file) {
    return NextResponse.json({ success: false, error: 'No file uploaded' });
  }

  try {
    const bytes = await file.arrayBuffer(); 
    const buffer = Buffer.from(bytes);

    const uploadPath = path.join(process.cwd(), 'public', 'uploads', file.name);
    await writeFile(uploadPath, buffer);

    return NextResponse.json({ response: "Successfully Uploaded", success: true });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
};
