# 🚀 Task Manager API (Full Stack Project)

## 📖 Overview

This project is a **full-stack Task Manager application** built as part of a backend developer assignment.
It includes secure authentication, role-based access, and CRUD operations with a modern frontend UI.

---

## ✨ Features

### 🔐 Authentication

* User Registration & Login
* Password hashing using bcrypt
* JWT-based authentication

### 👥 Role-Based Access

* User & Admin roles
* Protected routes using middleware

### 📋 Task Management

* Create tasks
* View all tasks
* Delete tasks
* (Optional: Update status)

### 🌐 Frontend

* Clean UI (HTML, CSS, JavaScript)
* Login & Register pages
* Dashboard with task list
* Real-time task updates

### ⚙️ Backend

* RESTful API design
* Modular structure
* Error handling & validation

---

## 🛠️ Tech Stack

**Frontend**

* HTML
* CSS
* JavaScript

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB (Mongoose)

**Authentication**

* JWT (JSON Web Tokens)
* bcrypt

---

## 📂 Project Structure

```bash
Backend Project/
│── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│
│── frontend/
│   ├── index.html
│
│── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
```

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file inside backend:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run Backend

```bash
node server.js
```

Server runs on:
http://localhost:5000

### 5️⃣ Run Frontend

* Open `index.html` manually
* OR use Live Server

---

## 🔑 API Endpoints

### Auth Routes

```http
POST /api/v1/auth/register
POST /api/v1/auth/login
```

### Task Routes (Protected)

```http
GET    /api/v1/tasks
POST   /api/v1/tasks
DELETE /api/v1/tasks/:id
```

---

## 🧪 Testing

You can test APIs using:

* Thunder Client (VS Code)
* Postman

---

## 🌍 Deployment

* Frontend deployed on Vercel
* Backend runs locally (Node.js + MongoDB)

> ⚠️ Backend must be running locally for full functionality

---

## 📈 Future Improvements

* Update task status (pending/completed)
* Role-based admin controls
* Pagination & search
* Deploy backend (Render/Railway)
* Add Swagger API docs

---

## 👨‍💻 Author

**Kaif**
Backend Developer Intern Candidate

---

## ⭐ Conclusion

This project demonstrates:

* Strong backend fundamentals
* API design & security
* Full-stack integration
* Problem-solving under real-world constraints
