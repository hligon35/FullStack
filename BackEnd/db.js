const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://bemily1:7skVyX1Ljg64JqA0@testcluster.xh7xg.mongodb.net/SongDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

module.exports = mongoose;