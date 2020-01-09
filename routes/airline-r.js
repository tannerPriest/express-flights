var express = require('express');
var router = express.Router();
const airCtrl = require('../controllers/airline-c')

router.get('/', airCtrl.index);

module.exports = router;