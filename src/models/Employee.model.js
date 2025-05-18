// src/models/Employee.model.js
import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    position: String,
    department: String,
    salary: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

export default function createEmployeeModel(connection) {
    return connection.model('Employee', EmployeeSchema);
}
