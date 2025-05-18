// src/routes/combined.route.js
import express from 'express';
import {
    handleGetCombinedData,
    handleCreateEmployee,
    handleCreateProduct
} from '../controllers/combined.controller.js';


const createCombinedRouter = (Employee, Product) => {
    const router = express.Router();
    // Middleware to inject models into `req.models`
    router.use((req, res, next) => {
        req.models = { Employee, Product };
        next();
    });

    router.get('/', handleGetCombinedData);
    router.post('/employees', handleCreateEmployee);
    router.post('/products', handleCreateProduct);

    return router;
};

export default createCombinedRouter;
