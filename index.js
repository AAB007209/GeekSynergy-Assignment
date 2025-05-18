import express from "express";
import dotenv from "dotenv";
import connectMultipleDBs from "./src/config/db.js";
import createCombinedRouter from "./src/routes/combined.route.js";
import createEmployeeModel from './src/models/Employee.model.js';
import createProductModel from './src/models/Product.model.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function startServer() {
    const { employeeDB, productDB } = await connectMultipleDBs();

    const Employee = createEmployeeModel(employeeDB);
    const Product = createProductModel(productDB);

    app.use('/api/combined', createCombinedRouter(Employee, Product));

    // Start listening
    app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
    });
}

startServer().catch(err => {
    console.error("Failed to start server:", err);
});
