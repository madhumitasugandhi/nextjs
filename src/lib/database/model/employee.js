import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    position: String,
    salary: Number
});

export const Employee = mongoose.models.Employee || mongoose.model("Employee", employeeSchema);
