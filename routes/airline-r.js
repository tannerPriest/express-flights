const express = require('express');
const router = express.Router();
const airCtrl = require('../controllers/airline-c');
const destCtrl = require('../controllers/destination')
const ticketCtrl = require('../controllers/ticket-c')

router.get('/', airCtrl.index);
router.get('/new', airCtrl.new);
router.get('/:id', airCtrl.show);
router.get('/tickets/new', ticketCtrl.index)

router.post('/', airCtrl.create);
router.post('/ticket', ticketCtrl.create)
router.post('/:id', destCtrl.create);
router.post('/:id/ticket', ticketCtrl.addToFlight);

module.exports = router;