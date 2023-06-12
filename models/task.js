// models/task.js

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['in progress', 'completed'],
    default: 'in progress',
  },
});

module.exports = mongoose.model('Task', taskSchema);
