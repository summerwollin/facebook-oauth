var express = require('express');
var router = express.Router();
var unirest = require('unirest');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(process.env.HOST);
  res.render('index', { title: 'Express' });
});

module.exports = router;
