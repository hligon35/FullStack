const db = require("../db")

// Create a model frm the schema
const User = db.model("User",{
    username: {type:String, required:true},
    password: {type:String, required:true},
    status: String
})

module.exports = User;