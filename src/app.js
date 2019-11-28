const express = require ('express')
const app = express ()

const index = require('./routers/index')
const usuarios = require('./routers/usuariosRoute')
const books = require('./routers/booksRouter')

app.use('/', index)
app.use('/usuarios', usuarios)
app.use('/books', books)

module.exports = app