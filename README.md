Task Tracker – MERN Stack Application

This project is a full-stack task management system built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
It was developed as part of an internship assignment to demonstrate skills in backend REST API development, frontend integration, authentication handling, state management, and full CRUD functionality.

The application allows users to register, log in, create tasks, manage task details, update progress, and apply filtering and searching for better task organization.

1. Features
1.1 Authentication

User registration (signup)

User login with JWT authentication

Protected API routes that require valid tokens

Persistent session using localStorage

Logout functionality

1.2 Task Management (CRUD)

Create a new task with title, description, status, and priority

View a list of tasks

Edit an existing task

Delete a task

Auto-refresh after creation, updation, or deletion

1.3 Additional Functionalities

Search tasks by title or description

Filter tasks by status (To Do, In Progress, Done)

Priority selection (Low, Medium, High)

Responsive and simple UI for ease of use

2. Tech Stack
Frontend

React.js (Functional Components + Hooks)

Axios (API communication)

React Router (Page routing)

CSS (Basic styling)

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

bcryptjs (Password hashing)

JSON Web Token (JWT)

3. Project Structure
task-tracker/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── CreateTask.jsx
│   │   │   └── EditTask.jsx
│   │   ├── App.js
│   │   └── index.js
│
└── README.md

4. Backend Setup
4.1 Install dependencies
cd backend
npm install

4.2 Create .env file

Inside /backend create a .env file:

MONGO_URI=your_mongo_atlas_uri
JWT_SECRET=your_secret_key

4.3 Start backend server
nodemon server.js


Server runs on:
http://localhost:5000

5. Frontend Setup
5.1 Install dependencies
cd frontend
npm install

5.2 Start React development server
npm start


Runs at:
http://localhost:3000

6. API Endpoints
Authentication Routes
Method	Endpoint	Description
POST	/api/auth/signup	Register a new user
POST	/api/auth/login	Login and receive token
Task Routes (Protected)
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create a new task
PUT	/api/tasks/:id	Update a specific task
DELETE	/api/tasks/:id	Delete a specific task

All task routes require the header:

Authorization: token

7. How the Application Works
7.1 User Authentication Flow

User signs up with email and password

Password is hashed using bcryptjs

On login, backend validates credentials

Backend generates JWT

Token is stored in browser localStorage

Token is sent in headers to access protected APIs

7.2 Task Management Flow

After login, the dashboard fetches all tasks using the stored token

User can:

Create new tasks

Edit existing tasks

Delete tasks

Search bar filters tasks dynamically

Status filter narrows down tasks

Every operation updates the UI immediately

8. Deployment (Optional)

If deployed, backend is typically uploaded to Render and frontend to Vercel.

Deployment steps include:

Setting environment variables on Render

Updating API URLs in frontend

Running npm run build for frontend

Connecting GitHub repository

(You can add deployment links here after hosting.)

9. How to Contribute

Fork the repository

Create a new branch

Make necessary changes

Create a pull request

10. Conclusion

This project demonstrates the implementation of a complete MERN stack application with authentication, CRUD operations, state management, API handling, and UI integration.
It fulfills all the requirements of the internship assignment and showcases full-stack development capabilities.
