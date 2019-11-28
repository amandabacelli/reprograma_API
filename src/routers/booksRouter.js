const express = require('express')
const router = express.Router()

const controller = require('../controllers/booksController')

router.get('/', controller.get)
router.get('/:year/bookuser/:id', controller.getUsersBooks)

module.exports = router