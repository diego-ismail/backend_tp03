const {Pharma} = require("../models/pharma")
const validarID = async(req, res, next)=>{
    try {
        const item = await Pharma.findOne({nombre : req.params.nombre})
        if (item !== null) {
            next()
        } else {
            res.status(500).json({msg: "el nombre es invalido"})
        }  
        
    } catch (error) {
        res.status(501).json(error)
    } 
}

module.exports = {validarID}