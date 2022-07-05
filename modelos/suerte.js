const mongoose = require('mongoose');

const suerteSchema = new mongoose.Schema({
    userID: {type: String, require: true, unique: true},
    dinero: {type: Number, default: 1000},
    banco: {type: Number, default: 100},
    daily: String,
    work: String,
})

const model = mongoose.model("suerte", suerteSchema);

module.exports = model;