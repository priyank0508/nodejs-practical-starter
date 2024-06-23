const authRoutes = require('express').Router()
const { resgister, fileUpload } = require('../controller/auth.controller')
const imageUpload = require('../middleware/multer.middleware')


authRoutes.post('/register', resgister)
authRoutes.post('/upload-file', imageUpload.single('file'), fileUpload)
// 

module.exports = authRoutes