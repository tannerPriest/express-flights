const airModel = require('../models/airline-m');

const create = (req, res) => { 
    airModel.findById(req.params.id, (err, dest) => {
    dest.arrive.push(req.body); 
    dest.save((err) =>{ 
        res.redirect(`/airlines/${req.params.id}`); 
        }); 
    }); 
}; 

module.exports = {
    create
};