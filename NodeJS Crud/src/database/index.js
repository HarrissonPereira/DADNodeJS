const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/apinode');
mongoose.Promise = global.Promise;

module.exports = mongoose;