const airModel = require('../models/airline-m');

const index = (req, res) => {
    res.render('airline-v/index');
};
  

module.exports = {
    index,
} 