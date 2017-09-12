var express = require('express');
var router = express.Router();
var bookcontroller = require('../Http/Controllers/bookcontroller');

router.get('/books',bookcontroller.index);

module.exports = router;
