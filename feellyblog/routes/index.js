var express = require('express');
var router = express.Router();


//rcp
const rcp = require('./module/rcp/rcp');
//clipboard
const clip = require('./module/clipboard/clipboard');

/* GET home page. */
router.get('/', function(req, res, next) {
  //vue page
  res.render('mainPage');
});

rcp(router);

clip(router);



module.exports = router;
