const professoras = require('../model/professoras.json')
const fs = require('fs')

//RETORNA TODAS AS PROPRIEDADES DA LISTA
// exports.get = (req,res) => {
//     res.status(200).send(professoras)

// }

//OPÇÃO 1

// exports.getNoCpf = (req, res) => {
//    const arrProfs = []
//    for(let i = 0; i<professoras.length; i++){
//        const semCpf = {}
//        semCpf.id = professoras[i].id
//        semCpf.nome = professoras[i].nome
//        semCpf.especialidade = professoras[i].especialidade
//        semCpf.signo = professoras[i].signo
//        arrProfs.push(semCpf)

//    }
//    res.status(200).send(arrProfs)
// }

//OPÇÃO 2

// exports.getNoCpf = (req,res) => {
//     const profNoCpf = professoras.map(item => {
//         item.cpf = '***********'
//         return item

//     })
//     res.status(200).send(profNoCpf)
// }

//OPCAO 3

exports.getNoCpf = (req, res) => {
    const profNoCpf = professoras.map(item => {
        delete item.cpf
        return item

    })
    res.status(200).send(profNoCpf)

}

exports.getIdProfa = (req, res) => {
    const profNoCpf = professoras.map(item => {
        delete item.cpf
        return item

    })
    const id = req.params.id
       if (id > 4 || id <= 0) {
        // res.send("id nao encontrado")
        //redirect serve para direcionar a aplicação para outra url
        res.redirect(301, "https://www.google.com.br")
    } else {
        console.log(id)
        res.status(200).send(profNoCpf.find(profa => profa.id == id))

    }
}

//segunda forma

// exports.getById = (req, res) =>{
//     const id = req.params.id
//     const prof = professoras.find(profa => profa.id == id)
//     delete prof.cpf
//     res.status(200).send(prof)
// }

exports.post = (req,res) => {
    const { id, nome, especialidade, signo, cpf } = req.body
    professoras.push({ id, nome, especialidade, signo, cpf })

    //colocar o caminho absoluto do arquivo JSON
    //transformar o JSON em string (JSON.stringify) para conseguir manipular os dados
    //utf8 - formato que eu quero gravar

    fs.writeFile("./src/model/professoras.json", JSON.stringify(professoras), 'utf8', function(err) {
        if(err){
            return res.status(500).send({ message: err}) //indica que caso tenho um erro, a aplicação nao irá parar
        }
        console.log("arquivo gravado")

    })
    return res.status(201).send(professoras)
}