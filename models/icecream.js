const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
flavour: String,
quantity: Number,
price: Number
})
module.exports = mongoose.model("icecream",icecreamSchema)