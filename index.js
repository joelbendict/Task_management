const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasks');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set up middleware for JSON parsing
app.use(express.json());

// Define a default route
app.get('/', (req, res) => {
  res.send('Task Management API');
});

// Use task routes
app.use('/api/tasks', taskRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

mongoose.connect('mongodb://localhost/task-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Failed to connect to MongoDB:', error);
});
