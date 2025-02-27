const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://sdev255:password255@songdb.fih00.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true})

module.exports = mongoose