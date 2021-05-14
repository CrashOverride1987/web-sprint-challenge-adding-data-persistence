// build your `/api/tasks` router here
const taskRouter = require('express').Router()

taskRouter.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong in the Tasks router',
        message: err.message,
        stack: err.stack
    })
})

taskRouter.post('/', async (req, res, next) => {
    try {
        const newTask = await taskRouter.create(req.body.trim())
        res.status(201).json(newTask)
    } catch (err) {
        next(err)
    }
})
taskRouter.get('/', async (req, res, next) => {
    try {
        const tasks = await taskRouter.getAll();
        res.json(tasks)
    } catch (err) {
        next(err)
    }
})


module.exports = taskRouter