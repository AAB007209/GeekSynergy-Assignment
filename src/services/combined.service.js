export const getCombinedData = async (Employee, Product) => {
    const [employees, products] = await Promise.all([
        Employee.find(),
        Product.find()
    ]);
    return { employees, products };
};

export const createEmployee = async (Employee, employeeData) => {
    const newEmployee = new Employee(employeeData);
    return await newEmployee.save();
};

export const createProduct = async (Product, productData) => {
    const newProduct = new Product(productData);
    return await newProduct.save();
};
