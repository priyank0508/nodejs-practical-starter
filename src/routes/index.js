const routes = require('express').Router()
const authRouter = require('./auth.routes')

routes.use('/auth', authRouter)

module.exports = routes