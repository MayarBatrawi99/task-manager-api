# Task Manager API

A simple and scalable task management REST API built with *Node.js, **Express, and **MongoDB, featuring full **CRUD functionality, **JWT authentication*, and modular architecture. Perfect for managing tasks in a multi-user environment.

---

## 🔧 Tech Stack

- *Backend*: Node.js, Express.js
- *Database*: MongoDB Atlas (via Mongoose)
- *Authentication*: JSON Web Tokens (JWT)
- *Environment Management*: dotenv
- *Testing*: Postman
- *Version Control*: Git + GitHub

---

## 📦 Features

- User registration and login (*coming in Week 2*)
- Create, read, update, delete tasks
- MongoDB cloud integration
- Clean MVC architecture
- Environment-safe config management
- (Coming Soon) Role-based access
- (Coming Soon) File uploads + S3 integration

---

## 🚀 Getting Started

### 1. Clone the repo
bash
git clone https://github.com/MayarBatrawi99/task-manager-api.git
cd task-manager-api


### 2. Install dependencies
bash
npm install


### 3. Add .env file
Create a .env file in the root directory with the following:

MONGO_URI=your_mongo_connection_string
PORT=3000


### 4. Run the app
bash
npm start


---

## 🔗 API Endpoints

| Method | Route               | Description         |
|--------|--------------------|---------------------|
| GET    | /api/tasks        | Get all tasks       |
| POST   | /api/tasks        | Create a task       |
| GET    | /api/tasks/:id    | Get a specific task |
| PUT    | /api/tasks/:id    | Update a task       |
| DELETE | /api/tasks/:id    | Delete a task       |

---

## 👩‍💻 Author

*Mayar Batrawi*  
Backend Developer in training, specializing in scalable APIs and cloud-integrated solutions.  
[LinkedIn](https://linkedin.com/in/mayar-batrawi-49b45524a) • [GitHub](https://github.com/MayarBatrawi99)

---

## ⭐ Status

This project is under active development as part of my transition into backend engineering, aiming to join high-impact teams like *Careem* in UAE by Summer 2025.