const airModel = require('../models/airline-m');
const ticketModel = require('../models/ticket-m')

const addToFlight = (req, res) => {
    airModel.findById(req.params.id, (err, flight) => {
        if(err){console.log('err')}
    flight.ticket.push(req.body.ticketId);
    flight.save( err => {
    res.redirect(`/airline/${flight._id}`);
    });
    });
    }

const create = (req, res) => {
    ticketModel.create(req.body, (err, ticket) => {
        res.redirect('/airline/tickets/new');
    });
}
const index = (req, res) => {
    ticketModel.find({}, (err, flight) => {
        res.render('airline-v/ticket', {  
            ticket: flight
          });
      }); 
}

module.exports = {
    create,
    index,
    addToFlight,
}