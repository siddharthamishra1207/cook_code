// controllers/taskController.js
const Task = require('../models/Task');
const User = require('../models/User');

// Create task controller
exports.createTask = async (req, res) => {
  try {
    
    const { title, description, recipes, ingredients,name ,timecook } = req.body;
    const userId = req.params.id;
    const newTask = await Task.create({ title, description, user: userId ,recipes ,ingredients,name,timecook });
    res.status(201).json({ success: true, message: 'Task created successfully', data: newTask });
    console.log(req.url)
  } catch (error) {
    res.status(500).json({ success: false, message: 'Task creation failed', error: error.message });
  }
};



// Get all tasks controller
exports.getAllTasks = async (req, res) => {
  try {
    const userId = req.user.userId;
    const tasks = await Task.find({ user: userId });
    res.status(200).json({ success: true, message: 'Tasks fetched successfully', data: tasks });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch tasks', error: error.message });
  }
};

// Update task controller
exports.updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, description, recipes, ingredients,name ,timecook  } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(taskId, { title, description, recipes, ingredients,name ,timecook }, { new: true });
    res.status(200).json({ success: true, message: 'Task updated successfully', data: updatedTask });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Task update failed', error: error.message });
  }
};

// Delete task controller
exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    await Task.findByIdAndDelete(taskId);
    res.status(200).json({ success: true, message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Task deletion failed', error: error.message });
  }
};


//single task
exports.getSingle = async (req, res) => {
  try {
    const taskId = req.params.id;
    const tasks = await Task.findById(taskId);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch tasks', error: error.message });
  }
};

//user details

exports.getUserDetail = async (req, res) => {
  try {
    const userId = req.params.id;
    const userD = await User.findById(userId);


    res.status(200).json(userD);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch tasks', error: error.message });
  }
};