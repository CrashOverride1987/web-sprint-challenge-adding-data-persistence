// build your `/api/tasks` router here
const taskRouter = require('express').Router()

taskRouter.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong in the Tasks router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = taskRouter