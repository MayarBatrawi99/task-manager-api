const Task= require('../models/taskModel');

exports.getTasks= async (req,res)=>{
    const tasks = await Task.find();
    res.json(tasks);
};

exports.creatTask= async (req,res) =>{
    const task= await Task.create(req.body);
    res.status(201).json(task);
};

exports.getTask= async (req,res) =>{
    const task= await Task.findById(req.params.id);

    if(!task) return res.status(404).json({message:'Task not found'});
    res.json(task)
};

exports.updateTask= async (req,res) =>{
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true});

    if(!task) return res.status(404).jsom({message:'Task not found'});
    res.json(task)
};

exports.deleteTask= async (req,res) =>{
    const task= await Task.findByIdAndDelete(req.params.id);

    if(!task) return res.status(404).jsom({message:'Task not found'});
    res.json({message:'Task Deleted'})
};
