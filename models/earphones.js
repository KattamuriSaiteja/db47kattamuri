const mongoose = require("mongoose")
const earphonesSchema = mongoose.Schema({
    brand: {
        type: String,
        minLength: 4
    },
    earbudsModel: {
        type: String,
        minLength: 4
    },
    jackMM: Number
})
module.exports = mongoose.model("Earphones",
    earphonesSchema)
