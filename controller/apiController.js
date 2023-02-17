const { Pharma } = require("../models/pharma")
const {validationResult} = require("express-validator")


module.exports = {
    async guardarMedicamento  (req, res) {
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                const medicamento = new Pharma(req.body)
                await medicamento.save()
                res.status(201).json(medicamento)
            } else {
                res.status(501).json(err)
            }
        } catch (error) {
            console.log(error)
            res.status(501).json(error)
        }
    },
    async vistaDeTodos (req, res) {
        const medicamentos = await Pharma.find()//Todos los medicamentos
        res.status(200).json({medicamentos})
    },
    
    async vistaIndividual (req, res) {
        const medicamento = await Pharma.findOne({nombre: req.params.nombre})//busca por el nombre
        res.status(200).json(medicamento)
    },
}