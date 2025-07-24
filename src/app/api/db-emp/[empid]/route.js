import mongoose from 'mongoose';
import { Employee } from '@/lib/database/model/employee';
import { connectionString } from '@/lib/database/db_connection';
import { NextResponse } from 'next/server';

export const DELETE = async (req, { params }) => {
  try {
    await mongoose.connect(connectionString);
    const result = await Employee.deleteOne({ _id: params.empid });

    if (result.deletedCount === 0) {
      return NextResponse.json({ success: false, result: 'Employee not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, result: 'Employee deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
};
