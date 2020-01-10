var express = require('express');
var router = express.Router();
const airCtrl = require('../controllers/airline-c');
const destCrtl = require('../controllers/destination')

router.get('/', airCtrl.index);
router.get('/new', airCtrl.new);
router.get('/:id', airCtrl.show);

router.post('/', airCtrl.create);
router.post('/:id', destCrtl.create);

module.exports = router;