const express = require("express")
const router = express.Router()
const controller = require("../controllers/alunasController")

router.get('/', controller.get)
router.get('/:id', controller.getById) //:id significa que vai receber algo, logo qdo coloca a url no postman, coloca o numero do id que quero
router.get('/:id/books', controller.getBooks)

module.exports = router