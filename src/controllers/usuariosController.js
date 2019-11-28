const usuarios = require ('../models/usuarios.json')

exports.get = (req, res) => {
    res.status(200).send(usuarios)

}

exports.getId = (req,res) => {
    const id = req.params.id
    const buscarID = (usuarios.filter(element => element.id == id))

    if (!buscarID){
        res.status(404)
    }
    res.status(200).send(buscarID)
}