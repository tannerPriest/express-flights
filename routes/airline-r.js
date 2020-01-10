var express = require('express');
var router = express.Router();
const airCtrl = require('../controllers/airline-c')

router.get('/', airCtrl.index);
router.post('/', airCtrl.create);
router.get('/new', airCtrl.new);

module.exports = router;