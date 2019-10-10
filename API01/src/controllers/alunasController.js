const alunas = require('../model/alunas.json') //o controller eh ligado a um model
//no controller são definidos os métodos

exports.get = (req, res) => { //não precisa colocar o module, dado que já está exportando.
    //get especifica o verbo http que estamos usando na função
    console.log(req.url)
    res.status(200).send(alunas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    if(id > 17 || id <= 0){
        // res.send("id nao encontrado")
         //redirect serve para direcionar a aplicação para outra url
        res.redirect(301, "https://www.google.com.br")
    }else{
        console.log (id)
        res.status(200).send(alunas.find(aluna => aluna.id == id))
        
    }
}

exports.getBooks = (req,res) => {
    const id = req.params.id //pegar o id da aluna
    const aluna = alunas.find(aluna => aluna.id == id)
    
    if(!aluna){
        res.send("aluna nao encontrada")
    }
    
    console.log(aluna)
    const livros = aluna.livros
    const titulosLivros = livros.map(function(element){
        return element.titulo
    })
    // const tituloLivros = livros.map(element => element.titulo)
   
    res.status(200).send(titulosLivros)

}

exports.getSp =  (req,res) => {
    // const nasceuSP = alunas.filter(element => element.nasceuEmSp.indexOf("true")>-1) //com indexof
    const nasceuSP = alunas.filter(element => element.nasceuEmSp == "true")
    const listaSP = nasceuSP.map(element => element.nome)
    res.status(200).send(listaSP)
}  