const config = {
  // API Configuration
  API_URL: 'http://localhost:5001/api',
  
  // Authentication Configuration
  TOKEN_KEY: 'token',
  TOKEN_EXPIRY: '5m',
  
  // App Configuration
  APP_NAME: 'Todo App',
  APP_DESCRIPTION: 'A simple and efficient task management application',
  
  // Routes
  ROUTES: {
    LOGIN: '/login',
    REGISTER: '/register',
    TASKS: '/tasks',
    HOME: '/'
  },
  
  // Theme Configuration
  THEME: {
    PRIMARY_COLOR: '#1976d2',
    SECONDARY_COLOR: '#dc004e'
  }
};

export default config; 