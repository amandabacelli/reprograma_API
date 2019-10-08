const express = require('express')
const router = express.Router() //auxiliar a criação das rotas

router.get('/', function(req,res){
    res.status(200).send({
        title: 'Reprograma Meli',
        version: '0.0.1'
    })
})
module.exports = router
