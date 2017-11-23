var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mainPage');
});

router.get('/user', function(req, res, next) {
  res.render('index',{title:'Hello Index!!!!'});
});

module.exports = router;
