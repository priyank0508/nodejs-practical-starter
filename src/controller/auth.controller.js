const validateSignupData = require("../validation/auth.validation");
const authService = require('../services/auth.service')

module.exports.resgister = async (req,res, next) => {
    try {
        validateSignupData(req.body)
        authService.register()
    } catch (error) {
        next(error)
    }
}

module.exports.fileUpload = async (req, res, next) => {
    try {
        console.log('==============fileUpload==========', req.file)
        return res.send({ message: 'File upload api called.' })
    } catch (error) {
        next(error)
    }
}