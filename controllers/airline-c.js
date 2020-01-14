const airModel = require('../models/airline-m');
const ticketModel = require('../models/ticket-m')

const index = (req, res) => {
    airModel.find({}, (err, flight) => {
        if(err){
            res.render('error')
            return console.log(err)
        } 
        res.render('airline-v/index', {
            list: flight,
        }); 
    })
};
const newFlight = (req, res) => {
    res.render('airline-v/new')
}
const create = (req, res) => {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
      }
    const flight = new airModel(req.body)
    flight.save(function(err) {
      if (err) return console.log("GETTING TO airCtrl.create ERROR"), res.render('error')
      res.redirect('/airline');
    })
  }
const show = (req, res) => {
    airModel.findById(req.params.id)
    .populate('ticket').exec( (err, flight) => {
        // Performer.find({}).where('_id').nin(movie.cast)
        ticketModel.find({_id: {$nin: flight.ticket}},(err, seat) => {
            res.render('airline-v/show', {  
                flight: flight
              });
          }
        );
      });
};

module.exports = {
    index,
    new: newFlight,
    create,
    show,
} 