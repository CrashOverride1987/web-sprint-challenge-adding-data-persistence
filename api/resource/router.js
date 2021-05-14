// build your `/api/resources` router here
const resourceRouter = require('express').Router()

resourceRouter.post('/', async (req, res, next) => {
    try {
        const newResource = await resourceRouter.create(req.body.trim())
        res.status(201).json(newResource)
    } catch (err) {
        next(err)
    }
})
resourceRouter.get('/', async (req, res, next) => {
    try {
        const resources = await resourceRouter.getAll();
        res.json(resources)
    } catch (err) {
        next(err)
    }
})

resourceRouter.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong in the Resources router',
        message: err.message,
        stack: err.stack
    })
})
module.exports = resourceRouter