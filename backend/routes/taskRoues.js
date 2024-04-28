// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

// Middleware to verify JWT token


// Task routes
router.post('/add', taskController.createTask);
router.get('/', taskController.getAllTasks);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);
router.get('/:id', taskController.getSingle);
router.get('/userd/:id', taskController.getUserDetail);


module.exports = router;
