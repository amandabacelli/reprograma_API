const express = require ('express')
const app = express()

//app contem as rotas da api
const index = require('./routes/index') 
const alunas = require('./routes/alunasRoute')

app.all("*", function(req, res, next){ //app.all mostra quantas vezes a api foi requisitada dentre outras coisas.
    //next faz o código ir para a proxima função
    next()
    console.log("foi feita uma req")
})

app.use('/', index) //use recebe o parametro da url - home
app.use("/alunas", alunas)


module.exports = app //para eu usar essa classe em outra classe, preciso exportar e importar no arquivo que eu quero usar
