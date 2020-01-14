const airModel = require('../models/airline-m');
const ticketModel = require('../models/ticket-m')

const create = (req, res) => {
    airModel.create(req.body, (err, flight) => {
        res.redirect(`/airline/${flight._id}`);
    });
}
const create = (req, res) => {
    ticketModel.create(req.body, (err, ticket) => {
        res.redirect('/performers/new');
    });
}
const index = (req, res) => {
    airModel.findById(req.params.id, (err, seat) => {
        res.render('airline-v/ticket', {  
            flight: seat
          });
      }); 
}

module.exports = {
    create,
    index,
}