// build your `/api/projects` router here
const projectRouter = require('express').Router()

projectRouter.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong in the Project router',
        message: err.message,
        stack: err.stack
    })
})

projectRouter.post('/', async (req, res, next) => {
    try {
      const newProject = await projectRouter.create(req.body.trim())
      res.status(201).json(newProject)
    } catch (err) {
      next(err)
    }
  })
  projectRouter.get('/', async (req, res, next) => {
    try {
      const projects = await projectRouter.getAll();
      res.json(projects)
    } catch (err) {
      next(err)
    }
  })
module.exports = projectRouter