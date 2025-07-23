import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    department: String,
    salary: String
});

export const Employee = mongoose.models.Employee || mongoose.model("Employee", employeeSchema);
