import mongoose from "mongoose";

const connectMultipleDBs = async () => {
    const employeeDB = await mongoose.createConnection(process.env.EMPLOYEE_DB_URI);
    const productDB = await mongoose.createConnection(process.env.PRODUCT_DB_URI);

    console.log("Connected to Databases Successfully ✅")
    return { employeeDB, productDB };
};

export default connectMultipleDBs;
