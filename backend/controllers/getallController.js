const Task = require("../models/Task");

exports.getTasks = async (req, res) => {

    const tasks = await Task.find();
    res.json(tasks)

};

//single task
exports.getdetail = async (req, res) => {
    try {
      const taskId = req.params.id;
      const tasks = await Task.findById(taskId);
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to fetch tasks', error: error.message });
    }
  };
