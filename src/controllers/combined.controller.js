import {
    getCombinedData,
    createEmployee,
    createProduct
} from '../services/combined.service.js';

export const handleGetCombinedData = async (req, res) => {
    try {
        const { Employee, Product } = req.models;
        const data = await getCombinedData(Employee, Product);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data', message: error.message });
    }
};

export const handleCreateEmployee = async (req, res) => {
    try {
        const { Employee } = req.models;
        if (!Employee) {
            return res.status(500).json({ error: "Employee model not available." });
        }

        const saved = await Employee.create(req.body);
        res.status(201).json(saved);
    } catch (error) {
        res.status(400).json({ error: "Failed to create employee", message: error.message });
    }
};

export const handleCreateProduct = async (req, res) => {
    try {
        const { Product } = req.models;
        if (!Product) {
            return res.status(500).json({ error: "Product model not available." });
        }

        const saved = await createProduct(Product, req.body);
        res.status(201).json(saved);
    } catch (error) {
        res.status(400).json({ error: "Failed to create product", message: error.message });
    }
};
