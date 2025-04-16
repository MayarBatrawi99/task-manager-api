const Task= require('../models/taskModel');

//Get all tasks
exports.getTasks= async (req,res)=>{
    const tasks = await Task.find();
    res.json(tasks);
};

// Create a new task
exports.creatTask= async (req,res) =>{
    const task= await Task.create(req.body);
    res.status(201).json(task);
};

// Get a specific task by id
exports.getTask= async (req,res) =>{
    const task= await Task.findById(req.params.id);

    if(!task) return res.status(404).json({message:'Task not found'});
    res.json(task)
};

// Update a task by id
exports.updateTask= async (req,res) =>{
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true});

    if(!task) return res.status(404).jsom({message:'Task not found'});
    res.json(task)
};

// Delete a task by id
exports.deleteTask= async (req,res) =>{
    const task= await Task.findByIdAndDelete(req.params.id);

    if(!task) return res.status(404).jsom({message:'Task not found'});
    res.json({message:'Task Deleted'})
};
