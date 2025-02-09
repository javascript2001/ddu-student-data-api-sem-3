const mongoose = require("mongoose");

const userSchema =  new mongoose.Schema({
    id: String,
    rollNumber: Number,
    name: String

}, 
{  
  collection: "ddu students"
}
)
const User = mongoose.model("ddu students", userSchema);

module.exports = User;