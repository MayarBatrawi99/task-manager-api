const experss= require('express');
const router = experss.Router();
const {
    getTasks,
    creatTask,
    getTask,
    updateTask,
    deleteTask
} = require('../controllers/taskController');

router.route('/')
.get(getTasks)
.post(creatTask);

router.route('/:id')
.get(getTask)
.put(updateTask)
.delete(deleteTask);

module.exports= router;