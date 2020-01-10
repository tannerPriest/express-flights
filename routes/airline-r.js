var express = require('express');
var router = express.Router();
const airCtrl = require('../controllers/airline-c')

router.get('/', airCtrl.index);
router.post('/', airCtrl.create);
router.get('/new', airCtrl.new);
router.get('/:id', airCtrl.show);

module.exports = router;