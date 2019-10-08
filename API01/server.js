const app = require('./src/app') //importar a classe que quero usar
const port = 3000

//criar servidor local
app.listen(port, function(){
    console.log(`app ta rodando na porta ${port}`)
})
