const mongoose = require("mongoose")
const earphonesSchema = mongoose.Schema({
    brand: String,
    earbudsModel: String,
    jackMM: Number
})
module.exports = mongoose.model("Earphones",
    earphonesSchema)
