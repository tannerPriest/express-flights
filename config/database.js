const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/airline', {useNewUrlParser: true, useCreateIndex: true});

const db = mongoose.connection;

db.on('connected',() => {
console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});


