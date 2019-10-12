const express = require("express")
const router = express.Router()
const controller = require("../controllers/professorasController")

router.get('/', controller.getNoCpf)
router.get('/:id', controller.getIdProfa)


module.exports = router