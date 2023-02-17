const mongoose = require("mongoose")
const Schema = mongoose.Schema
const schema = new Schema({
    nombre:{
        type: String,
        required: true,
        unique:true
    },
    stock:{
        type: Number,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    presentacion:{
        type: String,
        required: true
    },
    prescripcion:{
        type: Boolean,
        required: true
    }

})
const Pharma = mongoose.model("Pharma", schema)
module.exports = { Pharma }