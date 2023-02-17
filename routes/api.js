const express = require("express")
const router = express.Router()
const controllerApi = require("../controller/apiController")
const {check} = require("express-validator")
const {validarID} = require("../middleware/validarId")

router.post('/crear',[
    check("nombre").not().isEmpty().withMessage("El campo nombre es requerido"),
    check("stock").not().isEmpty().withMessage("El campo stock es requerido"),
    check("precio").not().isEmpty().withMessage("El campo precio es requerido"),
    check("presentacion").not().isEmpty().withMessage("El campo presentacion es requerido"),
    check("prescripcion").not().isEmpty().withMessage("El campo prescripcion es requerido"),
],controllerApi.guardarMedicamento)

router.get('/vertodo',controllerApi.vistaDeTodos)
router.get('/ver/:nombre',validarID,controllerApi.vistaIndividual)

module.exports = router