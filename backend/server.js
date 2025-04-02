const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

// Create Express app
const app = express();

// Middleware
app.use(cors({
  origin: config.CORS_ORIGIN
}));
app.use(express.json());

// MongoDB connection
mongoose.connect(config.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use(`${config.API_PREFIX}/auth`, require('./routes/auth'));
app.use(`${config.API_PREFIX}/tasks`, require('./routes/tasks'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
  });
}

module.exports = app; 