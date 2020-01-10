const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const airSchema = new Schema({
    title:  {
        type: String,
        // enum: ['American', 'Southwest' & 'United'],
        required: true
        },
    departDate: {
        type: String,
        default: function() {
            return new Date()
        },
        }, 
    flightNum: {
        type: Number,
        default: function(){
            return Math.floor(Math.random() * 10000)
        }
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('Airline', airSchema);