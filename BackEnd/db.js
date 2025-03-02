const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://sdev255:password@songdb.fih00.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true})

module.exports = mongoose