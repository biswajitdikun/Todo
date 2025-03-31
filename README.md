# Todo List Application

A full-stack Todo List application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring user authentication, task management, and a modern Material-UI interface.

## Features

- 🔐 User Authentication (JWT)
  - Register with username, email, and password
  - Secure login with email and password
  - Password strength validation
  - Automatic token management

- 📝 Task Management
  - Create, read, update, and delete tasks
  - Mark tasks as complete/incomplete
  - User-specific task lists
  - Real-time validation

- 🎨 Modern UI with Material-UI
  - Responsive design
  - User-friendly interface
  - Form validation feedback
  - Loading states and error handling

## Tech Stack

### Frontend
- React 19.1.0
- Material-UI 7.0.1
- React Router DOM 7.4.1
- Axios for API requests
- Context API for state management

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd todo-app
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

## Configuration

### Backend Environment Variables
Create a `.env` file in the backend directory:

```
PORT=5001
MONGODB_URI=mongodb://localhost:27017/todo-app
JWT_SECRET=your-super-secret-key-change-this-in-production
```

### Frontend Environment Variables
The frontend uses a configuration file located at `src/config.js`:

```javascript
const config = {
  API_URL: 'http://localhost:5001/api',
  // other configurations
};
```

## Running the Application

1. Start MongoDB:
   ```bash
   # macOS (using Homebrew)
   brew services start mongodb-community

   # Check MongoDB status
   brew services list
   ```

2. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

3. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5001

## API Documentation

### Authentication Endpoints

#### Register User
```
POST /api/auth/register
Content-Type: application/json

{
    "username": "testuser",
    "email": "test@example.com",
    "password": "Test@123"
}

Response: {
    "user": {
        "_id": "...",
        "username": "testuser",
        "email": "test@example.com"
    },
    "token": "JWT_TOKEN"
}
```

#### Login User
```
POST /api/auth/login
Content-Type: application/json

{
    "email": "test@example.com",
    "password": "Test@123"
}

Response: {
    "user": {
        "_id": "...",
        "username": "testuser",
        "email": "test@example.com"
    },
    "token": "JWT_TOKEN"
}
```

### Task Endpoints

#### Get All Tasks
```
GET /api/tasks
Authorization: Bearer JWT_TOKEN

Response: [
    {
        "_id": "...",
        "title": "Task Title",
        "description": "Task Description",
        "completed": false,
        "createdAt": "2024-03-06T..."
    }
]
```

#### Create Task
```
POST /api/tasks
Authorization: Bearer JWT_TOKEN
Content-Type: application/json

{
    "title": "Task Title",
    "description": "Task Description"
}

Response: {
    "_id": "...",
    "title": "Task Title",
    "description": "Task Description",
    "completed": false,
    "createdAt": "2024-03-06T..."
}
```

#### Update Task
```
PUT /api/tasks/:taskId
Authorization: Bearer JWT_TOKEN
Content-Type: application/json

{
    "title": "Updated Title",
    "description": "Updated Description",
    "completed": true
}

Response: {
    "_id": "...",
    "title": "Updated Title",
    "description": "Updated Description",
    "completed": true,
    "updatedAt": "2024-03-06T..."
}
```

#### Delete Task
```
DELETE /api/tasks/:taskId
Authorization: Bearer JWT_TOKEN

Response: {
    "message": "Task deleted successfully"
}
```

## Data Models

### User Model
```javascript
{
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
}
```

### Task Model
```javascript
{
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}
```

## Security Features

1. Password Requirements:
   - Minimum 8 characters
   - At least one uppercase letter
   - At least one lowercase letter
   - At least one number
   - At least one special character

2. Authentication:
   - JWT-based authentication
   - Token expiration after 5 minutes
   - Secure password hashing using bcrypt
   - Protected routes

3. Data Validation:
   - Server-side validation using Mongoose
   - Client-side form validation
   - Input sanitization

## Error Handling

The application provides user-friendly error messages for:
- Invalid credentials
- Network errors
- Validation errors
- Server errors
- Authentication errors

## Development Tools

### MongoDB Compass
- Connection URL: mongodb://127.0.0.1:27017
- Database Name: todo-app
- Collections: users, tasks

### Postman
- Environment: Todo Local
- Base URL: http://localhost:5001/api
- Collection available in the repository

## Troubleshooting

### Common Issues

1. MongoDB Connection:
```bash
# Check MongoDB status
brew services list

# Restart MongoDB
brew services restart mongodb-community
```

2. Port Already in Use:
```bash
# Find process using port
lsof -i :5001

# Kill process
kill -9 <PID>
```

3. Token Expired:
- Login again to get a new token
- Default expiration is 5 minutes

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request


This project is licensed under the MIT License.
