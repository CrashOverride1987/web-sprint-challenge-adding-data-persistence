const express = require('express')
const projectRouter = require('./projects/router')
const resourceRouter = require('./resources/router')
const taskRouter = require('./tasks/router')

const server = express()

server.use(express.json())


server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)
server.use('*', (req, res) => {
    res.json({ api: 'up'})
})
module.exports= {server}