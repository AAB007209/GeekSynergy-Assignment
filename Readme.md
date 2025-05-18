# 🚀 Multi-Database Node.js Assignment

This Node.js + Express backend application connects to two separate MongoDB databases using Mongoose: one for **Employees** and another for **Products**. The app exposes a single combined API route for performing CRUD operations on both datasets.


## 📁 Project File Structure

```
├── index.js                       # Entry point of the Backend     
├── .env                           # For storing Secrets credentials  
├── package.json
├── src
│   ├── config
│   │   └── db.js                  # Handles connection to multiple databases
│   ├── models
│   │   ├── Employee.model.js      # Defines and exports Employee model
│   │   └── Product.model.js       # Defines and exports Product model
│   ├── routes
│   │   └── combined.route.js      # Combined route for both models
│   |── controllers
│   |   ├── combined.controller.js # Employee-Product-related logic
│   └── services
│       └── combined.service.js    # Business logic for handling combined operations
```

## 💡 What This Assignment Demonstrates

- Connects to **two MongoDB databases** using separate connections.
- Models (`Employee`, `Product`) are defined dynamically from their respective DB connections.
- Unified API route `/api/combined` handles all Employee and Product operations.
- Uses Express middleware to inject models into the request object for cleaner code separation.



## ⚙️ How to Run the App Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git

cd your-repo-name
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a .env file in the root:
```bash
PORT=3000
EMPLOYEE_DB_URI=mongodb://localhost:27017/employee-db
PRODUCT_DB_URI=mongodb://localhost:27017/product-db
```

### 4. Start the Server
```bash
npm start
```

### 5. MongoDB Compass
Open MongoDB compass and connect to the local database connection. `mongodb://localhost:27017`

---

### Routes
1. `POST /api/combined/employees`
- Description: Add a new employee.
- Raw data to be sent via Postman application.
```json
    {
        "name": "Alice Johnson",
        "position": "Backend Developer",
        "department": "Engineering",
        "salary": 75000
    }
```

2. `POST /api/combined/products`
- Description: Add a new product.
- Raw data to be sent via Postman application.
```json
    {
        "name": "Monitor",
        "category": "Electronics",
        "price": 1500,
        "inStock": true
    }
```

3. `GET /api/combined`
- Description: Fetches all employees and products.
```json
    {
        "employees": [
        {
            "_id": "...",
            "name": "Alice Johnson",
            "position": "Backend Developer",
            "department": "Engineering",
            "salary": 75000
        }
  ],
        "products": [
        {
            "_id": "...",
            "name": "Wireless Mouse",
            "description": "Ergonomic and lightweight",
            "price": 39.99
        }
  ]
}
```
