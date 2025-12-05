# Task Tracker – MERN Stack Application

This project is a full-stack task management system built using the MERN stack (MongoDB, Express.js, React.js, Node.js).  
It was developed as part of an internship assignment to demonstrate skills in backend REST API development, frontend integration, authentication handling, state management, and full CRUD functionality.

The application allows users to register, log in, create tasks, manage task details, update progress, and apply filtering and searching for better task organization.

## Features

### Authentication
- User registration (signup)  
- User login with JWT authentication  
- Protected API routes that require valid tokens  
- Persistent session using localStorage  
- Logout functionality  

### Task Management (CRUD)
- Create a new task with title, description, status, and priority  
- View a list of tasks  
- Edit an existing task  
- Delete a task  
- Auto-refresh after creation, updation, or deletion  

### Additional Functionalities
- Search tasks by title or description  
- Filter tasks by status (To Do, In Progress, Done)  
- Priority selection (Low, Medium, High)  
- Responsive and simple UI for ease of use  

## Tech Stack

### Frontend
- React.js (Functional Components + Hooks)  
- Axios (API communication)  
- React Router (Page routing)  
- CSS (Basic styling)  

### Backend
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- bcryptjs (Password hashing)  
- JSON Web Token (JWT)  

## Backend Setup

1. Install dependencies

cd frontend
npm install


2. Start React development server


npm start

The frontend runs on `http://localhost:3000`

## API Endpoints

### Authentication Routes
- POST `/api/auth/signup` : Register a new user  
- POST `/api/auth/login` : Login and receive token  

### Task Routes (Protected)
- GET `/api/tasks` : Get all tasks  
- POST `/api/tasks` : Create a new task  
- PUT `/api/tasks/:id` : Update a specific task  
- DELETE `/api/tasks/:id` : Delete a specific task  

All task routes require the header:


Authorization: token


## How the Application Works

### User Authentication Flow
- User signs up with email and password  
- Password is hashed using bcryptjs  
- On login, backend validates credentials  
- Backend generates JWT  
- Token is stored in browser localStorage  
- Token is sent in headers to access protected APIs  

### Task Management Flow
- After login, the dashboard fetches all tasks using the stored token  
- User can create, edit, or delete tasks  
- Search bar filters tasks dynamically  
- Status filter narrows down tasks  
- Every operation updates the UI immediately  

## Deployment (Optional)
- Backend can be deployed to Render and frontend to Vercel  
- Set environment variables on Render  
- Update API URLs in frontend  
- Run `npm run build` for frontend  
- Connect GitHub repository  
- Add deployment links after hosting  

## How to Contribute
- Fork the repository  
- Create a new branch  
- Make necessary changes  
- Create a pull request  

## Conclusion
This project demonstrates the implementation of a complete MERN stack application with authentication, CRUD operations, state management, API handling, and UI integration.  
It fulfills all the requirements of the internship assignment and showcases full-stack development capabilities.
