const airModel = require('../models/airline-m');

const index = (req, res) => {
    res.render('airline-v/index');
};
  
const newFlight = (req, res) => {
    res.render('airline-v/new')
}

module.exports = {
    index,
    new: newFlight,
} 