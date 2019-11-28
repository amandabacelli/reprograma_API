const alunas = require('../model/alunas.json') //o controller eh ligado a um model
//no controller são definidos os métodos
const fs = require('fs') //fileSystem para guardar as informações no sistema

exports.get = (req, res) => { //não precisa colocar o module, dado que já está exportando.
    //get especifica o verbo http que estamos usando na função
    console.log(req.url)
    res.status(200).send(alunas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    if (id > 17 || id <= 0) {
        // res.send("id nao encontrado")
        //redirect serve para direcionar a aplicação para outra url
        res.redirect(301, "https://www.google.com.br")
    } else {
        console.log(id)
        res.status(200).send(alunas.find(aluna => aluna.id == id))

    }
}

exports.getBooks = (req, res) => {
    const id = req.params.id //pegar o id da aluna
    const aluna = alunas.find(aluna => aluna.id == id)

    if (!aluna) {
        res.send("aluna nao encontrada")
    }

    console.log(aluna)
    const livros = aluna.livros
    const titulosLivros = livros.map(function (element) {
        return element.titulo
    })
    // const tituloLivros = livros.map(element => element.titulo)

    res.status(200).send(titulosLivros)

}

exports.getSp = (req, res) => {
    // const nasceuSP = alunas.filter(element => element.nasceuEmSp.indexOf("true")>-1) //com indexof
    const nasceuSP = alunas.filter(element => element.nasceuEmSp == "true")
    const listaSP = nasceuSP.map(element => element.nome)
    res.status(200).send(listaSP)
}
exports.getIdade = (req, res) => {
    const id = req.params.id //pegar o id da aluna
    const aluna = alunas.find(aluna => aluna.id == id)
    if (!aluna) {
        res.send("aluna nao encontrada")
    }
    
    const nascimento = aluna.dateOfBirth.split('/')
    const diaDeNasc = nascimento[0]
    const mesDeNasc = nascimento[1]
    const anoDeNasc = nascimento[2]
    const idade = calcularIdade(anoDeNasc, mesDeNasc,diaDeNasc)

    res.status(200).send({idade})

}
function calcularIdade(anoDeNasc, mesDeNasc, diaDeNasc) {
    const now = new Date()
    const anoAtual = now.getFullYear()
    const mesAtual = now.getMonth() + 1
    const hoje = now.getDate()

    let idade = anoAtual - anoDeNasc

    if (mesAtual < mesDeNasc || (mesAtual == mesDeNasc && hoje < diaDeNasc)) {
        idade -= 1
    }
    return idade
}
//para mandar informações é envida no body, por isso o req.body

exports.post = (req,res) => {
    const { nome, dateOfBirth, nasceuEmSp, id, livros } = req.body
    alunas.push({ nome, dateOfBirth, nasceuEmSp, id, livros })

    //colocar o caminho absoluto do arquivo JSON
    //transformar o JSON em string (JSON.stringify) para conseguir manipular os dados
    //utf8 - formato que eu quero gravar

    fs.writeFile("./src/model/alunas.json", JSON.stringify(alunas), 'utf8', function(err) {
        if(err){
            return res.status(500).send({ message: err}) //indica que caso tenho um erro, a aplicação nao irá parar
        }
        console.log("arquivo gravado")

    })
    return res.status(201).send(alunas)
}

exports.postBooks = (req,res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)
    if (!aluna) {
        res.send('Nao encontrei essa garota')
    }
    const { titulo, leu } = req.body
    alunas[aluna.id -1].livros.push({ titulo, leu})

    fs.writeFile('./src/model/alunas.json', JSON.stringify(alunas), 'utf8', function (err){
        if (err){
            return res.status(500).send({ meassage: err})
        }
        console.log('arquivo salvo')
    })
    return res.status(201).send(alunas[aluna.id-1].livros)
}

