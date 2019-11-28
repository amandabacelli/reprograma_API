const express = require("express")
const router = express.Router()
const controller = require("../controllers/professorasController")

router.get('/', controller.getNoCpf)
router.get('/:id', controller.getIdProfa)
router.post('/', controller.post)



module.exports = router