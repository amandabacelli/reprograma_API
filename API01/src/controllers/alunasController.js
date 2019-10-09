const alunas = require('../model/alunas.json') //o controller eh ligado a um model

exports.get = (req, res) => { //não precisa colocar o module, dado que já está exportando.
    //get especifica o verbo http que estamos usando na função
    console.log(req.url)
    res.status(200).send(alunas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    console.log (id)
    res.status(200).send(alunas.find(aluna => aluna.id == id))
}

exports.getBooks = (req,res) => {
    const id = req.params.id //pegar o id da aluna
    const aluna = alunas.find(aluna => aluna.id == id)
    console.log(aluna)
    const livros = aluna.livros
    const titulosLivros = livros.map(function(element){
        return element.titulo
    })
   
    res.status(200).send(titulosLivros)

}