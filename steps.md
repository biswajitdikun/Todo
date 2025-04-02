# Steps to Generate Todo List Application

## Initial Setup

1. Create project directories:
```bash
mkdir -p frontend backend
```

2. Install Node.js (if not already installed):
```bash
brew install node
```

3. Install MongoDB (if not already installed):
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb/brew/mongodb-community
```

## Backend Setup

1. Navigate to backend directory and initialize Node.js project:
```bash
cd backend
npm init -y
```

2. Install backend dependencies:
```bash
npm install express mongoose bcryptjs jsonwebtoken cors dotenv
npm install --save-dev nodemon jest supertest
```

3. Create backend directory structure:
```bash
mkdir -p models routes middleware config tests
```

4. Create backend files:
```bash
# Create server.js
touch server.js

# Create model files
touch models/User.js
touch models/Task.js

# Create route files
touch routes/auth.js
touch routes/tasks.js

# Create middleware file
touch middleware/auth.js

# Create config file
touch config.js

# Create environment file
touch .env

# Create test files
touch tests/auth.test.js
touch tests/tasks.test.js
```

5. Configure environment variables (.env):
```
PORT=5001
MONGODB_URI=mongodb://localhost:27017/todo-app
JWT_SECRET=your-super-secret-key-change-this-in-production
```

## Frontend Setup

1. Navigate to frontend directory and create React app:
```bash
cd ../frontend
npx create-react-app .
```

2. Install frontend dependencies:
```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material axios react-router-dom
```

3. Create frontend directory structure:
```bash
mkdir -p src/components src/context src/services src/pages src/utils
```

4. Create frontend files:
```bash
# Create context file
touch src/context/AuthContext.js

# Create service file
touch src/services/taskService.js

# Create component file
touch src/components/PrivateRoute.js

# Create page files
touch src/pages/Login.js
touch src/pages/Register.js
touch src/pages/Tasks.js

# Create config file
touch src/config.js
```

## Root Directory Setup

1. Create root level files:
```bash
cd ..
touch README.md
touch .gitignore
```

2. Configure .gitignore:
```
# Dependencies
node_modules/
/.pnp
.pnp.js

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build files
/build
/dist

# Debug logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE files
.idea/
.vscode/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db
```

## Running the Application

1. Start MongoDB (if not already running):
```bash
brew services start mongodb/brew/mongodb-community
```

2. Start the backend server:
```bash
cd backend
npm run dev
```

3. In a new terminal, start the frontend development server:
```bash
cd frontend
npm start
```

## Testing

1. Run backend tests:
```bash
cd backend
npm test
```

2. Test API endpoints using curl or Postman:
```bash
# Register a new user
curl -X POST http://localhost:5001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "email": "test@example.com", "password": "password123"}'

# Login
curl -X POST http://localhost:5001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "password123"}'

# Create a task (replace <token> with JWT token)
curl -X POST http://localhost:5001/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{"title": "Test Task", "description": "This is a test task"}'
```

## Verifying the Setup

1. Backend Verification:
```bash
# Check if MongoDB is running
brew services list | grep mongodb

# Check if backend is running
curl http://localhost:5001/api/tasks
# Should receive: {"message":"Please authenticate."}
```

2. Frontend Verification:
- Open http://localhost:3000 in your browser
- Should see the login page
- Try registering a new user
- Try logging in
- Try creating, editing, and deleting tasks

## Troubleshooting

1. If port 5001 is in use:
```bash
# Find process using port 5001
lsof -i :5001
# Kill the process
kill -9 <PID>
```

2. If MongoDB fails to start:
```bash
# Stop MongoDB service
brew services stop mongodb/brew/mongodb-community
# Start MongoDB service
brew services start mongodb/brew/mongodb-community
# Check MongoDB status
brew services list
```

3. If node_modules are missing or corrupted:
```bash
# In backend directory
cd backend
rm -rf node_modules
npm install

# In frontend directory
cd frontend
rm -rf node_modules
npm install
```

## File Contents

After creating all the files, the contents of each file were added as shown in the attached files. The main files created were:

### Backend
- server.js
- models/User.js
- models/Task.js
- routes/auth.js
- routes/tasks.js
- middleware/auth.js
- .env
- package.json
- README.md

### Frontend
- src/App.js
- src/context/AuthContext.js
- src/services/taskService.js
- src/components/PrivateRoute.js
- src/pages/Login.js
- src/pages/Register.js
- src/pages/Tasks.js
- README.md

### Root
- README.md
- .gitignore
- dependencies.md
- steps.md 