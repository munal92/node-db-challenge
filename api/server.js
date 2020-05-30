const express = require('express');
const ProjectsRouter = require('../Routers/projects-router.js')
const server = express();

server.use(express.json());
server.use('/api/projects', ProjectsRouter);

server.get('/', (req,res) => {
    res.send('<h1>Api is up!</h1>')
})


module.exports = server;