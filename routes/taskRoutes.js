const experss= require('express');
const router = experss.Router();
const {
    getTasks,
    creatTask,
    getTask,
    updateTask,
    deleteTask
} = require('../controllers/taskController');

//Route to get all tasks and create a task
router.route('/')
.get(getTasks)
.post(creatTask);

// Route to get a single task, update a task, and delete a task
router.route('/:id')
.get(getTask)
.put(updateTask)
.delete(deleteTask);

module.exports= router;