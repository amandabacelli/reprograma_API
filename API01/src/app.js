const express = require ('express')
const app = express()

//app contem as rotas da api
const index = require('./routes/index') 
const alunas = require('./routes/alunasRoute')
const professoras = require('./routes/professorasRoute')

// app.all("*",function(req, res, next){ //app.all mostra quantas vezes a api foi requisitada dentre outras coisas.
//     //next faz o código ir para a proxima função
//     next()
//     console.log("foi feita uma req")
// })

//para aceitar todas as rotas do dominio:
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    
    )
    next()
})

app.use('/', index) //use recebe o parametro da url - home
app.use("/alunas", alunas)
app.use("/professoras", professoras)


module.exports = app //para eu usar essa classe em outra classe, preciso exportar e importar no arquivo que eu quero usar
