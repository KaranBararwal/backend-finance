# 📊 Finance Data Processing Backend

## 📌 Overview

This project is a backend system for managing financial records with role-based access control. It allows users to create, view, update, and delete financial data while enforcing permissions based on user roles.

The system is designed to demonstrate backend architecture, API design, data handling, and access control logic.

---

## 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/KaranBararwal/backend-finance.git
cd finance-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
MONGO_URI=your_mongodb_connection_string
```

### 4. Run the server

```bash
npm start
```

Server runs on:

```bash
http://localhost:5000
```

---

## 👤 User & Role Management

### Roles

* **Viewer** → Can only view records
* **Analyst** → Can view records and access summary
* **Admin** → Full access (create, update, delete)

---

### ➤ Create User

**POST /api/users**

```json
{
  "name": "Admin",
  "email": "admin@test.com",
  "role": "admin"
}
```

---

### ➤ Get Users

**GET /api/users**

---

### ➤ Update User

**PUT /api/users/:id**

```json
{
  "role": "analyst",
  "active": true
}
```

---

## 💰 Financial Records API

### 🔹 Base URL

```
/api/records
```

---

### ➤ Create Record (Admin)

**POST /api/records**

Headers:

```
role: admin
```

```json
{
  "amount": 5000,
  "type": "income",
  "category": "salary",
  "date": "2026-04-04", 
  "notes": "salary"
}
```

---

### ➤ Get Records (All Roles)

**GET /api/records**

Supports filtering & pagination:

Examples:

```
/api/records?type=income
/api/records?category=salary&page=1&limit=5
```

---

### ➤ Update Record (Admin)

**PUT /api/records/:id**

```json
{
  "amount": 6000
}
```

---

### ➤ Delete Record (Admin)

**DELETE /api/records/:id**

---

## 📊 Dashboard Summary API

### ➤ Get Summary

**GET /api/records/summary**

Access:

* Admin
* Analyst

### Response:

```json
{
  "totalIncome": 5000,
  "totalExpense": 2000,
  "netBalance": 3000,
  "categoryTotals": {
    "salary": 5000,
    "shopping": 2000
  },
  "recentActivity": []
}
```

---

## 🔐 Access Control

Role-based access is implemented using middleware.

| Action        | Viewer | Analyst | Admin |
| ------------- | ------ | ------- | ----- |
| View Records  | ✅      | ✅       | ✅     |
| Create Record | ❌      | ❌       | ✅     |
| Update Record | ❌      | ❌       | ✅     |
| Delete Record | ❌      | ❌       | ✅     |
| Summary       | ❌      | ✅       | ✅     |

---

## ⚠️ Validation & Error Handling

* Schema validation using Mongoose
* Proper HTTP status codes
* Structured error responses

### Example Error:

```json
{
  "error": "Record validation failed"
}
```

---

## 💾 Data Persistence

* MongoDB used as database
* Data stored using Mongoose schemas
* Persistent across server restarts

---

## ✨ Additional Features

* Pagination for records
* Filtering by type, category, and date
* Clean and modular code structure

---

## 🧠 Assumptions

* Authentication is mocked using request headers (`role`)
* No password-based login implemented
* Focus is on backend logic and structure

---

## 🎯 Conclusion

This project demonstrates:

* Clean backend architecture
* Role-based access control
* CRUD operations with validation
* Aggregated dashboard APIs

The system is designed to be simple, clear, and maintainable while fulfilling all assignment requirements.

---
