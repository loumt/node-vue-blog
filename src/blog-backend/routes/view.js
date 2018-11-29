const express =require('express')
const router = express.Router()

const PageController = require('./../controller/PageController')

router.all('/',PageController.toHome)

module.exports = router
