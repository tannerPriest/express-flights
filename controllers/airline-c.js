const airModel = require('../models/airline-m');

const index = (req, res) => {
    res.render('airline-v/index');
};
  
const newFlight = (req, res) => {
    res.render('airline-v/new')
}
const create = (req, res) => {
    req.body.nowShowing = !!req.body.nowShowing
    req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',')
    if (req.body.cast) req.body.cast = req.body.cast.split(',')
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
      }
    const flight = new airModel(req.body)
    flight.save(function(err) {
      if (err) return res.render('error')
      console.log(flight)
      res.redirect('/airline')
    })
  }
module.exports = {
    index,
    new: newFlight,
    create,
} 