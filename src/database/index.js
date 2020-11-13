const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/breatherest', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
