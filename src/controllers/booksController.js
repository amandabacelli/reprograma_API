const books = require('../models/books.json')
const usuarios = require('../models/usuarios.json')

exports.get = (req,res) => {
    res.status(200).send(books)
}

exports.getUsersBooks = (req,res) => {
    const { year, id } = req.params;
    // const year = req.params.year
   // const id = req.params.id
    const findYear = (books.filter(element => element.year = year))
    const findId = (usuarios.filter(element => element.id == id))
    console.log(findId, findYear)

    res.status(200).json({user:findId, book:findYear})
}