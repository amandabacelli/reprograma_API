const express = require("express")
const router = express.Router()
const controller = require("../controllers/alunasController")

//rotas - a ordem das rotas interfere

router.get('/', controller.get)
router.get('/nasceuSP', controller.getSp)
router.get('/:id', controller.getById) //:id significa que vai receber algo, logo qdo coloca a url no postman, coloca o numero do id que quero
router.get('/:id/idade', controller.getIdade)
router.get('/:id/books', controller.getBooks)
router.post('/', controller.post)
router.post('/:id/books', controller.postBooks)

module.exports = router