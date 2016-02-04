var express = require('express');
var router = express.Router();
var controller =  require('./movie.controller.js');
/* GET home page. */
router.get('/',controller.index);
router.post('/', controller.create);
module.exports = router;
