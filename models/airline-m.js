const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const airSchema = new Schema({
    title:  {
        type: String,
        enum: ['American', 'Southwest' & 'United'],
        required: true
        },
    departDate: {
        type: Number,
        default: function() {
            return new Date().getFullYear() + 1;
        },
        }, 
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('Airline', airSchema);