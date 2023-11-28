const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
flavour: String,
quantity: Number,
price: {
    type: Number,
    min: [0, 'icecream price must be greater than 0'],  
    max: [15, 'icecream price must be less than 15'], 
    required: [true, 'icecream price is required'] 
}
})
module.exports = mongoose.model("icecream",icecreamSchema)