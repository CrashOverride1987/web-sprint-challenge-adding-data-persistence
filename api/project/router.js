// build your `/api/projects` router here
const projectRouter = require('express').Router()

projectRouter.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong in the Project router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = projectRouter