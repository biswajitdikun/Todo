# Todo List Application

A full-stack Todo List application built with Node.js, Express, MongoDB, React, and Material-UI.

## Features

- User authentication (register/login)
- JWT-based authentication
- CRUD operations for tasks
- Responsive design
- Modern UI with Material-UI components
- Protected routes
- MongoDB database integration
- RESTful API endpoints

## Project Structure

```
.
├── backend/           # Node.js/Express backend
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   ├── middleware/   # Custom middleware
│   └── server.js     # Main server file
└── frontend/         # React frontend
    ├── src/
    │   ├── components/  # Reusable components
    │   ├── context/     # React context providers
    │   ├── pages/       # Page components
    │   ├── services/    # API services
    │   └── App.js       # Main application component
    └── public/          # Static files
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm (v6 or higher)

## Quick Start

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd todo-list-app
   ```

2. Install MongoDB (if not already installed):
   ```bash
   # macOS
   brew tap mongodb/brew
   brew install mongodb-community
   brew services start mongodb/brew/mongodb-community

   # Other operating systems: visit https://www.mongodb.com/try/download/community
   ```

3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

4. Create a `.env` file in the backend directory:
   ```
   PORT=5001
   MONGODB_URI=mongodb://localhost:27017/todo-app
   JWT_SECRET=your-super-secret-key-change-this-in-production
   ```

5. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

## Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```
   The backend server will run on http://localhost:5001

2. In a new terminal, start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```
   The frontend application will be available at http://localhost:3000

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user

### Tasks
- GET `/api/tasks` - Get all tasks for the authenticated user
- POST `/api/tasks` - Create a new task
- PUT `/api/tasks/:id` - Update a task
- DELETE `/api/tasks/:id` - Delete a task

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- cors for cross-origin resource sharing
- dotenv for environment variables

### Frontend
- React (Create React App)
- React Router DOM for routing
- Material-UI for UI components
- Axios for API requests
- Context API for state management

## Development

For detailed information about installing dependencies and setting up the development environment, please refer to the `dependencies.md` file.

### Running in Development Mode
- Backend: `npm run dev` - Runs with nodemon for auto-reloading
- Frontend: `npm start` - Runs with webpack dev server

### Building for Production
```bash
cd frontend
npm run build
```

## Features Implemented

1. User Authentication
   - User registration with username, email, and password
   - Secure login with JWT
   - Protected routes
   - Automatic token management

2. Task Management
   - Create new tasks
   - View all tasks
   - Update existing tasks
   - Delete tasks
   - Mark tasks as complete/incomplete

3. Security Features
   - Password hashing
   - JWT-based authentication
   - Protected API endpoints
   - User-specific data access

4. UI/UX Features
   - Responsive design
   - Material Design components
   - Form validation
   - Loading states
   - Error handling
   - User feedback

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## Troubleshooting

1. Port Conflicts
   - Backend default port: 5001 (configurable in .env)
   - Frontend default port: 3000

2. MongoDB Connection
   - Ensure MongoDB is running: `brew services list`
   - Check MongoDB connection string in .env

3. Common Issues
   - Port already in use: Change port in .env file
   - MongoDB not running: Start with `brew services start mongodb/brew/mongodb-community`
   - Node modules missing: Run `npm install` in both frontend and backend directories
