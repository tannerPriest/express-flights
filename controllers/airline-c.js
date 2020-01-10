const airModel = require('../models/airline-m');

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
      console.log(flight);
      res.redirect('/airline');
    })
  }

module.exports = {
    index,
    new: newFlight,
    create,
} 