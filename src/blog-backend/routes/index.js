var express = require('express');
var router = module.exports = express.Router();

router.use('/',require('./view'))

router.use('/api',require('./api'))
