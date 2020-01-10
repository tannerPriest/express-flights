const airModel = require('../models/airline-m');

const create = (req, res) => {
    airModel.findById(req.params.id, (err, dest) => {
    dest.arrive.push(req.body); 
    dest.save((err) =>{
        if(err){
            console.log(`HAD ERR AT SAVE${err}`)
        }
        res.redirect(`/airline/${dest._id}`); 
        });

    }); 
}; 

module.exports = {
    create
};