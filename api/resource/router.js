// build your `/api/resources` router here
const resourceRouter = require('express').Router()

resourceRouter.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong in the Resources router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = resourceRouter