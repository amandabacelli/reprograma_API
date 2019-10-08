const express = require ('express')
const app = express()

//app contem as rotas da api
const index = require('./routes/index') 
const alunas = require('./routes/alunasRoute')

app.use('/', index) //use recebe o parametro da url - home
app.use("/alunas", alunas)

module.exports = app //para eu usar essa classe em outra classe, preciso exportar e importar no arquivo que eu quero usar
