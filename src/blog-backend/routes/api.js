const express =require('express')
const router = module.exports  = express.Router()

const FileController =  require('./../controller/FileController')

router.post('/upload',FileController.upload);
