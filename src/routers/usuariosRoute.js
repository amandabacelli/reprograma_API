const express = require('express')
const router = express.Router()

const controller = require('../controllers/usuariosController')

router.get('/', controller.get)
router.get('/:id', controller.getId)

module.exports = router