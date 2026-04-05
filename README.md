# 📊 Finance Data Processing & Access Control Backend

## 🚀 Overview

This project is a backend system for managing financial records with role-based access control. It allows different types of users to interact with financial data based on their permissions and provides summary analytics for dashboard usage.

The system is designed with a focus on clean architecture, proper data handling, and clear API structure.

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB** with Mongoose
* REST API architecture

---

## 📁 Project Structure

```
finance-backend/
│
├── controllers/     # Business logic
├── models/          # Database schemas
├── routes/          # API routes
├── middleware/      # Access control
├── config/          # DB config
│
├── server.js        # Entry point
├── .env             # Environment variables
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-link>
cd finance-backend
```

### 2. Install dependencies

```
npm install
```

### 3. Configure environment variables

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
```

### 4. Run the server

```
npm start
```

Server runs on:

```
http://localhost:5000
```

---

## 👤 User & Role Management

The system supports three roles:

| Role    | Permissions                |
| ------- | -------------------------- |
| Viewer  | View records only          |
| Analyst | View records + summary     |
| Admin   | Full access (CRUD + users) |

### Features:

* Create users
* Assign roles
* Update role and active status

---

## 💰 Financial Records APIs

### Create Record

```
POST /api/records
```

(Admin only)

### Get Records (with filtering & pagination)

```
GET /api/records
```

Query Params:

* `type` (income/expense)
* `category`
* `date`
* `page`
* `limit`

---

### Update Record

```
PUT /api/records/:id
```

### Delete Record

```
DELETE /api/records/:id
```

---

## 📊 Dashboard Summary API

### Get Summary

```
GET /api/records/summary
```

Returns:

* Total income
* Total expenses
* Net balance
* Category-wise totals
* Recent activity

---

## 🔐 Access Control

Role-based access control is implemented using middleware.

* Viewer: Read-only access
* Analyst: Read + summary
* Admin: Full access

Unauthorized actions return:

```
403 - Access Denied
```

---

## ⚠️ Validation & Error Handling

* Schema-based validation using Mongoose
* Proper HTTP status codes used:

  * `400` → Bad request
  * `403` → Unauthorized
  * `404` → Not found
* Clear error messages returned for invalid input

---

## 💾 Data Persistence

* MongoDB used as a document database
* Data stored persistently
* Mongoose used for schema modeling

---

## ✨ Additional Features

* Pagination for record listing
* Filtering by type, category, and date
* Clean and modular code structure

---

## 🧠 Assumptions

* Authentication is mocked using request headers (`role`)
* Focus is on backend logic and API design
* No frontend included

---

## 📌 Conclusion

This backend demonstrates:

* Clean API design
* Role-based access control
* Data aggregation for dashboards
* Proper validation and error handling

---

## 🙌 Author

Karan

---
