var mongoose = require("mongoose");

var V = new mongoose.Schema({
    name: String,
    age: Number,
    occupation: String
});

module.exports = mongoose.model("data", V);